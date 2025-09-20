import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./topbar/TopBar";
import { useState } from "react";

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* const toggleDarkMode = () => setIsDarkMode((prev) => !prev); */

  return (
    <div className={`grid  grid-rows-[auto_1fr] h-screen `}
      style={{
        gridTemplateColumns: isCollapsed ? "60px 1fr" : "17rem 1fr",
        transition: "all 350ms ease-in-out",
      }}>
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isDarkMode={isDarkMode}
      />

      {/* Main content */}

      <TopBar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        userName="Mohamad Zakaria"
        companyName="Partisan Protective Services"
        userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
      />

      {/* Page content */}
      <main className={`col-span-1 row-span-1 rounded-lg transition-colors duration-500  ${isDarkMode ? "bg-[#000000e4] text-white" : "bg-[#f6f8fa]"} min-h-[93.5vh] overflow-auto`}>
        <div className="  mx-auto flex flex-col gap-[3.2rem]" >
          <Outlet />
        </div>
      </main></div>


  );
}
export default AppLayout;
