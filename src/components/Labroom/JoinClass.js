import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useRecoilState } from 'recoil';
import { db } from '../../configs/firebase';
import { joinDialogAtom } from '../../utils/atoms';

function JoinClass() {
  const [open, setOpen] = useRecoilState(joinDialogAtom);
  const [classId, setClassId] = useState('');
  const { auth } = useSelector((state) => state);

  const handleClose = () => {
    setOpen(false);
  };

  const joinClass = async () => {
    if (classId === undefined || classId === '') {
      toast.error(`ল্যাবরুম কোড প্রদান করুন`);
      return;
    }

    try {
      // check if class exists
      const classRef = await db.collection('classes').doc(classId).get();

      if (classRef.exists) {
        // user is enrolled
        const classData = await classRef.data();

        // add to current user's class list
        const userRef = await db
          .collection('users')
          .where('email', '==', auth.user.email)
          .get();

        const userData = await userRef.docs[0].data();

        let tempClassrooms = userData.enrolledClassrooms;
        tempClassrooms.push({
          creatorName: classData.creatorName,
          creatorPhoto: classData.creatorPhoto,
          id: classId,
          name: classData.name,
        });
        await userRef.docs[0].ref.update({
          enrolledClassrooms: tempClassrooms,
        });
        // alert done
        toast.success(
          `সফলভাবে ${classData.name} ল্যাব রুমে নথিভুক্ত করা হয়েছে`
        );

        handleClose();
      } else {
        toast.error(`ল্যাবরুম খুঁজে পাওয়া যায়নি, সঠিক কোড প্রদান করুন`);
        handleClose();
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="joinClass">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ল্যাবরুমে যোগ দিন</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ল্যাবরুমে যোগদানের জন্য ল্যাবের জয়েনিং কোডটি লিখুন
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ল্যাবরুমের নাম"
            type="text"
            fullWidth
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            বাতিল করুন
          </Button>
          <Button onClick={joinClass} color="primary">
            যোগদান দিন
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JoinClass;
