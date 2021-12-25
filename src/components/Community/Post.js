import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';
import { db } from '../../configs/firebase';
import '../Labroom/Announcement.css';
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
      <div className="post__header">
        <div className="announcement__infoSection">
          <div className="announcement__imageContainer">
            <Avatar alt={props.username} src="/static/images/avatar/3.jpg" />
          </div>
          <div className="announcement__nameAndDate">
            <div className="announcement__name text-base font-body font-semibold tracking-wider text-brand-900">
              {props.username}
            </div>
            <div className="announcement__date text-gray-700 font-body tracking-wide">
              {props.date}
            </div>
          </div>
        </div>
      </div>

      <p className="post_cap">{props.caption}</p>

      <img className="post__image" src={props.imgUrl} alt="" />

      <div className="comments__box comment-scroll overflow-y-scroll">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.username}
            text={comment.text}
            date={comment.date}
          />
        ))}
      </div>

      {<CommentField postID={props.postID} />}
    </div>
  );
}

export default Post;
