import { IconButton } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import './Announcement.css';
import MarksField from './MarksField';

function Announcement({ image, imgUrl, name, date, content, marks, teacher }) {
  const { auth } = useSelector((state) => state);

  let fileName = imgUrl.substr(
    imgUrl.indexOf('/o/') + 12,
    imgUrl.indexOf('?') - (imgUrl.indexOf('/o/') + 12)
  );
  fileName = fileName.replaceAll('%20', ' ');

  return (
    <div className="announcement">
      <div className="announcement__informationContainer">
        <div className="announcement__infoSection">
          <div className="announcement__imageContainer">
            <img src={image} alt="" />
          </div>
          <div className="announcement__nameAndDate">
            <div className="announcement__name text-base font-body font-semibold tracking-wider text-brand-900">
              {name}
            </div>
            <div className="announcement__date text-gray-700 font-body tracking-wide">
              {date}
            </div>
          </div>
        </div>
        <div className="announcement__infoSection">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="announcement__content text-base font-body font-medium tracking-wider text-gray-900">
        {content}
      </div>
      <div className="flex flex-start mt-2 text-base font-body font-semibold tracking-wider text-brand-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-6 w-6 mr-2 text-gray-500"
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
        <a href={imgUrl} className="flex flex-start">
          {fileName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6 ml-1 text-brand-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      {marks && (
        <p className="pt-6 text-base font-body font-semibold tracking-wider text-brand-900">
          <span className="font-medium text-gray-700"> ফলাফলঃ </span> {teacher}{' '}
          : <span className="text-gray-900">{marks}</span>
        </p>
      )}

      {auth.user.role === 'teacher' && !marks && (
        <div className="pt-6">
          <MarksField imgUrl={imgUrl} />
        </div>
      )}
    </div>
  );
}

export default Announcement;
