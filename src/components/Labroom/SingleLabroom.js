import { IconButton, LinearProgress } from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/bn-bd';
import React, { Fragment, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { db, storage } from '../../configs/firebase';
import useWindowDimensions from '../../utils/useWindowDimensions';
import HeaderBar from '../Dashboard/Header/HeaderBar';
import SideBar from '../Dashboard/Header/SideBar';
import Announcement from './Announcement';
import './Class.css';

const SingleLabroom = () => {
  const [classData, setClassData] = useState({});
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const { auth } = useSelector((state) => state);

  const [announcementContent, setAnnouncementContent] = useState('');
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

  document.title = 'অনুশীলন - লাবরুম 🚀';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get device width from custom hooks
  const { width } = useWindowDimensions();

  let notificationWidth =
    width > 500 ? '480px' : width > 400 ? '390px' : '370px';

  useEffect(() => {
    // reverse the array
    let reversedArray = classData?.posts?.reverse();
    setPosts(reversedArray);
  }, [classData]);

  const createPost = async () => {
    if (announcementContent === undefined || announcementContent === '') {
      toast.error(`অনুগ্রহ করে এসাইনমেন্ট এর নাম লিখুন`);
      return;
    }

    if (image) {
      try {
        const myClassRef = await db.collection('classes').doc(id).get();
        const myClassData = await myClassRef.data();

        let tempPosts = myClassData.posts;
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
                tempPosts.push({
                  authorId: auth.user._id,
                  imgUrl: url,
                  content: announcementContent,
                  date: moment().locale('bn-bd').format('LLL'),
                  image: auth.user.avatar,
                  name: auth.user.name,
                });
                myClassRef.ref.update({
                  posts: tempPosts,
                });
                setAnnouncementContent('');
                setProgress(0);
                setImage(null);
                setShowProgressBar(false);
                setCoverDragEnter(false);
              });
          }
        );
      } catch (error) {
        toast.error(
          `পোস্ট করার সময় একটি ত্রুটি ছিল, অনুগ্রহ করে আবার চেষ্টা করুন! ${error}`
        );
      }
    } else {
      toast.error('অনুগ্রহ করে একটি ফাইল নির্বাচন করুন');
    }
  };

  useEffect(() => {
    db.collection('classes')
      .doc(id)
      .onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!data) history.replace('/labroom');

        setClassData(data);
      });
  }, [history, id]);

  return (
    <Fragment>
      <div className="flex h-screen overflow-hidden">
        {/* For Toast Notification */}
        <Toaster
          toastOptions={{
            duration: 7000,
            style: {
              minWidth: `${notificationWidth}`,
              fontFamily: 'Hind Siliguri',
              zIndex: 999,
            },
          }}
        />
        {/*  Site Bar*/}
        <SideBar />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <HeaderBar />

          <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto bg-gray-50 h-full w-full comment-scroll overflow-y-scroll">
            <div className="class">
              <div className="class__nameBox">
                <div className="class__name text-3xl font-body font-semibold tracking-wider">
                  {classData?.name}
                </div>
                <div className="text-xl mt-4 font-body font-semibold tracking-wider">
                  {classData?.creatorName}
                </div>
                <div className="text-base mt-4 font-body font-medium tracking-wider">
                  লাবরুম কোড : {id}
                </div>
              </div>
              <div className="class__announce_box">
                <p className="text-base font-body mb-3 font-semibold tracking-wider text-brand-900">
                  লাবরুমে আপনার অ্যাসাইনমেন্ট পোস্ট করুন
                </p>

                {showProgressBar && (
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    max="100"
                    className="mb-4"
                  />
                )}

                <div className="class__announce">
                  <img src={auth?.user?.avatar} alt="" />
                  <input
                    type="text"
                    value={announcementContent}
                    onChange={(e) => setAnnouncementContent(e.target.value)}
                    placeholder="এসাইনমেন্ট এর নাম লিখুন"
                  />
                  <IconButton onClick={createPost}>
                    <SendOutlined />
                  </IconButton>
                </div>

                <label
                  className={`mt-3 flex justify-center px-6 py-8 border-2 ${
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
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-10 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>

                    <div className="flex text-sm text-gray-700 pt-1">
                      <label
                        htmlFor="image-cover"
                        className="relative cursor-pointer rounded-md font-body font-semibold tracking-wider text-brand-900 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>ফাইল আপলোড করুন </span>
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
                      শুধুমাত্র পিডিএফ অথবা ডক ফাইল সমর্থন করবে
                    </p>
                  </div>
                </label>
              </div>
              {posts?.map((post) => (
                <Announcement
                  content={post.content}
                  imgUrl={post.imgUrl}
                  date={post.date}
                  image={post.image}
                  name={post.name}
                  key={post.imgUrl}
                  marks={post.marks}
                  teacher={post.teacher}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleLabroom;
