import React, { useRef, useState } from 'react';
import Iframe from 'react-iframe';
import loader from '../../../assets/images/loader/simulation.gif';
import useWindowDimensions from '../../../utils/useWindowDimensions';

const PlaySimulationTemplate = ({ videoURL }) => {
  const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);

  // For Responsive Design
  const { width } = useWindowDimensions();
  let getHeight = width > 1024 ? 450 : 470;

  // For Pre-Loader Function
  const keyUpTimer = useRef(null);
  const keyUpTimerDelay = 3000;
  clearTimeout(keyUpTimer.current);

  keyUpTimer.current = setTimeout(() => {
    setPreLoaderVisibility(false);
  }, keyUpTimerDelay);

  return (
    <div className="px-4 py-3">
      {/* Pre Loader */}
      {preLoaderVisibility ? (
        <div>
          <img src={loader} alt="loading-gif" className="w-96 mx-auto" />
          <p className="text-2xl py-8 font-body font-medium text-center">
            অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন
          </p>
        </div>
      ) : (
        // Simulation Play Ground
        <Iframe
          url={videoURL}
          width="100%"
          height={getHeight}
          className="mx-0 sm:mx-auto"
          display="initial"
          position="relative"
        />
      )}
    </div>
  );
};

export default PlaySimulationTemplate;
