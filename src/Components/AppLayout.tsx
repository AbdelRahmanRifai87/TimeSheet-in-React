// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import TopBar from "./topbar/TopBar";
// import { useState } from "react";

// function AppLayout() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div className="h-screen flex overflow-hidden">
//       {/* Sidebar - Fixed height, no scroll */}
//       <Sidebar
//         isCollapsed={isCollapsed}
//         setIsCollapsed={setIsCollapsed}
//         isDarkMode={isDarkMode}
//       />

//       {/* Main content area - vertical flex */}
//       <div className="flex-1 flex flex-col h-full">
//         {/* TopBar - fixed */}
//         <TopBar
//           isDarkMode={isDarkMode}
//           setIsDarkMode={setIsDarkMode}
//           userName="Mohamad Zakaria"
//           companyName="Partisan Protective Services"
//           userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
//         />

//         {/* Page content - scrollable only here */}
//         <div
//           className={`flex-1 overflow-y-auto p-6 transition-colors duration-500 ${
//             isDarkMode ? "bg-[#000000e4] text-white" : "bg-[#f6f8fa]"
//           }`}
//         >
//           <main className="rounded-lg bg-[#F1F3F3] min-h-full">
//             <div className="mx-auto flex flex-col gap-[3.2rem]">
//               <Outlet />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppLayout;

// AppLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./topbar/TopBar";
import { useEffect, useState } from "react";

// ✅ Import Zustand store for dark mode
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // adjust path if needed

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // ✅ Get dark mode state from Zustand
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  // ✅ Optional: Set background color based on dark mode
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#2186d4";
  }, [isDarkMode]);

  return (
    <div
      className="grid grid-rows-[auto_1fr] h-screen"
      style={{
        gridTemplateColumns: isCollapsed ? "60px 1fr" : "17rem 1fr",
        transition: "all 350ms ease-in-out",
      }}
    >
      {/* ✅ Sidebar still receives isDarkMode IF it needs it for styling */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        // keep this only if Sidebar uses it
      />

      {/* ✅ Removed isDarkMode and setIsDarkMode from props */}
      <TopBar
        userName="Mohamad Zakaria"
        companyName="Partisan Protective Services"
        userAvatarUrl="https://columbus.in.us/wp-content/uploads/2020/01/person-01.jpg"
      />

      <main
        className={`col-span-1 row-span-1 rounded-lg min-h-[93.5vh] overflow-auto transition-colors duration-500 ${
          isDarkMode ? "bg-[#0d0d0df3]" : "bg-[#F1F3F3]"
        }`}
      >
        <div className="mx-auto flex flex-col gap-[3.2rem]">
          <Outlet context={{ isDarkMode }} />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
