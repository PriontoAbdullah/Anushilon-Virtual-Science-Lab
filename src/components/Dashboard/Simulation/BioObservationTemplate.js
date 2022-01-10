import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useReactToPrint } from 'react-to-print';
import { DataTable3 } from '../../../data/phy121Observation';
// Table 1 Header for mobile device
const tableHeader1 = [];

for (let i = 1; i <= 5; i++) {
  tableHeader1.push(
    <tr
      className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 sm:mb-0 text-base"
      key={i}
    >
      <th className="observation-table-header">পর্যবেক্ষণ সংখ্যা</th>
      <th className="observation-table-header">আলোক শক্তি (ওয়াট)</th>
      <th className="observation-table-header">দূরত্ব (সেমি)</th>
      <th className="observation-table-header">রঙ</th>
      <th className="observation-table-header">মিনিট</th>
      <th className="observation-table-header">সেকেন্ড</th>
      <th className="observation-table-header">বুদবুদের সংখ্যা</th>
    </tr>
  );
}

const BioObservationTemplate = () => {
  const { auth } = useSelector((state) => state);

  const [showModal, setShowModal] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  document.title = ` সালোকসংশ্লেষণ প্রক্রিয়ায় ক্লোরোফিল ও আলোর অপরিহার্যতার
  পরীক্ষণ। - ${auth.user.name}`;

  return (
    <React.Fragment>
      <form>
        <div
          ref={componentRef}
          className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5"
        >
          <div className="mb-2 w-full">
            <h2 className="font-semibold"> পর্যবেক্ষণ: </h2>
            <p>
              সালোকসংশ্লেষণ প্রক্রিয়ায় ক্লোরোফিল ও আলোর অপরিহার্যতার পরীক্ষণ।
            </p>
          </div>

          {/* Table 1*/}
          <div className="flex items-center justify-center">
            <div className="container">
              {/* Table 1 Start */}
              <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mb-5 mt-3">
                <thead className="text-brand-900 font-body">
                  {tableHeader1}
                </thead>
                {/* Table Row Data */}
                <tbody className="flex-1 sm:flex-none">
                  {DataTable3 &&
                    DataTable3.map((data) => (
                      <tr
                        className="flex flex-col flex-no wrap sm:table-row mb-7 sm:mb-0 text-base tracking-wider"
                        key={data.id}
                      >
                        <td className="observation-table-data p-1.5 sm:p-3 text-center font-display font-bold text-base">
                          {data.id}
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name11}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput11}
                            defaultValue={data.input11}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name22}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput22}
                            defaultValue={data.input22}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name33}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput33}
                            defaultValue={data.input33}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name44}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput44}
                            defaultValue={data.input44}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name55}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput55}
                            defaultValue={data.input55}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>

                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name66}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput66}
                            defaultValue={data.input66}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Observation Result 1*/}
          <div className="w-full font-body">
            {' '}
            <p className="pt-4 pb-1 px-5 font-semibold">গণনা : </p>
            <p className="py-1 px-5">
              মোট সময়:
              <input
                name="LC-resistance"
                type="number"
                className="observation-result ml-4"
                placeholder="15.35"
                defaultValue=""
                required
              />
            </p>
            <p className="py-1 px-5">
              মোট বুদবুদের সংখ্যা:
              <input
                name="Z-resistance"
                type="number"
                className="observation-result ml-4"
                placeholder="62"
                defaultValue=""
                required
              />
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-row justify-center sm:justify-end  mt-4 sm:mt-0 mb-10 font-body mr-16">
          <button
            className="dashboard-button"
            type="submit"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" /> জমা দিন
          </button>
        </div>
      </form>

      {/* Show Success Modal */}
      {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 sm:w-96 m-auto">
                <div className="w-full h-full text-center">
                  <div className="flex h-full flex-col justify-between">
                    <Fade top>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 mt-4 m-auto text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          />
                        </svg>
                      </div>
                      <p className="font-body text-brand-900 dark:text-gray-100 text-lg py-5 px-12">
                        আপনার পরীক্ষণের সকল তথ্য সংরক্ষণ করা হয়েছে।
                      </p>
                      <div className="flex items-center justify-center gap-4 w-1/2 mt-2 mb-5 mx-auto">
                        <button
                          type="button"
                          className="py-2 px-4 bg-dark-brand-900 hover:bg-brand-900 focus:ring-indigo-800 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-body font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                          onClick={handlePrint}
                        >
                          ডাউনলোড করুন
                        </button>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default BioObservationTemplate;
