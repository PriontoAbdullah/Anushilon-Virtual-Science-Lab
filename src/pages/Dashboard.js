import React, { useEffect, useState } from "react";
import HeaderBar from "../components/Dashboard/Header/HeaderBar";
import SideBar from "../components/Dashboard/Header/SideBar";
import SimulationTemplate from "../components/Dashboard/Simulation/SimulationTemplate";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  document.title = "অনুশীলন - সিমুলেশন ড্যাশবোর্ড 🚀";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/*  Site Bar*/}
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <HeaderBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto bg-gray-50 h-full w-full">
          <SimulationTemplate />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
