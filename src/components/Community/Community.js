import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';
import ImagePost from './ImagePost';
import Post from './Post';

const Community = () => {
  const [posts, setPosts] = useState([]);

  const { auth } = useSelector((state) => state);

  // Getting data from database to the state
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div>
      <ImagePost displayName={auth.user.name} />

      {/* Looping through posts */}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postID={id}
          username={post.username}
          caption={post.caption}
          imgUrl={post.imgUrl}
        />
      ))}
      {/* ./Looping through posts */}
    </div>
  );
};

export default Community;
