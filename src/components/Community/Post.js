import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';
import { db } from '../../configs/firebase';
import Comment from './Comment';
import CommentField from './CommentField';
import './Post.css';

function Post(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (props.postID) {
      unsubscribe = db
        .collection('posts')
        .doc(props.postID)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [props.postID]);

  return (
    <div className="post">
      <div className="post__header flex justify-between">
        <div>
          <Avatar alt={props.username} src="/static/images/avatar/3.jpg" />
          <h3 className="font-body text-base text-brand-900 font-semibold tracking-wide">
            {props.username}
          </h3>
        </div>
        <p>{props.timestamp.toDate()}</p>
      </div>

      <p className="post_cap">{props.caption}</p>

      <img className="post__image" src={props.imgUrl} alt="" />

      <div className="comments__box comment-scroll overflow-y-scroll">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.username}
            text={comment.text}
          />
        ))}
      </div>

      {<CommentField postID={props.postID} />}
    </div>
  );
}

export default Post;
