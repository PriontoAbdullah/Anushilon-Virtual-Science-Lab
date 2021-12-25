import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

function MarksField({ imgUrl }) {
  const classes = useStyles();

  const [comment, setComment] = useState('');
  const { auth } = useSelector((state) => state);
  const { id } = useParams();

  const postComment = async (e) => {
    e.preventDefault();

    if (comment) {
      try {
        const myClassRef = await db.collection('classes').doc(id).get();
        const myClassData = await myClassRef.data();

        let tempPosts = myClassData.posts;

        let selectedPost = tempPosts.filter((posts) => posts.imgUrl === imgUrl);
        selectedPost[0].marks = comment;
        selectedPost[0].teacher = auth.user.name;

        myClassRef.ref.update({
          posts: tempPosts,
        });
        setComment('');
      } catch (err) {
        toast.error(
          `মন্তব্য করার সময় একটি ত্রুটি ছিল, অনুগ্রহ করে আবার চেষ্টা করুন!`
        );
      }
    } else {
      toast.error('অনুগ্রহ করে মন্তব্য লিখুন ');
    }
  };

  return (
    <form className={classes.comment__box}>
      <TextField
        value={comment}
        placeholder="মূল্যায়ন করুন..."
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
          জমা দিন
        </span>
      </Button>
    </form>
  );
}

export default MarksField;
