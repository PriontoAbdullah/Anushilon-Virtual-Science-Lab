import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/bn-bd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';

const useStyles = makeStyles(() => ({
  comment__box: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px 10px',
  },
  comment__input: {
    flex: '1',
    paddingRight: '5px',
  },
  commnet__button: {
    flex: '0',
  },
}));

function CommentField({ postID }) {
  const classes = useStyles();

  const [comment, setComment] = useState('');
  const { auth } = useSelector((state) => state);

  function postComment(e) {
    e.preventDefault();

    comment &&
      db
        .collection('posts')
        .doc(postID)
        .collection('comments')
        .add({
          text: comment,
          username: auth.user.name,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          date: moment().locale('bn-bd').format('LT'),
        });
    setComment('');
  }

  return (
    <form className={classes.comment__box}>
      <TextField
        value={comment}
        placeholder="মন্তব্য লিখুন..."
        onChange={(e) => setComment(e.target.value)}
        className={classes.comment__input}
        id="standard-basic"
      />
      <Button
        color="primary"
        type="submit"
        onClick={postComment}
        className={classes.comment__button}
        variant="outlined"
      >
        <span className="font-body text-base text-brand-900 font-medium tracking-wide">
          মন্তব্য করুন
        </span>
      </Button>
    </form>
  );
}

export default CommentField;
