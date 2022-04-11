import React, { useState } from 'react';
import {
  biology09,
  biology10,
  biology11,
  biology12,
} from '../../../data/biologySimulation';
import {
  chemistry09,
  chemistry10,
  chemistry11,
  chemistry12,
} from '../../../data/chemistrySimulation';
import {
  physics09,
  physics10,
  physics11,
  physics12,
} from '../../../data/physicsSimulation';
import BookIcon from '../../../helpers/BookIcon';
import SingleSimulation from './SingleSimulation';

const ViewAllSimulation = (props) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      {props.viewSimulation ? (
        <section
          className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://i.ibb.co/T0RLPg6/biography-bg.png)`,
          }}
          ref={props.compRef}
        >
          <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-3 lg:px-4 lg:py-8">
            <div>
              {/* Close Button */}
              <button
                className="simulation-cross-button"
                type="button"
                onClick={() => {
                  props.setViewSimulation(false);
                  props.setSelectTab(0);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-x"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M10 10l4 4m0 -4l-4 4" />
                </svg>
              </button>
              <h2 className="font-display font-bold text-brand-900 text-3xl text-center pt-1 pb-4">
                {props.selectTab === 1
                  ? 'পদার্থ বিজ্ঞান'
                  : props.selectTab === 2
                  ? 'রসায়ন'
                  : props.selectTab === 3
                  ? 'জীব বিজ্ঞান'
                  : null}
              </h2>
            </div>
            {/* View Class Name Buttons */}
            <div className="flex flex-wrap flex-row">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row font-body"
                  role="tablist"
                >
                  <li className="simulation-class-list ">
                    <a
                      className={`simulation-class-name 
										${openTab === 1 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#12"
                      role="tablist"
                    >
                      <BookIcon /> দ্বাদশ শ্রেণী
                    </a>
                  </li>
                  <li className="simulation-class-list ">
                    <a
                      className={`simulation-class-name
										${openTab === 2 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#11"
                      role="tablist"
                    >
                      <BookIcon /> একাদশ শ্রেণী
                    </a>
                  </li>
                  <li className="simulation-class-list ">
                    <a
                      className={`simulation-class-name
										${openTab === 3 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#10"
                      role="tablist"
                    >
                      <BookIcon /> দশম শ্রেণী
                    </a>
                  </li>
                  <li className="simulation-class-list ">
                    <a
                      className={`simulation-class-name
										${openTab === 4 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#9"
                      role="tablist"
                    >
                      <BookIcon /> নবম শ্রেণী
                    </a>
                  </li>
                </ul>
                {/* View Simulation Contents */}
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-3xl rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? 'block' : 'hidden'}
                        id="12"
                      >
                        <div className="simulation-item-outer">
                          <div className="simulation-item-inner">
                            {/* CLass 12 */}
                            {props.selectTab === 1 &&
                              physics12 &&
                              physics12.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 2 &&
                              chemistry12 &&
                              chemistry12.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 3 &&
                              biology12 &&
                              biology12.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className={openTab === 2 ? 'block' : 'hidden'}
                        id="11"
                      >
                        <div className="simulation-item-outer">
                          <div className="simulation-item-inner">
                            {/* CLass 11 */}
                            {props.selectTab === 1 &&
                              physics11 &&
                              physics11.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 2 &&
                              chemistry11 &&
                              chemistry11.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 3 &&
                              biology11 &&
                              biology11.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 3 ? 'block' : 'hidden'}
                        id="10"
                      >
                        <div className="simulation-item-outer">
                          <div className="simulation-item-inner">
                            {/* CLass 10 */}
                            {props.selectTab === 1 &&
                              physics10 &&
                              physics10.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 2 &&
                              chemistry10 &&
                              chemistry10.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 3 &&
                              biology10 &&
                              biology10.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 4 ? 'block' : 'hidden'}
                        id="9"
                      >
                        <div className="simulation-item-outer">
                          <div className="simulation-item-inner">
                            {/* CLass 09 */}
                            {props.selectTab === 1 &&
                              physics09 &&
                              physics09.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 2 &&
                              chemistry09 &&
                              chemistry09.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}

                            {props.selectTab === 3 &&
                              biology09 &&
                              biology09.map((item) => (
                                <SingleSimulation item={item} key={item.id} />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ViewAllSimulation;
