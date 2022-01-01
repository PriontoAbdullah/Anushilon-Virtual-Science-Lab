import React from 'react';

const WorkshopCard = ({
  title,
  details,
  link,
  date,
  time,
  imgUrl,
  createAt,
}) => {
  return (
    <div className="px-4 md:w-1/3 font-body mb-8">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-3xl">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imgUrl}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-wide text-xs title-font font-medium text-gray-700 mb-2">
            {createAt}
          </h2>
          <h1 className="title-font text-lg font-medium text-brand-900 mb-3">
            {title}
          </h1>
          <p className="leading-normal text-sm mb-3 text-gray-800">{details}</p>

          <a
            className="text-indigo-500 inline-flex items-center mb-2  font-medium"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            ওয়ার্কশপে জয়েন করুন
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="flex items-center flex-wrap mx-auto">
            <span className="text-gray-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date}
            </span>
            <span className="text-gray-700 inline-flex items-center leading-none text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
