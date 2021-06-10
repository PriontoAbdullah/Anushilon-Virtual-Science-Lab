import React, { useState } from 'react';
import HeaderBar from '../components/Dashboard/Header/HeaderBar';
import SideBar from '../components/Dashboard/Header/SideBar';

const Dashboard = () => {
	const [ sidebarOpen, setSidebarOpen ] = useState(false);

	return (
		<div className="flex h-screen overflow-hidden">
			<SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				{/*  Site header */}
				<HeaderBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<main className="bg-gray-50 h-full w-full" />
			</div>
		</div>
	);
};

export default Dashboard;
