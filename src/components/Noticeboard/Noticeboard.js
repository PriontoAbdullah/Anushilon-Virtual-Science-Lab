import { IconButton } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/bn-bd';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';
import '../Labroom/Class.css';
import Notice from './Notice';

const Noticeboard = () => {
  const { auth } = useSelector((state) => state);
  const [noticeContent, setNoticeContent] = useState('');
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    let unsubscribe;

    unsubscribe = db
      .collection('noticeboard')
      .orderBy('date', 'desc')
      .onSnapshot((snapshot) => {
        setNotices(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const createPost = async () => {
    if (noticeContent === undefined || noticeContent === '') {
      toast.error('অনুগ্রহ করে নোটিশ লিখুন');
    } else {
      const post = {
        notice: noticeContent,
        date: moment().locale('bn-bd').format('LLL'),
        userName: auth.user.name,
        userImage: auth.user.avatar,
      };
      await db.collection('noticeboard').add(post);
      setNoticeContent('');
    }
  };

  return (
    <div className="class">
      {auth.user.role === 'teacher' && (
        <div className="class__announce_box">
          <p className="text-base font-body mb-3 font-semibold tracking-wider text-brand-900">
            নোটিশ বোর্ডে আপনার নোটিশ পোস্ট করুন
          </p>

          <div className="class__announce">
            <img src={auth?.user?.avatar} alt="" />
            <input
              type="text"
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              placeholder="নোটিশ লিখুন..."
            />
            <IconButton onClick={createPost}>
              <SendOutlined />
            </IconButton>
          </div>
        </div>
      )}

      {notices?.map((post) => (
        <Notice
          content={post.notice}
          date={post.date}
          image={post.userImage}
          name={post.userName}
          key={post.uid}
        />
      ))}
    </div>
  );
};

export default Noticeboard;
