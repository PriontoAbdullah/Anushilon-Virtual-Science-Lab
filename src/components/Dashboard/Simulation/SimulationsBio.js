import React, { useState } from 'react';
import {
  biology09,
  biology10,
  biology11,
  biology12,
} from '../../../data/biologySimulation';
import BookIcon from '../../../helpers/BookIcon';
import SingleSimulation from '../../HomePage/Simulation/SingleSimulation';

const SimulationsBio = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-3 lg:px-4 lg:py-8">
      <div className="flex flex-wrap flex-row">
        <div className="w-full">
          {/* View Class Name Buttons */}
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row font-body"
            role="tablist"
          >
            <li className="simulation-class-list ">
              <a
                className={`simulation-class-name 
                                          ${
                                            openTab === 1
                                              ? 'text-white bg-brand-900'
                                              : 'text-brand-900 bg-white'
                                          }`}
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
                href="#11"
                role="tablist"
              >
                <BookIcon /> একাদশ শ্রেণী
              </a>
            </li>
            <li className="simulation-class-list ">
              <a
                className={`simulation-class-name
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
                href="#10"
                role="tablist"
              >
                <BookIcon /> দশম শ্রেণী
              </a>
            </li>
            <li className="simulation-class-list ">
              <a
                className={`simulation-class-name
                                          ${
                                            openTab === 4
                                              ? 'text-white bg-brand-900'
                                              : 'text-brand-900 bg-white'
                                          }`}
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
          <div className="relative flex flex-col min-w-0 break-words w-full mt-6 rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="12">
                  <div className="simulation-item-inner">
                    {/* CLass 12 */}
                    {biology12?.map((item) => (
                      <SingleSimulation item={item} key={item.id} />
                    ))}
                  </div>
                </div>

                <div className={openTab === 2 ? 'block' : 'hidden'} id="11">
                  <div className="simulation-item-inner">
                    {/* CLass 11 */}
                    {biology11?.map((item) => (
                      <SingleSimulation item={item} key={item.id} />
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="10">
                  <div className="simulation-item-inner">
                    {/* CLass 10 */}
                    {biology10?.map((item) => (
                      <SingleSimulation item={item} key={item.id} />
                    ))}
                  </div>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="9">
                  <div className="simulation-item-inner">
                    {/* CLass 09 */}
                    {biology09?.map((item) => (
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
  );
};

export default SimulationsBio;
