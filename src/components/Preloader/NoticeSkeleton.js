import React from 'react';

const NoticeSkeleton = () => {
  return (
    <div className="max-w-xl border-2 rounded-md mx-auto my-6 p-6">
      <div className="flex flex-row justify-between">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
          <div className="flex flex-col space-y-3">
            <div className="w-36 bg-gray-300 h-3 rounded-md "></div>
            <div className="w-24 bg-gray-300 h-3 rounded-md "></div>
          </div>
        </div>
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-10 bg-gray-300 h-10 rounded-full "></div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-6">
        <div className="w-128 bg-gray-300 h-3 rounded-md "></div>
        <div className="w-72 bg-gray-300 h-3 rounded-md "></div>
      </div>
    </div>
  );
};

export default NoticeSkeleton;
