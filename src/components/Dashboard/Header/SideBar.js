import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SideBar({ sidebarOpen, setSidebarOpen }) {
	const location = useLocation();
	const { pathname } = location;
	const page = pathname.split('/')[1];

	const trigger = useRef(null);
	const sidebar = useRef(null);
	const [ viewSimulation, setViewSimulation ] = useState(false);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
			setSidebarOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	return (
		<div className="lg:w-60">
			{/* Sidebar backdrop (mobile only) */}
			<div
				className={`fixed inset-0 bg-dark-brand-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'}`}
				aria-hidden="true"
			/>
			{/* Sidebar */}
			<div
				id="sidebar"
				ref={sidebar}
				className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-60 flex-shrink-0 bg-dark-brand-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen
					? 'translate-x-0'
					: '-translate-x-64'}`}
			>
				{/* Sidebar header */}
				<div className="flex justify-between mb-10 pr-12 sm:pr-0">
					{/* Close button */}
					<button
						ref={trigger}
						className="lg:hidden text-gray-500 hover:text-dark-brand-400"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-controls="sidebar"
						aria-expanded={sidebarOpen}
					>
						<span className="sr-only">বন্ধ করুন</span>
						<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
						</svg>
					</button>
					{/* Logo */}
					<NavLink exact to="/" className="block mt-3 mx-auto">
						<span className="nav-link-light text-2xl font-display font-black tracking-wider cursor-pointer hover:text-purple-700">
							অনুশীলন
						</span>
					</NavLink>
				</div>

				{/* Links */}
				<div>
					<h3 className="font-body text-sm uppercase text-gray-500 font-medium pl-3">পৃষ্ঠা সমূহ</h3>
					<ul className="mt-4">
						{/* Dashboard */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'dashboard' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/dashboard"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'' && 'hover:text-gray-200'}`}
							>
								<div className="flex flex-grow">
									<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
										<path
											className={`fill-current  ${page === 'dashboard'
												? 'text-indigo-300'
												: 'text-dark-brand-400'}`}
											d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
										/>
										<path
											className={`fill-current ${page === 'dashboard'
												? 'text-indigo-600'
												: 'text-dark-brand-600'}`}
											d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
										/>
										<path
											className={`fill-current  ${page === 'dashboard'
												? 'text-indigo-200'
												: 'text-dark-brand-400'}`}
											d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
										/>
									</svg>
									<span className="font-body text-base font-medium tracking-wider">ড্যাশবোর্ড</span>
								</div>
							</NavLink>
						</li>
						{/* Lab Room */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'labroom' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/labroom"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'labroom' && 'hover:text-gray-200'}`}
							>
								<div className="flex flex-grow">
									<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
										<path
											className={`fill-current text-dark-brand-600 ${page === 'labroom' &&
												'text-indigo-500'}`}
											d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
										/>
										<path
											className={`fill-current text-dark-brand-600 ${page === 'labroom' &&
												'text-indigo-500'}`}
											d="M1 1h22v23H1z"
										/>
										<path
											className={`fill-current text-dark-brand-400 ${page === 'labroom' &&
												'text-indigo-300'}`}
											d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
										/>
									</svg>
									<span className="font-body text-base font-medium tracking-wider">ল্যাব রুম</span>
								</div>
							</NavLink>
						</li>
						{/* Simulation */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page.startsWith('simulation-') &&
								'bg-dark-brand-900'}`}
						>
							<div
								onClick={() => setViewSimulation(!viewSimulation)}
								className={`block cursor-pointer text-gray-200 hover:text-indigo-200 transition duration-150 ${page.startsWith(
									'simulation-'
								) && 'hover:text-gray-200'}`}
							>
								<div className="flex items-center justify-between">
									<div className="flex flex-grow">
										<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
											<path
												className={`fill-current text-dark-brand-400 ${page.startsWith(
													'simulation-'
												) && 'text-indigo-300'}`}
												d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
											/>
											<path
												className={`fill-current text-dark-brand-700 ${page.startsWith(
													'simulation-'
												) && 'text-indigo-600'}`}
												d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
											/>
											<path
												className={`fill-current text-dark-brand-600 ${page.startsWith(
													'simulation-'
												) && 'text-indigo-500'}`}
												d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
											/>
										</svg>
										<span className="font-body text-base font-medium tracking-wider">সিমুলেশন</span>
									</div>
									{/* Badge */}
									<div className="flex flex-shrink-0 ml-2">
										<span className="inline-flex items-center justify-center h-5 text-sm font-body font-medium text-gray-50 tracking-wider bg-indigo-600 px-2 rounded-sm">
											৪২
										</span>
									</div>
									{/* Icon */}
									<div className="flex flex-shrink-0 ml-2">
										{viewSimulation ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="icon icon-tabler icon-tabler-chevron-up text-gray-400"
												width={14}
												height={14}
												viewBox="0 0 24 24"
												strokeWidth={3}
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<polyline points="6 15 12 9 18 15" />
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="icon icon-tabler icon-tabler-chevron-down text-gray-400"
												width={14}
												height={14}
												viewBox="0 0 24 24"
												strokeWidth={3}
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<polyline points="6 9 12 15 18 9" />
											</svg>
										)}
									</div>
								</div>
							</div>
							{viewSimulation ? (
								<ul className={`pl-9 mt-3 ${!page.startsWith('simulation-')}`}>
									<li className="mb-2 last:mb-0">
										<NavLink
											exact
											to="/"
											className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
												'simulation-phy' && 'text-indigo-400 hover:text-indigo-400'}`}
										>
											<span className="font-body text-sm font-medium">পদার্থ বিজ্ঞান</span>
										</NavLink>
									</li>
									<li className="mb-2 last:mb-0">
										<NavLink
											exact
											to="/"
											className={`block text-gray-200  hover:text-indigo-200 transition duration-150" ${page ===
												'simulation-che' && 'text-indigo-400 hover:text-indigo-400'}`}
										>
											<span className="font-body  text-sm font-medium">রসায়ন</span>
										</NavLink>
									</li>
									<li className="mb-2 last:mb-0">
										<NavLink
											exact
											to="/"
											className={`block text-gray-200 hover:text-indigo-200 transition duration-150" ${page ===
												'simulation-bio' && 'text-indigo-400 hover:text-indigo-400'}`}
										>
											<span className="font-body text-sm font-medium">জীববিজ্ঞান </span>
										</NavLink>
									</li>
								</ul>
							) : null}
						</li>
						{/* Statistics */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'statistics' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'statistics' && 'hover:text-gray-200'}`}
							>
								<div className="flex flex-grow">
									<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
										<path
											className={`fill-current text-dark-brand-600 ${page === 'statistics' &&
												'text-indigo-500'}`}
											d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
										/>
										<path
											className={`fill-current text-dark-brand-400 ${page === 'statistics' &&
												'text-indigo-300'}`}
											d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
										/>
									</svg>
									<span className="font-body text-base font-medium tracking-wider">পরিসংখ্যান</span>
								</div>
							</NavLink>
						</li>
						{/* Community */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'community' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/community"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'community' && 'hover:text-gray-200'}`}
							>
								<div className="flex items-center justify-between">
									<div className="flex flex-grow">
										<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
											<path
												className={`fill-current text-dark-brand-600 ${page === 'community' &&
													'text-indigo-500'}`}
												d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
											/>
											<path
												className={`fill-current text-dark-brand-400 ${page === 'community' &&
													'text-indigo-300'}`}
												d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
											/>
										</svg>
										<span className="font-body text-base font-medium tracking-wider">কমিউনিটি</span>
									</div>
								</div>
							</NavLink>
						</li>
						{/* Workshop */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'workshop' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/workshop"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'workshop' && 'hover:text-gray-200'}`}
							>
								<div className="flex flex-grow">
									<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
										<circle
											className={`fill-current text-dark-brand-400 ${page === 'workshop' &&
												'text-indigo-300'}`}
											cx="18.5"
											cy="5.5"
											r="4.5"
										/>
										<circle
											className={`fill-current text-dark-brand-600 ${page === 'workshop' &&
												'text-indigo-500'}`}
											cx="5.5"
											cy="5.5"
											r="4.5"
										/>
										<circle
											className={`fill-current text-dark-brand-600 ${page === 'workshop' &&
												'text-indigo-500'}`}
											cx="18.5"
											cy="18.5"
											r="4.5"
										/>
										<circle
											className={`fill-current text-dark-brand-400 ${page === 'workshop' &&
												'text-indigo-300'}`}
											cx="5.5"
											cy="18.5"
											r="4.5"
										/>
									</svg>
									<span className="font-body text-base font-medium tracking-wider">ওয়ার্কশপ</span>
								</div>
							</NavLink>
						</li>
						{/* Settings */}
						<li
							className={`px-3 py-2 rounded-sm mb-3 last:mb-0 ${page === 'settings' &&
								'bg-dark-brand-900'}`}
						>
							<NavLink
								exact
								to="/settings"
								className={`block text-gray-200 hover:text-indigo-200 transition duration-150 ${page ===
									'settings' && 'hover:text-gray-200'}`}
							>
								<div className="flex flex-grow">
									<svg className="flex-shrink-0 h-6 w-6 mr-4" viewBox="0 0 24 24">
										<path
											className={`fill-current text-dark-brand-600 ${page === 'settings' &&
												'text-indigo-500'}`}
											d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
										/>
										<path
											className={`fill-current text-dark-brand-400 ${page === 'settings' &&
												'text-indigo-300'}`}
											d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
										/>
										<path
											className={`fill-current text-dark-brand-600 ${page === 'settings' &&
												'text-indigo-500'}`}
											d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
										/>
										<path
											className={`fill-current text-dark-brand-400 ${page === 'settings' &&
												'text-indigo-300'}`}
											d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
										/>
									</svg>
									<span className="font-body text-base font-medium tracking-wider">সেটিংস</span>
								</div>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
