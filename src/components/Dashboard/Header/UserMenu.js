import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../../../assets/images/icon/user.png';
import Transition from '../../../utils/Transition';

function UserMenu() {
	const [ dropdownOpen, setDropdownOpen ] = useState(false);

	const trigger = useRef(null);
	const dropdown = useRef(null);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
			setDropdownOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	return (
		<div className="relative inline-flex">
			{/* User Profile Button */}
			<button
				ref={trigger}
				className="inline-flex justify-center items-center group outline-none focus:outline-none"
				aria-haspopup="true"
				onClick={() => setDropdownOpen(!dropdownOpen)}
				aria-expanded={dropdownOpen}
			>
				<img className="w-10 h-10 rounded-full" src={UserAvatar} width="40" height="40" alt="User" />
				<div className="flex items-center truncate">
					<span className="truncate ml-2 font-body text-base font-medium text-brand-900 group-hover:text-gray-800">
						হিরো আলম{' '}
					</span>
					<svg className="w-3 h-3 flex-shrink-0 ml-2 fill-current text-gray-500" viewBox="0 0 12 12">
						<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
					</svg>
				</div>
			</button>
			{/* Profile Menu Dropdown */}
			<Transition
				className="origin-top-right z-10 absolute top-full right-0 mr-0 sm:-mr-6 w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
				show={dropdownOpen}
				enter="transition ease-out duration-200 transform"
				enterStart="opacity-0 -translate-y-2"
				enterEnd="opacity-100 translate-y-0"
				leave="transition ease-out duration-200"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
			>
				<div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
					<div className="py-1 pb-2 px-3 border-b border-gray-200">
						<div className="font-body font-medium ml-1 text-gray-800">শিক্ষার্থী</div>
					</div>
					<ul>
						<li>
							<Link
								className="font-body font-medium text-sm text-brand-900 hover:text-indigo-600 flex items-center py-2 px-3"
								to="/profile"
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								প্রোফাইল
							</Link>
						</li>
						<li>
							<Link
								className="font-body font-medium text-sm text-brand-900 hover:text-indigo-600 flex items-center py-2 px-3"
								to="/logout"
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
									/>
								</svg>
								সাইন আউট
							</Link>
						</li>
					</ul>
				</div>
			</Transition>
		</div>
	);
}

export default UserMenu;
