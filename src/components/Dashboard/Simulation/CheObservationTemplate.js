import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useReactToPrint } from 'react-to-print';
import { DataTable1 } from '../../../data/phy121Observation';
// Table 1 Header for mobile device
const tableHeader1 = [];

for (let i = 1; i <= 5; i++) {
  tableHeader1.push(
    <tr
      className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 sm:mb-0 text-base"
      key={i}
    >
      <th className="observation-table-header">পর্যবেক্ষণ সংখ্যা</th>
      <th className="observation-table-header">
        Fe<sup>2+</sup> দ্রবনের গৃহীত আয়তন (cm<sup>3</sup>) )
      </th>
      <th className="observation-table-header">১ম পাঠ</th>
      <th className="observation-table-header">২য় পাঠ </th>

      <th className="observation-table-header">
        পার্থক্য (KMnO₄ দ্রবনের আয়তন) (cm<sup>3</sup>)
      </th>
      <th className="observation-table-header">
        KMnO₄ গড় দ্রবনের আয়তন (cm<sup>3</sup>)
      </th>
    </tr>
  );
}

const CheObservationTemplate = () => {
  const { auth } = useSelector((state) => state);

  const [showModal, setShowModal] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  document.title = `KMnO₄ দ্রবন দ্বারা অজানা ঘনমাত্রার দ্রবনে ফেরাস আয়নের পরিমান নির্ণয়। - ${auth.user.name}`;

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
              {' '}
              KMnO₄ দ্রবন দ্বারা নমুনা দ্রবনে ফেরাস আয়নের পরিমান নির্ণয়:{' '}
            </p>
          </div>

          {/* Table 1*/}
          <div className="flex items-center justify-center">
            <div className="container">
              <div className="hidden sm:block">
                <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mt-3 -mb-3">
                  {/* Table 1 Title */}
                  <thead className="text-gray-800 ">
                    <tr className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th className="p-3 w-38" />
                      <th className="p-3 w-40" />
                      <th
                        className="p-3 text-center border-brand-700 border-l border-r"
                        colSpan="3"
                      >
                        ব্যুরেট পাঠ
                      </th>

                      <th className="p-3 w-44" />
                    </tr>
                  </thead>
                </table>
              </div>
              {/* Table 1 Start */}
              <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mb-5 mt-3">
                <thead className="text-brand-900 font-body">
                  {tableHeader1}
                </thead>
                {/* Table Row Data */}
                <tbody className="flex-1 sm:flex-none">
                  {DataTable1 &&
                    DataTable1.map((data) => (
                      <tr
                        className="flex flex-col flex-no wrap sm:table-row mb-7 sm:mb-0 text-base tracking-wider"
                        key={data.id}
                      >
                        <td className="observation-table-data p-2.5 sm:p-3 text-center font-display font-bold text-base">
                          {data.id}
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name1}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput1}
                            defaultValue={data.input1}
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
                            name={data.name2}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput2}
                            defaultValue={data.input2}
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
                            name={data.name3}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput3}
                            defaultValue={data.input3}
                            required={
                              data.id === '১' ||
                              data.id === '২' ||
                              data.id === '৩'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name4}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput4}
                            defaultValue={data.input4}
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
                            name={data.name5}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput5}
                            defaultValue={data.input5}
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
            <p className="pt-4 pb-2 px-5 font-semibold">গণনা : </p>
            <p className="py-2 px-5">
              KMnO₄ দ্রবনের আয়তন, V<sub>2</sub> ={' '}
              <input
                name="LC-resistance"
                type="number"
                className="observation-result"
                placeholder="5.35"
                defaultValue=""
                required
              />{' '}
              cm<sup>3</sup>
            </p>
            <p className="py-2 px-5">
              KMnO₄ দ্রবনের ঘনমাত্রা, S<sub>2</sub> ={' '}
              <input
                name="Z-resistance"
                type="number"
                className="observation-result"
                placeholder="0.099"
                defaultValue=""
                required
              />{' '}
              M
            </p>
          </div>

          {/* Observation Result 2 */}
          <div className="font-body mb-2 mt-6 w-full">
            <p className="px-5 py-1">আমরা জানি,</p>
            <p className="py-3 px-5">
              1 cm<sup>3</sup> 1 M KMnO₄ দ্রবণ = 0.2792 g Fe<sup>2+</sup> দ্রবন
            </p>
            <p className="py-5 px-5 flex flex-row">
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result mr-2"
                placeholder="5"
                defaultValue=""
                required
              />{' '}
              cm<sup>3</sup>
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result mr-2"
                placeholder="5.00"
                defaultValue=""
                required
              />{' '}
              M KMnO₄ দ্রবণ = {'  '}0.2792 x
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="0.099"
                defaultValue=""
                required
              />{' '}
              x{' '}
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="0.099"
                defaultValue=""
                required
              />{' '}
              ={' '}
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="0.099"
                defaultValue=""
                required
              />{' '}
              g Fe
            </p>
            <p className="py-4 px-5 flex flex-row">
              এখন
              <input
                name="r-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="10.26"
                defaultValue=""
                required
              />{' '}
              cm<sup>3</sup> দ্রবণে আয়রন আছে ={' '}
              <input
                name="r1-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="1.382"
                defaultValue=""
                required
              />{' '}
              g
            </p>

            <p className="font-semibold px-5 py-2">ফলাফল:</p>

            <p className="py-3 px-5 flex flex-row">
              100 cm<sup>3</sup> সরবাহকৃত দ্রবণে আয়রন আছে =
              <input
                name="x-result-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="0.1382"
                defaultValue=""
                required
              />{' '}
              x{' '}
              <input
                name="r-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="10.26"
                defaultValue=""
                required
              />{' '}
              ={' '}
              <input
                name="r1-resistance"
                type="number"
                className="observation-result mx-2"
                placeholder="1.382"
                defaultValue=""
                required
              />{' '}
              g
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

export default CheObservationTemplate;
