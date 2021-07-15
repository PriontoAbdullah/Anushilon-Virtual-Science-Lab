import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../utils/Transition";

const recentSearch = [
  {
    name: "গতি - নিউটনের দ্বিতীয় সূত্র",
    href: "#0",
  },
  {
    name: "উত্তল লেন্স ব্যবহার করে প্রতিবিম্ব সৃষ্টি এবং প্রদর্শন",
    href: "#0",
  },
  {
    name: "তরঙ্গ - সুরশলাকার কম্পাংক",
    href: "#0",
  },
  {
    name: "চলতড়িৎ - ওহমের সূত্র",
    href: "#0",
  },
];

const recentPage = [
  {
    title: "ল্যাব রুম",
    name: "অ্যাসাইনমেন্ট /.. / হুইটস্টোন ব্রীজ",
    href: "#0",
  },
  {
    title: "কমিউনিটি",
    name: "বিজ্ঞান অন্বেষণ /.. / জ্যোতির্বিজ্ঞান কী",
    href: "#0",
  },
];

function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const trigger = useRef(null);
  const searchContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !searchOpen ||
        searchContent.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSearchOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div>
      {/* Button */}
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ml-3 outline-none focus:outline-none ${
          searchOpen && "bg-gray-200"
        }`}
        onClick={() => {
          setSearchOpen(!searchOpen);
          setImmediate(() => searchInput.current.focus());
        }}
        aria-controls="search-modal"
      >
        <span className="sr-only font-body">সার্চ</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current text-indigo-500"
            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
          />
          <path
            className="fill-current text-indigo-400"
            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          />
        </svg>
      </button>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
        show={searchOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id="search-modal"
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={searchOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
          ref={searchContent}
        >
          {/* Search form */}
          <form className="border-b border-gray-200">
            <div className="relative">
              <label htmlFor="modal-search" className="sr-only font-body">
                সার্চ
              </label>
              <input
                id="modal-search"
                className="w-full border-0 focus:ring-transparent placeholder-gray-500 appearance-none py-3 pl-10 pr-4 outline-none focus:outline-none"
                type="search"
                placeholder="অনুসন্ধান করুন…"
                ref={searchInput}
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 fill-current text-gray-500 group-hover:text-gray-600 ml-4 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
          <div
            className="py-4 px-2"
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          >
            {/* Recent searches */}
            <div className="mb-3 last:mb-0">
              <div className="text-sm font-body font-medium text-gray-500 uppercase px-2 mb-2 tracking-wide">
                সাম্প্রতিক সার্চগুলি
              </div>
              <ul className="text-sm">
                {recentSearch &&
                  recentSearch.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center p-2 font-body text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                        to={item.href}
                        onClick={() => setSearchOpen(!searchOpen)}
                      >
                        <svg
                          className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                        </svg>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Recent pages */}
            <div className="mb-3 last:mb-0">
              <div className="text-sm font-body font-medium text-gray-500 uppercase px-2 mb-2 tracking-wide">
                সাম্প্রতিক পৃষ্ঠাগুলি
              </div>
              <ul className="text-sm">
                {recentPage &&
                  recentPage.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="flex items-center p-2 font-body text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                        to={item.href}
                        onClick={() => setSearchOpen(!searchOpen)}
                      >
                        <svg
                          className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                        </svg>
                        <span>
                          <span className="font-medium text-gray-800 group-hover:text-white">
                            {item.title}
                          </span>{" "}
                          - {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default SearchBar;
