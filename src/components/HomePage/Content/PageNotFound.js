import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Previous page function
const goBack = () => window.history.back();

const PageNotFound = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#BAEAF9' }}>
      <div className="flex flex-col mx-auto">
        <h2 className="text-center px-16 pt-6 pb-8 lg:pb-4 font-display text-xl font-semibold tracking-widest leading-relaxed text-brand-900 lg:text-4xl mx-auto">
          দুঃখিত! এই ফিচারটি খুব শীঘ্রই তৈরী করা হবে
        </h2>
        <div className="mx-auto">
          <button onClick={goBack} className="dashboard-button tracking-wider">
            <FontAwesomeIcon className="mr-2" icon={faArrowLeft} /> ফিরে যান
          </button>
        </div>
        {/* Loader Animation */}
        <img
          src="https://i.ibb.co/dbWQVLx/error.gif"
          alt="loader"
          className="pt-10 sm:pt-2 mx-auto w-full sm:w-2/4"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
