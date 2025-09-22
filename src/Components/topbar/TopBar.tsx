import React, { useState, useRef, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaBolt,
  FaQuestionCircle,
  FaBookmark,
  FaCog,
  FaBell,
  FaBuilding,
  FaSearch,
} from "react-icons/fa";
import { topBarStyles } from "./TopBar.styles";

interface TopBarProps {
  userName: string;
  companyName: string;
  userAvatarUrl?: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const companies = [
  "Partisan Protective Services",
  "Guardian Global",
  "SafeWatch Security",
];

const TopBar: React.FC<TopBarProps> = ({
  userName,
  companyName,
  userAvatarUrl,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [selectedCompany, setSelectedCompany] = useState(companyName);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#2186d4";
  }, [isDarkMode]);

  const orderedCompanies = [
    selectedCompany,
    ...companies.filter((c) => c !== selectedCompany),
  ];
  return (
    <div
      className={`${topBarStyles.topbar} ${isDarkMode ? "bg-[#121212]" : "bg-[#2186d4] "
        }`}
    >
      {/* Search (moved to left side, replacing company) */}
      {/* Global Search */}
      <div
        className={`${topBarStyles.searchContainer} ${isDarkMode ? "bg-gray-700" : ""
          }`}
      >
        <FaSearch className={topBarStyles.searchIcon} />
        <input
          type="text"
          placeholder="Global search"
          className={topBarStyles.searchInput}
        />
      </div>

      {/* Right Icons */}
      <div className={topBarStyles.topbarRight}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={topBarStyles.iconButton}
          title="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <FaSun className={topBarStyles.icon} />
          ) : (
            <FaMoon className={topBarStyles.icon} />
          )}
          <span className="sr-only">Toggle Dark Mode</span>
        </button>
        <button className={topBarStyles.iconButton} title="Quick Actions">
          <FaBolt className={topBarStyles.icon} />
          <span className="sr-only">Quick Actions</span>
        </button>
        <button className={topBarStyles.iconButton} title="Help">
          <FaQuestionCircle className={topBarStyles.icon} />
          <span className="sr-only">Help</span>
        </button>
        <button className={topBarStyles.iconButton} title="Bookmarks">
          <FaBookmark className={topBarStyles.icon} />
          <span className="sr-only">Bookmarks</span>
        </button>
        <button className={topBarStyles.iconButton} title="Settings">
          <FaCog className={topBarStyles.icon} />
          <span className="sr-only">Settings</span>
        </button>
        <button className={topBarStyles.iconButton} title="Notifications">
          <FaBell className={topBarStyles.icon} />
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
