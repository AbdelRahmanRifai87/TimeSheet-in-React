// TopBar.tsx

import React, { useState, useRef, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaQuestionCircle,
  FaBookmark,
  FaCog,
  FaBell,
  FaBullhorn,
  FaSearch,
  
} from "react-icons/fa";
import { topBarStyles } from "./TopBar.styles";

// ✅ NEW: Import Zustand store
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// ✅ Removed isDarkMode and setIsDarkMode from props
interface TopBarProps {
  userName: string;
  companyName: string;
  userAvatarUrl?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  userName,
  // companyName,
  userAvatarUrl,
}) => {
  // const [selectedCompany] = useState(companyName);
  const [_, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ NEW: Use Zustand to get dark mode state and function
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ STILL VALID: Side effect to update background color
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#2186d4";
  }, [isDarkMode]);

  /* const orderedCompanies = [
    selectedCompany,
    ...companies.filter((c) => c !== selectedCompany),
  ];
 */
  return (
    <div
      className={`${topBarStyles.topbar} ${
        isDarkMode ? "bg-[#121212]" : "bg-[#2186d4] "
      }`}
    >
      {/* Search (moved to left side, replacing company) */}
      <div
        className={`${topBarStyles.searchContainer} ${
          isDarkMode ? "bg-gray-700" : ""
        }`}
      >
        <img
          src="/Frame.png"
          alt="Quick Actions"
          className="w-6 h-6 object-contain"
        />
        <input
          type="text"
          placeholder="Global search"
          className={topBarStyles.searchInput}
        />
      </div>

      {/* Right Icons */}
      <div className={topBarStyles.topbarRight}>
        {/* ✅ UPDATED: Use toggleDarkMode from Zustand */}
        <button
          onClick={toggleDarkMode}
          className={topBarStyles.iconButton}
          title="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <FaSun className={topBarStyles.icon} />
          ) : (
            <img
              src="/Mode.png"
              alt="Quick Actions"
              className="w-8 h-8 object-contain"
            />
          )}
          <span className="sr-only">Toggle Dark Mode</span>
        </button>

        <button className={topBarStyles.iconButton} title="Quick Actions">
          <img
            src="/falbullhorn.png"
            alt="Quick Actions"
            className="w-6 h-6 object-contain"
          />
          <span className="sr-only">Quick Actions</span>
        </button>

        <button className={topBarStyles.iconButton} title="Help">
          <img
            src="/lets-icons_question-light (1).png"
            alt="Quick Actions"
            className="w-7 h-7 object-contain"
          />
          <span className="sr-only">Help</span>
        </button>

        <button className={topBarStyles.iconButton} title="Bookmarks">
          <img
            src="/stash_save-ribbon.png"
            alt="Quick Actions"
            className="w-7 h-7 object-contain"
          />
          <span className="sr-only">Bookmarks</span>
        </button>

        <button className={topBarStyles.iconButton} title="Settings">
          <img
            src="/weui_setting-outlined.png"
            alt="Quick Actions"
            className="w-6 h-6 object-contain"
          />
          <span className="sr-only">Settings</span>
        </button>

        <button className={topBarStyles.iconButton} title="Notifications">
          <img
            src="/hugeicons_notification-01.png"
            alt="Quick Actions"
            className="w-6 h-6 object-contain"
          />
          <span className="sr-only">Notifications</span>
        </button>

        {userAvatarUrl && (
          <img
            src={userAvatarUrl}
            alt="User avatar"
            className={topBarStyles.avatar}
          />
        )}
        <span className={topBarStyles.userName}>{userName}</span>
      </div>
    </div>
  );
};

export default TopBar;
