import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  { label: "Dashboard", icon: "fas fa-home" },
  { label: "Yours Details", icon: "fas fa-id-card" },
  { label: "Task Manager", icon: "fas fa-tasks" },
  { label: "Users", icon: "fas fa-users" },
  { label: "Locations", icon: "fas fa-map-marker-alt" },
  { label: "Mobile", icon: "fas fa-mobile-alt" },
  { label: "Supported living", icon: "fas fa-user" },
  { label: "Reports", icon: "fas fa-file" },
  { label: "Rosters", icon: "fas fa-calendar" },
  { label: "Timesheets", icon: "fas fa-clock" },
  { label: "IR's & Logs", icon: "fas fa-book" },
  { label: "Documents", icon: "fas fa-file" },
  { label: "Messaging", icon: "fas fa-comments" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved preference in local storage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Update local storage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <aside
      className={` row-span-2 ${isDarkMode ? "bg-[#121212]" : "bg-[#2186d4]"
        } flex flex-col transition-all duration-300 ease-in-out `}
    >
      <div className="flex justify-center items-center py-4">
        {isCollapsed ? (
          <img src="/image.png" alt="Logo" className="w-10 h-10" />
        ) : (
          <img
            src="/partisan logo.png"
            alt="Logo"
            className="w-[200px] h-auto"
          />
        )}
      </div>

      <div className="px-4 my-4">
        <div
          className={`h-px w-full ${isDarkMode
            ? "bg-gradient-to-r from-transparent via-gray-600/25 to-transparent"
            : "bg-gradient-to-r from-white/5 via-white/30 to-white/5"
            } transition-colors duration-300`}
        />
      </div>

      <nav
        className="flex-1 overflow-y-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.label === "Yours Details" ||
              item.label === "Locations" ||
              item.label === "Reports" ||
              item.label === "Documents" ? (
              <div className="px-4 my-4">
                <div
                  className={`h-px w-full ${isDarkMode
                    ? "bg-gradient-to-r from-white via-white-600/25 to-transparent"
                    : "bg-gradient-to-r from-white/5 via-white/30 to-white/5"
                    } transition-colors duration-300`}
                />
              </div>
            ) : null}

            <div
              className={`flex items-center cursor-pointer ${item.label === "Dashboard"
                ? isDarkMode
                  ? "mx-3 my-1 rounded-lg bg-blue-500 text-white"
                  : "mx-3 my-1 rounded-lg bg-white text-[#2186d4]"
                : isDarkMode
                  ? "mx-3 my-1 rounded-lg text-gray-300/65 hover:bg-gray-700"
                  : "mx-3 my-1 rounded-lg text-white/65 hover:bg-white/10"
                } ${isCollapsed
                  ? "justify-center px-1 py-3"
                  : "px-5 py-3 justify-between"
                }`}
            >
              <div className="flex items-center">
                <i
                  className={`${item.icon} ${isCollapsed ? "text-xl" : "mr-4"}`}
                ></i>
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
              {!isCollapsed && item.label !== "Dashboard" && (
                <i className="fa-solid fa-chevron-down text-xs opacity-65"></i>
              )}
              {!isCollapsed && item.label === "Dashboard" && (
                <i className="fa-solid fa-chevron-right text-xs"></i>
              )}
            </div>
          </React.Fragment>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        {/* Night Mode Toggle */}
        {!isCollapsed && (
          <button
            className={`flex items-center justify-between w-[80%] py-2 px-4 ${isDarkMode
              ? "bg-gray-700 text-black border border-gray-600"
              : "bg-[#1971b3] text-black border border-[#1971b3]"
              } rounded-md mx-auto transition-colors duration-300`}
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <span className="text-sm font-medium flex items-center">
              <i
                className={`${isDarkMode ? "fas fa-sun" : "fas fa-moon"
                  } mr-2 text-sm`}
              ></i>
              {isDarkMode ? "Activate Light " : "Activate Dark "}
            </span>
            <i className="fas fa-toggle-on text-sm"></i>
          </button>
        )}

        {/* Collapse Button */}
        <button
          className={`flex items-center justify-center ${isDarkMode ? "bg-gray-800 text-blue-400" : "bg-white text-[#2186d4]"
            } rounded-md mx-auto ${isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
            }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? (
            <i className="fas fa-angle-right"></i>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">Collapse Menu</span>
              <i className="fas fa-angle-left"></i>
            </>
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div
          className={`flex flex-col items-center py-4 ${isDarkMode ? "text-gray-400/65" : "text-white/65"
            } text-xs`}
        >
          <div className="flex items-center mt-1">
            <span>Powered by </span>
            <img src="/sec250.png" alt="Securecy Logo" className="h-5 mr-1" />
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
