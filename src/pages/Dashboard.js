import React, { Fragment, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Community from '../components/Community/Community';
import HeaderBar from '../components/Dashboard/Header/HeaderBar';
import SideBar from '../components/Dashboard/Header/SideBar';
import SimulationsBio from '../components/Dashboard/Simulation/SimulationsBio';
import SimulationsChe from '../components/Dashboard/Simulation/SimulationsChe';
import SimulationsPhy from '../components/Dashboard/Simulation/SimulationsPhy';
import SimulationTemplate from '../components/Dashboard/Simulation/SimulationTemplate';
import Labroom from '../components/Labroom/Labroom';
import useWindowDimensions from '../utils/useWindowDimensions';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { page } = useParams();

  document.title = 'অনুশীলন - সিমুলেশন ড্যাশবোর্ড 🚀';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get device width from custom hooks
  const { width } = useWindowDimensions();

  let notificationWidth =
    width > 500 ? '480px' : width > 400 ? '390px' : '370px';

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
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <HeaderBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto bg-gray-50 h-full w-full comment-scroll overflow-y-scroll">
            {page === 'simulation-phy' ? (
              <SimulationsPhy />
            ) : page === 'simulation-che' ? (
              <SimulationsChe />
            ) : page === 'simulation-bio' ? (
              <SimulationsBio />
            ) : page === 'community' ? (
              <Community />
            ) : page === 'labroom' ? (
              <Labroom />
            ) : page ===
              'মিটার-ব্রিজ-ব্যবহার-করে-কোন-তারের-আপেক্ষিক-রোধ-নির্ণয়।' ? (
              <SimulationTemplate />
            ) : null}
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
