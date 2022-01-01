import { LinearProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import 'moment/locale/bn-bd';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { db, storage } from '../../configs/firebase';
import '../Community/ImageUpload.css';

const WorkshopPost = () => {
  const { auth } = useSelector((state) => state);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
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

  function handlePost() {
    if (title && details && date && time && link) {
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
                db.collection('workshop').add({
                  title: title,
                  details: details,
                  link: link,
                  date: date,
                  time: time,
                  imgUrl: url,
                  creatorEmail: auth.user.email,
                  createAt: moment().locale('bn-bd').format('LLL'),
                });

                setProgress(0);
                setTitle('');
                setDetails('');
                setLink('');
                setDate('');
                setTime('');
                setImage(null);
                setShowProgressBar(false);
                setCoverDragEnter(false);
              });
          }
        );
      } else {
        toast.error('অনুগ্রহ করে একটি ছবি নির্বাচন করুন');
      }
    } else {
      toast.error('অনুগ্রহ করে সব ক্ষেত্র গুলো পূরণ করুন');
    }
  }

  return (
    <div className="image__upload font-body">
      <div className="input__holder border border-gray-200 shadow-4xl">
        <p className="text-base font-body font-semibold tracking-wider text-brand-900">
          নতুন ওয়ার্কশপ পোস্ট করুন
        </p>

        {showProgressBar && (
          <LinearProgress
            variant="determinate"
            className="my-4"
            value={progress}
            max="100"
          />
        )}
        <TextField
          className="caption__upload"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="standard-basic"
          label="ওয়ার্কশপের নাম লিখুন"
        />
        <TextField
          className="caption__upload"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          multiline
          rows={3}
          id="standard-basic"
          label="ওয়ার্কশপ সম্পর্কে সংক্ষিপ্ত বিবরণ লিখুন"
        />
        <TextField
          className="caption__upload"
          onChange={(e) => setLink(e.target.value)}
          value={link}
          id="standard-basic"
          label="ওয়ার্কশপের লিংক দিন "
        />
        <div className="flex flex-row items-center w-full mb-4">
          <div className="w-1/2 mx-4">
            <TextField
              className="caption__upload"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              id="standard-basic"
              label="ওয়ার্কশপের তারিখ লিখুন"
            />
          </div>
          <div className="w-1/2 mx-4">
            <TextField
              className="caption__upload"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              id="standard-basic"
              label="ওয়ার্কশপের সময় দিন"
            />
          </div>
        </div>
        {/* Cover Photo */}

        <div className="mb-5 w-80 sm:w-128">
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
          className="button__upload"
          onClick={handlePost}
          variant="contained"
          color="primary"
        >
          ওয়ার্কশপ পোস্ট করুন
        </Button>
      </div>
    </div>
  );
};

export default WorkshopPost;
