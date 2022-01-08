import {
  faBook,
  faDiceD6,
  faFlask,
  faPlayCircle,
  faTasks,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CheObservationTemplate from './CheObservationTemplate';
import CheProcedureTemplate from './CheProcedureTemplate';
import CheTheoryTemplate from './CheTheoryTemplate';
import PlaySimulationTemplate from './PlaySimulationTemplate';
import VideoTemplate from './VideoTemplate';

const CheSimulationTemplate = () => {
  const [openTab, setOpenTab] = React.useState(1);
  document.title =
    'KMnO₄ দ্রবন দ্বারা অজানা ঘনমাত্রার দ্রবনে ফেরাস আয়নের পরিমান নির্ণয়।';

  // YouTube video ID
  const videoSimulationId = {
    videoId: 'MY97TzPVGMs',
    animationId: 'XWnzUVaQhSY',
  };

  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* For mobile view header */}
          <nav className="block md:hidden rounded font-body w-full mb-3">
            <ol className="list-reset flex flex-wrap tracking-wide text-lg">
              <li>
                <NavLink
                  exact
                  to="/simulation-phy"
                  className="font-medium text-brand-900"
                >
                  সিমুলেশন
                </NavLink>
              </li>
              <li>
                <span className="mx-2 font-bold">&gt;</span>
              </li>
              <li>
                <NavLink
                  exact
                  to="/simulation-phy"
                  className="font-medium text-brand-900"
                >
                  রসায়ন
                </NavLink>
              </li>
              <li>
                <span className="mx-2 font-bold">&gt;</span>
              </li>
              <li>
                <span className="text-base">
                  KMnO₄ দ্রবন দ্বারা অজানা ঘনমাত্রার দ্রবনে ফেরাস আয়নের পরিমান
                  নির্ণয়।
                </span>
              </li>
            </ol>
          </nav>
          {/* Tab Button List */}
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={` simulation-template  
									${openTab === 1 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <FontAwesomeIcon icon={faBook} className="mr-1" /> তত্ত্ব
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={` simulation-template  
                                ${
                                  openTab === 2
                                    ? 'text-white bg-brand-900'
                                    : 'text-brand-900 bg-white'
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <FontAwesomeIcon icon={faTasks} className="mr-1" /> কার্যপ্রণালী
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                  ${
                    openTab === 3
                      ? 'text-white bg-brand-900'
                      : 'text-brand-900 bg-white'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <FontAwesomeIcon icon={faVideo} className="mr-1" /> ভিডিও
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
									${openTab === 4 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <FontAwesomeIcon icon={faPlayCircle} className="mr-1" />{' '}
                অ্যানিমেশন
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                                ${
                                  openTab === 5
                                    ? 'text-white bg-brand-900'
                                    : 'text-brand-900 bg-white'
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <FontAwesomeIcon icon={faDiceD6} className="mr-1" /> সিমুলেটর
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`simulation-template  
                                ${
                                  openTab === 6
                                    ? 'text-white bg-brand-900'
                                    : 'text-brand-900 bg-white'
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                <FontAwesomeIcon icon={faFlask} className="mr-1" /> পর্যবেক্ষণ
              </a>
            </li>
          </ul>
          {/* Tab Content Components */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`mb-5 ${openTab === 1 ? 'block' : 'hidden'}`}
                  id="link1"
                >
                  <CheTheoryTemplate />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <CheProcedureTemplate />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <VideoTemplate videoId={videoSimulationId.videoId} />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <VideoTemplate videoId={videoSimulationId.animationId} />
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
                  <PlaySimulationTemplate
                    videoURL={
                      'https://priontoabdullah.github.io/Anushilon-Simulations/html5/che121.html'
                    }
                  />
                </div>
                <div className={openTab === 6 ? 'block' : 'hidden'} id="link6">
                  <CheObservationTemplate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheSimulationTemplate;
