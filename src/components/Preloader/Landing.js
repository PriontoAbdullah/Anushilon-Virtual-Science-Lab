import React from 'react';

const Landing = () => {
  return (
    <div
      className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/bz7Tqf3/header-bg.png)`,
      }}
    >
      <div className="min-h-screen" style={{ backgroundColor: '#635BD3' }}>
        <div>
          <h2 className="text-center pt-10 pb-10 lg:pb-20 font-display text-3xl font-bold leading-10 lg:leading-normal tracking-wide text-white lg:text-5xl mx-auto hidden">
            অনুশীলন - ভার্চুয়াল সাইন্স ল্যাব
          </h2>
          {/* Pre Loader Animation */}
          <img
            src="https://cdn.dribbble.com/users/806947/screenshots/9680900/media/3119aee698cbf29b6f70e921638a3722.gif"
            alt="loader"
            className="pt-20 sm:pt-0 sm:h-screen mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
