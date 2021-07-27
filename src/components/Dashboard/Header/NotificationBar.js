import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../utils/Transition";

// Notification Data
const notifications = [
  {
    name: "অনুরোধ",
    description: "অনুগ্রহপূর্বক আপনার সকল তথ্য বাংলায় দাখিল করুন ",
    time: "১ মিনিট আগে",
    href: "#0",
    icon: "📣",
  },
  {
    name: "অভ্যর্থনা",
    description: "অনুশীলনে আপনাকে স্বাগতম",
    time: "২ মিনিট আগে",
    href: "#0",
    icon: "🚀",
  },
];

function NotificationBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      {/* Dropdown Button */}
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full outline-none focus:outline-none ${
          dropdownOpen && "bg-gray-200"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current text-indigo-400"
            d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
          />
          <path
            className="fill-current text-indigo-300"
            d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
          />
        </svg>
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-pink-300 border-2 border-white rounded-full" />
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 w-60 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="font-body text-sm font-semibold text-gray-500 uppercase pt-1.5 pb-2 px-4 border-b">
            নোটিফিকেশন
          </div>
          <ul>
            {notifications &&
              notifications.map((item) => (
                <li
                  className="border-b border-gray-200 last:border-0"
                  key={item.name}
                >
                  <Link
                    className="block py-2 px-4 hover:bg-gray-50"
                    to={item.href}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="block font-body text-brand-900 text-sm mb-1">
                      {item.icon}
                      <span className="font-semibold text-gray-800 ml-1">
                        {item.name}
                      </span>
                      <br />
                      <span className="mt-1"> {item.description} </span>
                    </span>
                    <span className="block text-xs font-medium text-gray-500">
                      {item.time}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default NotificationBar;
