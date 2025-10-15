import React, { useState, useRef, useEffect } from "react";
import { FaMoon, FaSun, FaDesktop, FaRegMoon } from "react-icons/fa";
import { topBarStyles } from "./TopBar.styles";

import { useDarkModeStore } from "../../Theme/useDarkModeStore";

interface TopBarProps {
  userName: string;
  companyName?: string;
  userAvatarUrl?: string;
}

const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const theme = useDarkModeStore((s) => s.theme);
  const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
  const setTheme = useDarkModeStore((s) => s.setTheme);

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

  // Update body background
  useEffect(() => {
    // match the same background colors used for topbar
    const bodyColor =
      effectiveTheme === "light"
        ? "#235e8b" // same as light topbar
        : effectiveTheme === "dark"
        ? "#0f2739" // same as dark topbar
        : effectiveTheme === "night"
        ? "#0f0f0f" // same as night topbar
        : "#235e8b"; // fallback for system/light

    document.body.style.backgroundColor = bodyColor;
  }, [effectiveTheme]);

  // Icon for current theme
  const renderThemeIcon = () => {
    switch (theme) {
      case "light":
        return <FaSun className={topBarStyles.icon} />;
      case "dark":
        return <FaMoon className={topBarStyles.icon} />;
      case "night":
        return <FaRegMoon className={topBarStyles.icon} />;
      case "system":
        return <FaDesktop className={topBarStyles.icon} />;
    }
  };

  return (
    <div
      className={`${topBarStyles.topbar} ${
        effectiveTheme === "light"
          ? "bg-[#235e8b]"
          : effectiveTheme === "dark"
          ? "bg-[#0f2739]"
          : effectiveTheme === "night"
          ? "bg-[#0f0f0f]" // keep night different, or reuse dark color if you prefer
          : "bg-[#235e8b]" // fallback for system/light
      }`}
    >
      {/* Left: Search Bar */}
      <div
        className={`${topBarStyles.searchContainer} ${
          effectiveTheme === "dark" || effectiveTheme === "night"
            ? "bg-gray-700"
            : ""
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
        {/* 🔄 UPDATED: Theme button with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={topBarStyles.iconButton}
            title="Select Theme"
          >
            {renderThemeIcon()}
          </button>

          {isOpen && (
            <div
              className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50
    ${
      effectiveTheme === "light"
        ? "bg-[#625d5d] text-black"
        : effectiveTheme === "dark"
        ? "bg-[#8e8e8e] text-white" //bg-black/10
        : effectiveTheme === "night"
        ? "bg-[#312f2f] text-white"
        : "bg-gray-200 text-black"
    }
  `}
            >
              <button
                className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
              >
                Light ☀️
              </button>
              <button
                className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
              >
                Dark 🌙
              </button>
              <button
                className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => {
                  setTheme("night");
                  setIsOpen(false);
                }}
              >
                Night 🌌
              </button>
              <button
                className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
              >
                System 🖥️
              </button>
            </div>
          )}
        </div>

        {/* Other Buttons */}
        <button className={topBarStyles.iconButton} title="Quick Actions">
          <img
            src="/falbullhorn.png"
            alt="Quick Actions"
            className="w-6 h-6 object-contain"
          />
        </button>

        <button className={topBarStyles.iconButton} title="Help">
          <img
            src="/lets-icons_question-light (1).png"
            alt="Help"
            className="w-7 h-7 object-contain"
          />
        </button>

        <button className={topBarStyles.iconButton} title="Bookmarks">
          <img
            src="/stash_save-ribbon.png"
            alt="Bookmarks"
            className="w-7 h-7 object-contain"
          />
        </button>

        <button className={topBarStyles.iconButton} title="Settings">
          <img
            src="/weui_setting-outlined.png"
            alt="Settings"
            className="w-6 h-6 object-contain"
          />
        </button>

        <button className={topBarStyles.iconButton} title="Notifications">
          <img
            src="/hugeicons_notification-01.png"
            alt="Notifications"
            className="w-6 h-6 object-contain"
          />
        </button>

        {/* User Avatar */}
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
