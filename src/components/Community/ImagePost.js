import { LinearProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/bn-bd';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { db, storage } from '../../configs/firebase';

const useStyles = makeStyles(() => ({
  image__upload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0 50px 0',
  },
  input__holder: {
    maxWidth: '600px',
    padding: '20px 40px',
    background: '#fafafa',
    boxShadow: '5px 5px 10px #e7e7e7, -5px -5px 10px #f5f5f5',
    borderRadius: '10px',
  },
  caption__upload: {
    width: '100%',
    marginBottom: '15px',
    fontFamily: 'Hind Siliguri',
    fontSize: '14px',
  },
  file__upload: {
    width: '100%',
    height: '40px',
    marginBottom: '15px',
  },
  button__upload: {
    width: '100%',
    backgroundColor: '#1E293B',
    fontFamily: 'Hind Siliguri',
    fontSize: '16px',
    marginBottom: '10px',
  },
}));

function ImagePost({ displayName }) {
  const classes = useStyles();
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [coverDragEnter, setCoverDragEnter] = useState(false);

  const handleCoverDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCoverDragEnter(true);
  };
  const handleCoverDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCoverDragEnter(true);
  };
  const handleCoverDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCoverDragEnter(false);
  };
  const handleCoverDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowProgressBar(true);
    if (e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  function fileUpload(e) {
    setShowProgressBar(true);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function handleCaption(e) {
    setCaption(e.target.value);
  }

  function handlePost() {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      // getting the upload status while the image is uploading
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // error function
          console.log(error);
        },
        () => {
          // completion function
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection('posts').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imgUrl: url,
                username: displayName,
                date: moment().locale('bn-bd').format('LLL'),
              });

              setProgress(0);
              setCaption('');
              setImage(null);
              setShowProgressBar(false);
              setCoverDragEnter(false);
            });
        }
      );
    } else {
      toast.error('অনুগ্রহ করে একটি ছবি নির্বাচন করুন');
    }
  }

  return (
    <div className={classes.image__upload}>
      <div className={classes.input__holder}>
        <p className="text-base font-body font-semibold tracking-wider text-brand-900">
          কমিউনিটিতে ক্যাপশন লিখে ছবি পোস্ট করুন
        </p>

        {showProgressBar && (
          <LinearProgress
            variant="determinate"
            className="mt-4"
            value={progress}
            max="100"
          />
        )}
        <TextField
          className={classes.caption__upload}
          onChange={handleCaption}
          value={caption}
          rows={5}
          id="standard-basic"
          label="ক্যাপশন লিখুন"
        />
        {/* Cover Photo */}

        <div className="mb-5 w-128">
          <label
            className={`mt-1 flex justify-center px-6 py-12 border-2 ${
              coverDragEnter ? 'border-brand-700' : 'border-gray-300'
            } border-dashed rounded-md`}
            htmlFor="image-cover"
            onDragEnter={handleCoverDragEnter}
            onDragLeave={handleCoverDragLeave}
            onDragOver={handleCoverDragOver}
            onDrop={handleCoverDrop}
          >
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex text-sm text-gray-700">
                <label
                  htmlFor="image-cover"
                  className="relative cursor-pointer rounded-md font-body font-semibold tracking-wider text-brand-900 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>ছবি আপলোড করুন </span>
                  <input
                    onChange={fileUpload}
                    type="file"
                    name="image-cover"
                    id="image-cover"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 font-semibold tracking-wider font-body">
                  অথবা এখানে টেনে আনুন
                </p>
              </div>
              <p className="text-xs text-gray-600 tracking-wider font-body">
                শুধুমাত্র ইমেজ ফাইল সমর্থন করবে
              </p>
            </div>
          </label>
        </div>

        <Button
          className={classes.button__upload}
          onClick={handlePost}
          variant="contained"
          color="primary"
        >
          ছবি পোস্ট করুন
        </Button>
      </div>
    </div>
  );
}

export default ImagePost;
