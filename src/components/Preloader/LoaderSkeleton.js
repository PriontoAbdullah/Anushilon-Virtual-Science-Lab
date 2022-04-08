import React from 'react';
import loader from '../../assets/images/loader/skeleton.gif';

const LoaderSkeleton = () => {
  return (
    <section>
      <div>
        <img src={loader} alt="loading-gif" className="w-96 mx-auto" />
        <p className="text-2xl py-8 font-body font-medium text-center">
          অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন
        </p>
      </div>
    </section>
  );
};

export default LoaderSkeleton;
