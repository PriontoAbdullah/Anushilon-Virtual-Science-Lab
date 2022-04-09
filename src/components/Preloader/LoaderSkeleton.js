import React from 'react';

const LoaderSkeleton = () => {
  return (
    <section className="bg-white p-2 mx-2 mt-4 sm:p-4 sm:h-64 rounded-2xl shadow-3xl flex sm:flex-row gap-5 select-none max-w-xs">
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-36 h-6 animate-pulse rounded-2xl"></div>
          <div className="bg-gray-200 w-28 h-6 animate-pulse rounded-2xl"></div>
          <div className="bg-gray-200 w-16 h-16 animate-pulse rounded-full ml-auto -mt-12"></div>
          <div className="bg-gray-100 w-full animate-pulse h-16 rounded-2xl"></div>
        </div>
        <div className="ml-auto flex gap-3">
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LoaderSkeleton;
