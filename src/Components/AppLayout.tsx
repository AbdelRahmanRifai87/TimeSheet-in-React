import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./topbar/TopBar";
import { useState } from "react";

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* const toggleDarkMode = () => setIsDarkMode((prev) => !prev); */

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isDarkMode={isDarkMode}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <TopBar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          userName="Mohamad Zakaria"
          companyName="Partisan Protective Services"
          userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
        />

        {/* Page content */}
        <div
          className={`p-6 flex-1 transition-colors duration-500 ${
            isDarkMode ? "bg-[#000000e4] text-white" : "bg-[#f6f8fa]"
          }`}
        ></div>
      </div>
    </div>
  );
}
export default AppLayout;
