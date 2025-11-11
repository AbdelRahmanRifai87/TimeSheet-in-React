// import React, { useState, useRef, useEffect } from "react";
// import { FaMoon, FaSun, FaDesktop, FaRegMoon } from "react-icons/fa";
// import { topBarStyles } from "./TopBar.styles";

// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface TopBarProps {
//   userName: string;
//   companyName?: string;
//   userAvatarUrl?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const setTheme = useDarkModeStore((s) => s.setTheme);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Update body background
//   useEffect(() => {
//     // match the same background colors used for topbar
//     const bodyColor =
//       effectiveTheme === "light"
//         ? "#235e8b" // same as light topbar
//         : effectiveTheme === "dark"
//         ? "#0f2739" // same as dark topbar
//         : effectiveTheme === "night"
//         ? "#0f0f0f" // same as night topbar
//         : "#235e8b"; // fallback for system/light

//     document.body.style.backgroundColor = bodyColor;
//   }, [effectiveTheme]);

//   // Icon for current theme
//   const renderThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <FaSun className={topBarStyles.icon} />;
//       case "dark":
//         return <FaMoon className={topBarStyles.icon} />;
//       case "night":
//         return <FaRegMoon className={topBarStyles.icon} />;
//       case "system":
//         return <FaDesktop className={topBarStyles.icon} />;
//     }
//   };

//   return (
//     <div
//       className={`${topBarStyles.topbar} ${
//         effectiveTheme === "light"
//           ? "bg-[#235e8b]"
//           : effectiveTheme === "dark"
//           ? "bg-[#0f2739]"
//           : effectiveTheme === "night"
//           ? "bg-[#0f0f0f]" // keep night different, or reuse dark color if you prefer
//           : "bg-[#235e8b]" // fallback for system/light
//       }`}
//     >
//       {/* Left: Search Bar */}
//       <div
//         className={`${topBarStyles.searchContainer} ${
//           effectiveTheme === "dark" || effectiveTheme === "night"
//             ? "bg-gray-700"
//             : ""
//         }`}
//       >
//         <img
//           src="/Frame.png"
//           alt="Quick Actions"
//           className="w-6 h-6 object-contain"
//         />
//         <input
//           type="text"
//           placeholder="Global search"
//           className={topBarStyles.searchInput}
//         />
//       </div>

//       {/* Right Icons */}
//       <div className={topBarStyles.topbarRight}>
//         {/* 🔄 UPDATED: Theme button with dropdown */}
//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={() => setIsOpen((prev) => !prev)}
//             className={topBarStyles.iconButton}
//             title="Select Theme"
//           >
//             {renderThemeIcon()}
//           </button>

//           {isOpen && (
//             <div
//               className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50
//     ${
//       effectiveTheme === "light"
//         ? "bg-[#625d5d] text-black"
//         : effectiveTheme === "dark"
//         ? "bg-[#8e8e8e] text-white" //bg-black/10
//         : effectiveTheme === "night"
//         ? "bg-[#312f2f] text-white"
//         : "bg-gray-200 text-black"
//     }
//   `}
//             >
//               <button
//                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                 onClick={() => {
//                   setTheme("light");
//                   setIsOpen(false);
//                 }}
//               >
//                 Light ☀️
//               </button>
//               <button
//                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                 onClick={() => {
//                   setTheme("dark");
//                   setIsOpen(false);
//                 }}
//               >
//                 Dark 🌙
//               </button>
//               <button
//                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                 onClick={() => {
//                   setTheme("night");
//                   setIsOpen(false);
//                 }}
//               >
//                 Night 🌌
//               </button>
//               <button
//                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                 onClick={() => {
//                   setTheme("system");
//                   setIsOpen(false);
//                 }}
//               >
//                 System 🖥️
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Other Buttons */}
//         <button className={topBarStyles.iconButton} title="Quick Actions">
//           <img
//             src="/falbullhorn.png"
//             alt="Quick Actions"
//             className="w-6 h-6 object-contain"
//           />
//         </button>

//         <button className={topBarStyles.iconButton} title="Help">
//           <img
//             src="/lets-icons_question-light (1).png"
//             alt="Help"
//             className="w-7 h-7 object-contain"
//           />
//         </button>

//         <button className={topBarStyles.iconButton} title="Bookmarks">
//           <img
//             src="/stash_save-ribbon.png"
//             alt="Bookmarks"
//             className="w-7 h-7 object-contain"
//           />
//         </button>

//         <button className={topBarStyles.iconButton} title="Settings">
//           <img
//             src="/weui_setting-outlined.png"
//             alt="Settings"
//             className="w-6 h-6 object-contain"
//           />
//         </button>

//         <button className={topBarStyles.iconButton} title="Notifications">
//           <img
//             src="/hugeicons_notification-01.png"
//             alt="Notifications"
//             className="w-6 h-6 object-contain"
//           />
//         </button>

//         {/* User Avatar */}
//         {userAvatarUrl && (
//           <img
//             src={userAvatarUrl}
//             alt="User avatar"
//             className={topBarStyles.avatar}
//           />
//         )}
//         <span className={topBarStyles.userName}>{userName}</span>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
// // // import React, { useState, useRef, useEffect } from "react";
// // // import { FaMoon, FaSun, FaDesktop, FaRegMoon, FaPalette } from "react-icons/fa"; // 🎨 add palette icon
// // // import { topBarStyles } from "./TopBar.styles";
// // // import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// // // import CustomThemePopup from "../Theme/CustomThemePopup";

// // // interface TopBarProps {
// // //   userName: string;
// // //   companyName?: string;
// // //   userAvatarUrl?: string;
// // // }

// // // const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [showCustomPopup, setShowCustomPopup] = useState(false); // 🎨 new state for popup
// // //   const dropdownRef = useRef<HTMLDivElement>(null);

// // //   const theme = useDarkModeStore((s) => s.theme);
// // //   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
// // //   const setTheme = useDarkModeStore((s) => s.setTheme);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event: MouseEvent) => {
// // //       if (
// // //         dropdownRef.current &&
// // //         !dropdownRef.current.contains(event.target as Node)
// // //       ) {
// // //         setIsOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, []);

// // //   // Update body background
// // //   useEffect(() => {
// // //     const bodyColor =
// // //       effectiveTheme === "light"
// // //         ? "#235e8b"
// // //         : effectiveTheme === "dark"
// // //         ? "#0f2739"
// // //         : effectiveTheme === "night"
// // //         ? "#0f0f0f"
// // //         : "#235e8b";
// // //     document.body.style.backgroundColor = bodyColor;
// // //   }, [effectiveTheme]);

// // //   // Icon for current theme
// // //   const renderThemeIcon = () => {
// // //     switch (theme) {
// // //       case "light":
// // //         return <FaSun className={topBarStyles.icon} />;
// // //       case "dark":
// // //         return <FaMoon className={topBarStyles.icon} />;
// // //       case "night":
// // //         return <FaRegMoon className={topBarStyles.icon} />;
// // //       case "system":
// // //         return <FaDesktop className={topBarStyles.icon} />;
// // //       case "custom":
// // //         return <FaPalette className={topBarStyles.icon} />; // 🎨 custom icon
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className={`${topBarStyles.topbar} ${
// // //         effectiveTheme === "light"
// // //           ? "bg-[#235e8b]"
// // //           : effectiveTheme === "dark"
// // //           ? "bg-[#0f2739]"
// // //           : effectiveTheme === "night"
// // //           ? "bg-[#0f0f0f]"
// // //           : "bg-[#235e8b]"
// // //       }`}
// // //     >
// // //       {/* Left: Search Bar */}
// // //       <div
// // //         className={`${topBarStyles.searchContainer} ${
// // //           effectiveTheme === "dark" || effectiveTheme === "night"
// // //             ? "bg-gray-700"
// // //             : ""
// // //         }`}
// // //       >
// // //         <img
// // //           src="/Frame.png"
// // //           alt="Quick Actions"
// // //           className="w-6 h-6 object-contain"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Global search"
// // //           className={topBarStyles.searchInput}
// // //         />
// // //       </div>

// // //       {/* Right Icons */}
// // //       <div className={topBarStyles.topbarRight}>
// // //         {/* Theme button + dropdown */}
// // //         <div className="relative" ref={dropdownRef}>
// // //           <button
// // //             onClick={() => setIsOpen((prev) => !prev)}
// // //             className={topBarStyles.iconButton}
// // //             title="Select Theme"
// // //           >
// // //             {renderThemeIcon()}
// // //           </button>

// // //           {isOpen && (
// // //             <div
// // //               className={`absolute right-0 mt-2 w-44 rounded-lg shadow-lg p-2 z-50
// // //               ${
// // //                 effectiveTheme === "light"
// // //                   ? "bg-[#625d5d] text-black"
// // //                   : effectiveTheme === "dark"
// // //                   ? "bg-[#8e8e8e] text-white"
// // //                   : effectiveTheme === "night"
// // //                   ? "bg-[#312f2f] text-white"
// // //                   : "bg-gray-200 text-black"
// // //               }`}
// // //             >
// // //               <button
// // //                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
// // //                 onClick={() => {
// // //                   setTheme("light");
// // //                   setIsOpen(false);
// // //                 }}
// // //               >
// // //                 Light ☀️
// // //               </button>
// // //               <button
// // //                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
// // //                 onClick={() => {
// // //                   setTheme("dark");
// // //                   setIsOpen(false);
// // //                 }}
// // //               >
// // //                 Dark 🌙
// // //               </button>
// // //               <button
// // //                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
// // //                 onClick={() => {
// // //                   setTheme("night");
// // //                   setIsOpen(false);
// // //                 }}
// // //               >
// // //                 Night 🌌
// // //               </button>
// // //               <button
// // //                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
// // //                 onClick={() => {
// // //                   setTheme("system");
// // //                   setIsOpen(false);
// // //                 }}
// // //               >
// // //                 System 🖥️
// // //               </button>

// // //               {/* 🎨 NEW: Custom Theme */}
// // //               <button
// // //                 className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
// // //                 onClick={() => {
// // //                   setTheme("custom");
// // //                   setShowCustomPopup(true); // open popup
// // //                   setIsOpen(false);
// // //                 }}
// // //               >
// // //                 <FaPalette /> Custom 🎨
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* 🧩 Placeholder for custom popup */}
// // //         {showCustomPopup && (
// // //           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
// // //             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[400px] text-center">
// // //               <h2 className="text-lg font-semibold mb-4">
// // //                 Custom Theme Settings
// // //               </h2>
// // //               <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
// // //                 Here we’ll build color pickers for sidebar, topbar, and main
// // //                 content.
// // //               </p>
// // //               <button
// // //                 onClick={() => setShowCustomPopup(false)}
// // //                 className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
// // //               >
// // //                 Close
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Other buttons remain unchanged */}
// // //         <button className={topBarStyles.iconButton} title="Quick Actions">
// // //           <img
// // //             src="/falbullhorn.png"
// // //             alt="Quick Actions"
// // //             className="w-6 h-6 object-contain"
// // //           />
// // //         </button>
// // //         <button className={topBarStyles.iconButton} title="Help">
// // //           <img
// // //             src="/lets-icons_question-light (1).png"
// // //             alt="Help"
// // //             className="w-7 h-7 object-contain"
// // //           />
// // //         </button>
// // //         <button className={topBarStyles.iconButton} title="Bookmarks">
// // //           <img
// // //             src="/stash_save-ribbon.png"
// // //             alt="Bookmarks"
// // //             className="w-7 h-7 object-contain"
// // //           />
// // //         </button>
// // //         <button className={topBarStyles.iconButton} title="Settings">
// // //           <img
// // //             src="/weui_setting-outlined.png"
// // //             alt="Settings"
// // //             className="w-6 h-6 object-contain"
// // //           />
// // //         </button>
// // //         <button className={topBarStyles.iconButton} title="Notifications">
// // //           <img
// // //             src="/hugeicons_notification-01.png"
// // //             alt="Notifications"
// // //             className="w-6 h-6 object-contain"
// // //           />
// // //         </button>

// // //         {/* User Info */}
// // //         {userAvatarUrl && (
// // //           <img
// // //             src={userAvatarUrl}
// // //             alt="User avatar"
// // //             className={topBarStyles.avatar}
// // //           />
// // //         )}
// // //         <span className={topBarStyles.userName}>{userName}</span>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TopBar;
// import React, { useState, useRef, useEffect } from "react";
// import { FaMoon, FaSun, FaDesktop, FaRegMoon, FaPalette } from "react-icons/fa";
// import { topBarStyles } from "./TopBar.styles";

// import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// import CustomThemePopup from "../../Theme/CustomThemePopup"; // ✅ added popup import

// interface TopBarProps {
//   userName: string;
//   companyName?: string;
//   userAvatarUrl?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [showCustomPopup, setShowCustomPopup] = useState(false); // ✅ added for popup

//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const setTheme = useDarkModeStore((s) => s.setTheme);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Update body background color based on current theme
//   useEffect(() => {
//     const bodyColor =
//       effectiveTheme === "light"
//         ? "#235e8b"
//         : effectiveTheme === "dark"
//         ? "#0f2739"
//         : effectiveTheme === "night"
//         ? "#0f0f0f"
//         : "#235e8b";

//     document.body.style.backgroundColor = bodyColor;
//   }, [effectiveTheme]);

//   // Icon for current theme
//   const renderThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <FaSun className={topBarStyles.icon} />;
//       case "dark":
//         return <FaMoon className={topBarStyles.icon} />;
//       case "night":
//         return <FaRegMoon className={topBarStyles.icon} />;
//       case "system":
//         return <FaDesktop className={topBarStyles.icon} />;
//       case "custom":
//         return <FaPalette className={topBarStyles.icon} />;
//     }
//   };

//   return (
//     <>
//       <div
//         className={`${topBarStyles.topbar} ${
//           effectiveTheme === "light"
//             ? "bg-[#235e8b]"
//             : effectiveTheme === "dark"
//             ? "bg-[#0f2739]"
//             : effectiveTheme === "night"
//             ? "bg-[#0f0f0f]"
//             : "bg-[#235e8b]"
//         }`}
//       >
//         {/* Left: Search Bar */}
//         <div
//           className={`${topBarStyles.searchContainer} ${
//             effectiveTheme === "dark" || effectiveTheme === "night"
//               ? "bg-gray-700"
//               : ""
//           }`}
//         >
//           <img
//             src="/Frame.png"
//             alt="Quick Actions"
//             className="w-6 h-6 object-contain"
//           />
//           <input
//             type="text"
//             placeholder="Global search"
//             className={topBarStyles.searchInput}
//           />
//         </div>

//         {/* Right Icons */}
//         <div className={topBarStyles.topbarRight}>
//           {/* 🔄 Theme Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsOpen((prev) => !prev)}
//               className={topBarStyles.iconButton}
//               title="Select Theme"
//             >
//               {renderThemeIcon()}
//             </button>

//             {isOpen && (
//               <div
//                 className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50
//                   ${
//                     effectiveTheme === "light"
//                       ? "bg-[#625d5d] text-black"
//                       : effectiveTheme === "dark"
//                       ? "bg-[#8e8e8e] text-white"
//                       : effectiveTheme === "night"
//                       ? "bg-[#312f2f] text-white"
//                       : "bg-gray-200 text-black"
//                   }
//                 `}
//               >
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("light");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Light ☀️
//                 </button>

//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("dark");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Dark 🌙
//                 </button>

//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("night");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Night 🌌
//                 </button>

//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("system");
//                     setIsOpen(false);
//                   }}
//                 >
//                   System 🖥️
//                 </button>

//                 {/* ✅ Custom Theme Option */}
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("custom");
//                     setShowCustomPopup(true);
//                     setIsOpen(false);
//                   }}
//                 >
//                   Custom 🎨
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Other Buttons */}
//           <button className={topBarStyles.iconButton} title="Quick Actions">
//             <img
//               src="/falbullhorn.png"
//               alt="Quick Actions"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           <button className={topBarStyles.iconButton} title="Help">
//             <img
//               src="/lets-icons_question-light (1).png"
//               alt="Help"
//               className="w-7 h-7 object-contain"
//             />
//           </button>

//           <button className={topBarStyles.iconButton} title="Bookmarks">
//             <img
//               src="/stash_save-ribbon.png"
//               alt="Bookmarks"
//               className="w-7 h-7 object-contain"
//             />
//           </button>

//           <button className={topBarStyles.iconButton} title="Settings">
//             <img
//               src="/weui_setting-outlined.png"
//               alt="Settings"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           <button className={topBarStyles.iconButton} title="Notifications">
//             <img
//               src="/hugeicons_notification-01.png"
//               alt="Notifications"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           {/* User Avatar */}
//           {userAvatarUrl && (
//             <img
//               src={userAvatarUrl}
//               alt="User avatar"
//               className={topBarStyles.avatar}
//             />
//           )}
//           <span className={topBarStyles.userName}>{userName}</span>
//         </div>
//       </div>

//       {/* ✅ Custom Theme Popup */}
//       <CustomThemePopup
//         isOpen={showCustomPopup}
//         onClose={() => setShowCustomPopup(false)}
//       />
//     </>
//   );
// };

// export default TopBar;
// import React, { useState, useRef, useEffect } from "react";
// import { FaMoon, FaSun, FaDesktop, FaRegMoon, FaPalette } from "react-icons/fa";
// import { topBarStyles } from "./TopBar.styles";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// import CustomThemePopup from "../../Theme/CustomThemePopup";

// interface TopBarProps {
//   userName: string;
//   companyName?: string;
//   userAvatarUrl?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);

//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const setTheme = useDarkModeStore((s) => s.setTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Update body background for non-custom themes
//   useEffect(() => {
//     if (theme !== "custom") {
//       const bodyColor =
//         effectiveTheme === "light"
//           ? "#235e8b"
//           : effectiveTheme === "dark"
//           ? "#0f2739"
//           : effectiveTheme === "night"
//           ? "#0f0f0f"
//           : "#235e8b";
//       document.body.style.backgroundColor = bodyColor;
//     }
//   }, [effectiveTheme, theme]);

//   const renderThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <FaSun className={topBarStyles.icon} />;
//       case "dark":
//         return <FaMoon className={topBarStyles.icon} />;
//       case "night":
//         return <FaRegMoon className={topBarStyles.icon} />;
//       case "system":
//         return <FaDesktop className={topBarStyles.icon} />;
//       case "custom":
//         return <FaPalette className={topBarStyles.icon} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div
//         className={topBarStyles.topbar}
//         style={
//           theme === "custom"
//             ? {
//                 backgroundColor: customTheme.topbar.background,
//                 color: customTheme.topbar.text,
//               }
//             : undefined
//         }
//       >
//         {/* Left: Search Bar */}
//         <div
//           className={topBarStyles.searchContainer}
//           style={
//             theme === "custom"
//               ? {
//                   backgroundColor: customTheme.topbar.background,
//                   color: customTheme.topbar.text,
//                 }
//               : {}
//           }
//         >
//           <img
//             src="/Frame.png"
//             alt="Quick Actions"
//             className="w-6 h-6 object-contain"
//           />
//           <input
//             type="text"
//             placeholder="Global search"
//             className={topBarStyles.searchInput}
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.background,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           />
//         </div>

//         {/* Right Icons */}
//         <div className={topBarStyles.topbarRight}>
//           {/* Theme Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsOpen((prev) => !prev)}
//               className={topBarStyles.iconButton}
//               style={
//                 theme === "custom"
//                   ? {
//                       backgroundColor: customTheme.topbar.button,
//                       color: customTheme.topbar.text,
//                     }
//                   : {}
//               }
//               title="Select Theme"
//             >
//               {renderThemeIcon()}
//             </button>

//             {/* {isOpen && (
//               <div
//                 className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50"
//                 style={
//                   theme === "custom"
//                     ? {
//                         backgroundColor: customTheme.topbar.background,
//                         color: customTheme.topbar.text,
//                       }
//                     : {
//                         backgroundColor:
//                           effectiveTheme === "dark"
//                             ? "rgba(15, 39, 57, 0.95)" // dark semi-transparent
//                             : effectiveTheme === "night"
//                             ? "rgba(15, 15, 15, 0.95)" // night mode background
//                             : "rgba(255, 255, 255, 0.95)", // light mode background
//                         color:
//                           effectiveTheme === "dark" ||
//                           effectiveTheme === "night"
//                             ? "#ffffff"
//                             : "#000000",
//                       }
//                 }
//               >
//                 <button
//                   className="w-full text-left px-3 py-2 rounded"
//                   onClick={() => {
//                     setTheme("light");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Light ☀️
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 rounded"
//                   onClick={() => {
//                     setTheme("dark");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Dark 🌙
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 rounded"
//                   onClick={() => {
//                     setTheme("night");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Night 🌌
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 rounded"
//                   onClick={() => {
//                     setTheme("system");
//                     setIsOpen(false);
//                   }}
//                 >
//                   System 🖥️
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 rounded"
//                   onClick={() => {
//                     setTheme("custom");
//                     setShowCustomPopup(true);
//                     setIsOpen(false);
//                   }}
//                 >
//                   Custom 🎨
//                 </button>
//               </div>
//             )} */}
//             {isOpen && (
//               <div
//                 className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50 ${
//                   effectiveTheme === "light"
//                     ? "bg-[#625d5d] text-black"
//                     : effectiveTheme === "dark"
//                     ? "bg-[#8e8e8e] text-white"
//                     : effectiveTheme === "night"
//                     ? "bg-[#312f2f] text-white"
//                     : "bg-gray-200 text-black"
//                 }`}
//                 style={
//                   theme === "custom"
//                     ? {
//                         backgroundColor: customTheme.topbar.background,
//                         color: customTheme.topbar.text,
//                       }
//                     : {}
//                 }
//               >
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("light");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Light ☀️
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("dark");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Dark 🌙
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("night");
//                     setIsOpen(false);
//                   }}
//                 >
//                   Night 🌌
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("system");
//                     setIsOpen(false);
//                   }}
//                 >
//                   System 🖥️
//                 </button>
//                 <button
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setTheme("custom");
//                     setShowCustomPopup(true);
//                     setIsOpen(false);
//                   }}
//                 >
//                   Custom 🎨
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Other Buttons with original images */}
//           <button
//             className={topBarStyles.iconButton}
//             title="Quick Actions"
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.button,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           >
//             <img
//               src="/falbullhorn.png"
//               alt="Quick Actions"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           <button
//             className={topBarStyles.iconButton}
//             title="Help"
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.button,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           >
//             <img
//               src="/lets-icons_question-light (1).png"
//               alt="Help"
//               className="w-7 h-7 object-contain"
//             />
//           </button>

//           <button
//             className={topBarStyles.iconButton}
//             title="Bookmarks"
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.button,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           >
//             <img
//               src="/stash_save-ribbon.png"
//               alt="Bookmarks"
//               className="w-7 h-7 object-contain"
//             />
//           </button>

//           <button
//             className={topBarStyles.iconButton}
//             title="Settings"
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.button,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           >
//             <img
//               src="/weui_setting-outlined.png"
//               alt="Settings"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           <button
//             className={topBarStyles.iconButton}
//             title="Notifications"
//             style={
//               theme === "custom"
//                 ? {
//                     backgroundColor: customTheme.topbar.button,
//                     color: customTheme.topbar.text,
//                   }
//                 : {}
//             }
//           >
//             <img
//               src="/hugeicons_notification-01.png"
//               alt="Notifications"
//               className="w-6 h-6 object-contain"
//             />
//           </button>

//           {/* User Avatar */}
//           {userAvatarUrl && (
//             <img
//               src={userAvatarUrl}
//               alt="User avatar"
//               className={topBarStyles.avatar}
//               style={
//                 theme === "custom"
//                   ? { borderColor: customTheme.topbar.button }
//                   : {}
//               }
//             />
//           )}
//           <span
//             style={theme === "custom" ? { color: customTheme.topbar.text } : {}}
//           >
//             {userName}
//           </span>
//         </div>
//       </div>

//       {/* Custom Theme Popup */}
//       <CustomThemePopup
//         isOpen={showCustomPopup}
//         onClose={() => setShowCustomPopup(false)}
//       />
//     </>
//   );
// };

// export default TopBar;
// import React, { useState, useRef, useEffect } from "react";
// import { FaSun, FaMoon, FaRegMoon, FaDesktop, FaPalette } from "react-icons/fa";
// import { topBarStyles } from "./TopBar.styles";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// import CustomThemePopup from "../../Theme/CustomThemePopup";

// interface TopBarProps {
//   userName: string;
//   userAvatarUrl?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const userMenuRef = useRef<HTMLDivElement>(null);

//   const theme = useDarkModeStore((s) => s.theme);
//   const styles = useDarkModeStore((s) => s.styles);
//   const setTheme = useDarkModeStore((s) => s.setTheme);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         userMenuRef.current &&
//         !userMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsUserMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const renderThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <FaSun className={topBarStyles.icon} />;
//       case "dark":
//         return <FaMoon className={topBarStyles.icon} />;
//       case "night":
//         return <FaRegMoon className={topBarStyles.icon} />;
//       case "system":
//         return <FaDesktop className={topBarStyles.icon} />;
//       case "custom":
//         return <FaPalette className={topBarStyles.icon} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div
//         className={topBarStyles.topbar}
//         style={{ backgroundColor: styles.topbarBg, color: styles.topbarText }}
//       >
//         {/* Left: Search */}
//         <div
//           className={topBarStyles.searchContainer}
//           style={{ backgroundColor: styles.searchBg, color: styles.searchText }}
//         >
//           <img
//             src="/Frame.png"
//             alt="Quick Actions"
//             className="w-6 h-6 object-contain"
//           />
//           <input
//             type="text"
//             placeholder="Global search"
//             className={topBarStyles.searchInput}
//             style={{ color: styles.searchText }}
//           />
//         </div>

//         {/* Right icons */}
//         <div className={topBarStyles.topbarRight}>
//           {/* Theme selector */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsOpen((prev) => !prev)}
//               className={topBarStyles.iconButton}
//               style={{
//                 backgroundColor: styles.topbarBtn,
//                 color: styles.topbarText,
//               }}
//               title="Select Theme"
//             >
//               {renderThemeIcon()}
//             </button>

//             {isOpen && (
//               <div
//                 className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50"
//                 style={{
//                   backgroundColor: styles.dropdownBg,
//                   color: styles.dropdownText,
//                 }}
//               >
//                 {["light", "dark", "night", "system", "custom"].map((t) => (
//                   <button
//                     key={t}
//                     className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                     onClick={() => {
//                       setTheme(t as any);
//                       if (t === "custom") setShowCustomPopup(true);
//                       setIsOpen(false);
//                     }}
//                   >
//                     {t.charAt(0).toUpperCase() + t.slice(1)}
//                     {t === "light" && " ☀️"}
//                     {t === "dark" && " 🌙"}
//                     {t === "night" && " 🌌"}
//                     {t === "system" && " 🖥️"}
//                     {t === "custom" && " 🎨"}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Other action buttons */}
//           {[
//             "falbullhorn",
//             "lets-icons_question-light (1)",
//             "stash_save-ribbon",
//             "weui_setting-outlined",
//             "hugeicons_notification-01",
//           ].map((img, i) => (
//             <button
//               type="button"
//               title="Action"
//               key={i}
//               className={topBarStyles.iconButton}
//               style={{
//                 backgroundColor: styles.topbarBtn,
//                 color: styles.topbarText,
//               }}
//             >
//               <img
//                 src={`/${img}.png`}
//                 alt=""
//                 className="w-6 h-6 object-contain"
//               />
//             </button>
//           ))}
//           {/* User profile button */}

//           <button
//             onClick={() => {
//               // Future click action here
//               console.log("User button clicked");
//             }}
//             className="flex items-center gap-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
//             style={{
//               color: styles.topbarText,
//             }}
//           >
//             {userAvatarUrl && (
//               <img
//                 src={userAvatarUrl}
//                 alt="User avatar"
//                 className={topBarStyles.avatar}
//                 style={{ borderColor: styles.topbarBtn }}
//               />
//             )}
//             <span>{userName}</span>
//           </button>
//         </div>
//       </div>

//       {/* Custom theme popup */}
//       <CustomThemePopup
//         isOpen={showCustomPopup}
//         onClose={() => setShowCustomPopup(false)}
//       />
//     </>
//   );
// };

// export default TopBar;
// import React, { useState, useRef, useEffect } from "react";
// import {
//   FaSun,
//   FaMoon,
//   FaRegMoon,
//   FaDesktop,
//   FaPalette,
//   FaBell,
//   FaQuestionCircle,
//   FaCog,
//   FaBullhorn,
//   FaSearch,
// } from "react-icons/fa";
// import { topBarStyles } from "./TopBar.styles";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";
// import CustomThemePopup from "../../Theme/CustomThemePopup";
// import { useSidebarContext } from "../../Context/SidebarContext";
// import type { Page } from "../../Types/Page";
// import { useNavigate } from "react-router-dom";
// import {
//   IconBell,
//   IconDeviceDesktop,
//   IconHelp,
//   IconMoon,
//   IconMoonStars,
//   IconPalette,
//   IconSettings,
//   IconSettings2,
//   IconSettingsAutomation,
//   IconSpeakerphone,
//   IconSun,
// } from "@tabler/icons-react";
// // adjust the path
// interface TopBarProps {
//   userName: string;
//   userAvatarUrl?: string;
// }

// const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const userMenuRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const theme = useDarkModeStore((s) => s.theme);
//   const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
//   const helpMenuRef = useRef<HTMLDivElement>(null);
//   const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
//   const settingsMenuRef = useRef<HTMLDivElement>(null);
//   const [showCompanyDetails, setShowCompanyDetails] = useState(false); // 👈 new state
//   const [isResizingActive, setIsResizingActive] = useState(false);
//   const [lightPreview, setLightPreview] = useState<string | null>(null);
//   const [darkPreview, setDarkPreview] = useState<string | null>(null);

//   const [lightSize, setLightSize] = useState({ width: 150, height: 120 });
//   const [darkSize, setDarkSize] = useState({ width: 150, height: 120 });

//   // const [resizing, setResizing] = useState<{
//   //   type: "light" | "dark" | null;
//   //   direction: "horizontal" | "vertical" | null;
//   // }>({ type: null, direction: null });
//   const [resizing, setResizing] = useState<{
//     type: "light" | "dark" | null;
//     direction: "horizontal" | "vertical" | null;
//     side: "left" | "right" | "top" | "bottom" | null;
//   }>({ type: null, direction: null, side: null });

//   // const startResizing = (
//   //   e: React.MouseEvent,
//   //   type: "light" | "dark",
//   //   direction: "horizontal" | "vertical"
//   // ) => {
//   //   e.preventDefault();
//   //   setIsResizingActive(true);
//   //   setResizing({ type, direction });
//   // };
//   const startResizing = (
//     e: React.MouseEvent,
//     type: "light" | "dark",
//     direction: "horizontal" | "vertical",
//     side: "left" | "right" | "top" | "bottom"
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsResizingActive(true);
//     setResizing({ type, direction, side });
//   };

//   // useEffect(() => {
//   //   const handleMouseMove = (e: MouseEvent) => {
//   //     if (!resizing.type || !resizing.direction) return;

//   //     if (resizing.type === "light") {
//   //       setLightSize((prev) => ({
//   //         width:
//   //           resizing.direction === "horizontal"
//   //             ? Math.min(Math.max(60, prev.width + e.movementX), 224) // max container width
//   //             : prev.width,
//   //         height:
//   //           resizing.direction === "vertical"
//   //             ? Math.min(Math.max(60, prev.height + e.movementY), 160) // max container height
//   //             : prev.height,
//   //       }));
//   //     } else if (resizing.type === "dark") {
//   //       setDarkSize((prev) => ({
//   //         width:
//   //           resizing.direction === "horizontal"
//   //             ? Math.min(Math.max(60, prev.width + e.movementX), 224)
//   //             : prev.width,
//   //         height:
//   //           resizing.direction === "vertical"
//   //             ? Math.min(Math.max(60, prev.height + e.movementY), 160)
//   //             : prev.height,
//   //       }));
//   //     }
//   //   };

//   //   const stopResizing = () => {
//   //     setResizing({ type: null, direction: null });
//   //   };

//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   window.addEventListener("mouseup", stopResizing);

//   //   return () => {
//   //     window.removeEventListener("mousemove", handleMouseMove);
//   //     window.removeEventListener("mouseup", stopResizing);
//   //   };
//   // }, [resizing]);
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!resizing.type || !resizing.direction || !resizing.side) return;

//       const deltaX = e.movementX;
//       const deltaY = e.movementY;

//       const resizeLogic = (
//         prev: { width: number; height: number },
//         maxWidth: number,
//         maxHeight: number
//       ) => {
//         let newWidth = prev.width;
//         let newHeight = prev.height;

//         if (resizing.direction === "horizontal") {
//           if (resizing.side === "right") {
//             newWidth = Math.min(Math.max(60, prev.width + deltaX), maxWidth);
//           } else if (resizing.side === "left") {
//             newWidth = Math.min(Math.max(60, prev.width - deltaX), maxWidth);
//           }
//         } else if (resizing.direction === "vertical") {
//           if (resizing.side === "bottom") {
//             newHeight = Math.min(Math.max(60, prev.height + deltaY), maxHeight);
//           } else if (resizing.side === "top") {
//             newHeight = Math.min(Math.max(60, prev.height - deltaY), maxHeight);
//           }
//         }

//         return { width: newWidth, height: newHeight };
//       };

//       if (resizing.type === "light") {
//         setLightSize((prev) => resizeLogic(prev, 224, 160));
//       } else if (resizing.type === "dark") {
//         setDarkSize((prev) => resizeLogic(prev, 224, 160));
//       }
//     };

//     const stopResizing = () => {
//       setResizing({ type: null, direction: null, side: null });
//       setTimeout(() => setIsResizingActive(false), 150);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", stopResizing);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", stopResizing);
//     };
//   }, [resizing]);

//   const styles = useDarkModeStore((s) => s.styles);
//   const setTheme = useDarkModeStore((s) => s.setTheme);
//   const { menuPages } = useSidebarContext();
//   const getChildrenPages = (parentId: number): Page[] => {
//     return menuPages.filter((p) => p.parentId === parentId);
//   };
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);
//   useEffect(() => {
//     let bodyColor = "#ffffff"; // fallback

//     if (effectiveTheme === "light") {
//       bodyColor = "#235e8b";
//     } else if (effectiveTheme === "dark") {
//       bodyColor = "#0f2739";
//     } else if (effectiveTheme === "night") {
//       bodyColor = "#0f0f0f";
//     } else if (effectiveTheme === "custom") {
//       bodyColor = customTheme.topbar.background;
//     }

//     document.body.style.backgroundColor = bodyColor;
//   }, [
//     effectiveTheme,
//     customTheme.topbar.background,
//     customTheme.globalBackground,
//   ]);
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         settingsMenuRef.current &&
//         !settingsMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsSettingsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         settingsMenuRef.current &&
//         !settingsMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsSettingsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         helpMenuRef.current &&
//         !helpMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsHelpMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         userMenuRef.current &&
//         !userMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsUserMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // const renderThemeIcon = () => {
//   //   switch (theme) {
//   //     case "light":
//   //       return <FaSun className={topBarStyles.icon} />;
//   //     case "dark":
//   //       return <FaMoon className={topBarStyles.icon} />;
//   //     case "night":
//   //       return <FaRegMoon className={topBarStyles.icon} />;
//   //     case "system":
//   //       return <FaDesktop className={topBarStyles.icon} />;
//   //     case "custom":
//   //       return <FaPalette className={topBarStyles.icon} />;
//   //     default:
//   //       return null;
//   //   }
//   // };
//   const renderThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <IconSun size={24} stroke={1.5} />;
//       case "dark":
//         return <IconMoon size={24} stroke={1.5} />;
//       case "night":
//         return <IconMoonStars size={24} stroke={1.5} />;
//       case "system":
//         return <IconDeviceDesktop size={24} stroke={1.5} />;
//       case "custom":
//         return <IconPalette size={24} stroke={1.5} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//         #global-search::placeholder {
//           color: ${styles.searchText};
//           opacity: 0.7;
//           transition: color 0.6s ease-in-out;
//         }
//       `}
//       </style>
//       <div
//         className={topBarStyles.topbar}
//         style={{ backgroundColor: styles.topbarBg, color: styles.topbarText }}
//       >
//         {/* Left placeholder */}
//         {/* Left dropdown container */}
//         <div
//           className="flex items-center justify-start w-1/3 relative"
//           ref={leftDropdownRef}
//         >
//           <button
//             className="w-full px-3 py-2 bg-white/10 rounded hover:bg-white/20 text-sm text-white"
//             onClick={() => setIsLeftDropdownOpen((prev) => !prev)}
//           >
//             Select Option
//           </button>

//           {isLeftDropdownOpen && (
//             <div className="absolute left-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-gray-700 text-black dark:text-white z-50">
//               {["A", "B", "C"].map((item) => (
//                 <button
//                   key={item}
//                   className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
//                   onClick={() => {
//                     console.log("Selected:", item);
//                     setIsLeftDropdownOpen(false);
//                   }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Right section: search + icons */}
//         <div className="flex items-center justify-end gap-2 w-2/3 relative">
//           {/* Global Search */}
//           <div
//             className={topBarStyles.searchContainer}
//             style={{
//               backgroundColor: styles.searchBg,
//               color: styles.searchText,
//             }}
//           >
//             <FaSearch
//               className="w-4 h-4"
//               style={{ color: styles.searchText }}
//             />
//             <input
//               id="global-search"
//               type="text"
//               placeholder="Global search"
//               className={topBarStyles.searchInput}
//               style={{ color: styles.searchText }}
//             />
//           </div>

//           {/* Right icons */}
//           <div className={topBarStyles.topbarRight}>
//             {/* Theme selector */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsOpen((prev) => !prev)}
//                 className={topBarStyles.iconButton}
//                 style={{
//                   backgroundColor: styles.topbarBtn,
//                   color: styles.topbarText,
//                 }}
//                 title="Theme Mode"
//               >
//                 {React.cloneElement(renderThemeIcon()!, {
//                   style: { color: styles.topbarText },
//                 })}
//               </button>

//               {isOpen && (
//                 <div
//                   className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50"
//                   style={{
//                     backgroundColor: styles.dropdownBg,
//                     color: styles.dropdownText,
//                   }}
//                 >
//                   {["light", "dark", "night", "system", "custom"].map((t) => (
//                     <button
//                       key={t}
//                       className="w-full flex justify-between items-center text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
//                       onClick={() => {
//                         setTheme(t as any);
//                         if (t === "custom") setShowCustomPopup(true);
//                         setIsOpen(false);
//                       }}
//                     >
//                       {t.charAt(0).toUpperCase() + t.slice(1)}
//                       {t === "light" && <IconSun />}
//                       {t === "dark" && <IconMoon />}
//                       {t === "night" && <IconMoonStars />}
//                       {t === "system" && <IconDeviceDesktop />}
//                       {t === "custom" && <IconPalette />}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Other action buttons */}
//             {[
//               {
//                 id: "notifications",
//                 title: "Notifications",
//                 icon: <IconSpeakerphone />,
//               },
//               { id: "help", title: "Help & Support", icon: <IconHelp /> },
//               { id: "settings", title: "Settings", icon: <IconSettings /> },
//               { id: "updates", title: "What's New", icon: <IconBell /> },
//             ].map((item, i) => {
//               if (item.id === "help") {
//                 return (
//                   <div key={i} className="relative" ref={helpMenuRef}>
//                     <button
//                       type="button"
//                       title={item.title}
//                       className={topBarStyles.iconButton}
//                       style={{
//                         backgroundColor: styles.topbarBtn,
//                         color: styles.topbarText,
//                       }}
//                       onClick={() => setIsHelpMenuOpen((prev) => !prev)}
//                     >
//                       {item.icon}
//                     </button>

//                     {isHelpMenuOpen && (
//                       <div
//                         className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
//                         style={{
//                           backgroundColor: styles.dropdownBg,
//                           color: styles.dropdownText,
//                         }}
//                       >
//                         {getChildrenPages(15).map((child: Page) => (
//                           <button
//                             key={child.id}
//                             className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
//                             onClick={() => {
//                               navigate(child.path);
//                               setIsHelpMenuOpen(false);
//                             }}
//                           >
//                             <i className={`${child.icon} w-4 text-sm`}></i>
//                             <span>{child.name}</span>
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               if (item.id === "settings") {
//                 return (
//                   <div key={i} className="relative" ref={settingsMenuRef}>
//                     <button
//                       type="button"
//                       title={item.title}
//                       className={topBarStyles.iconButton}
//                       style={{
//                         backgroundColor: styles.topbarBtn,
//                         color: styles.topbarText,
//                       }}
//                       onClick={() => setIsSettingsMenuOpen((prev) => !prev)}
//                     >
//                       {item.icon}
//                     </button>

//                     {isSettingsMenuOpen && (
//                       <div
//                         className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
//                         style={{
//                           backgroundColor: styles.dropdownBg,
//                           color: styles.dropdownText,
//                         }}
//                       >
//                         <button
//                           className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
//                           onClick={() => {
//                             navigate("/company-details");
//                             setIsSettingsMenuOpen(false);
//                           }}
//                         >
//                           <FaCog className="w-4" />
//                           <span>Company Details</span>
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <button
//                   key={i}
//                   type="button"
//                   title={item.title}
//                   className={topBarStyles.iconButton}
//                   style={{
//                     backgroundColor: styles.topbarBtn,
//                     color: styles.topbarText,
//                   }}
//                 >
//                   {item.icon}
//                 </button>
//               );
//             })}

//             {/* User profile button */}
//             <div className="relative" ref={userMenuRef}>
//               <button
//                 onClick={() => setIsUserMenuOpen((prev) => !prev)}
//                 className="flex items-center gap-2 p-1 rounded"
//                 style={{ color: styles.topbarText }}
//               >
//                 {userAvatarUrl && (
//                   <img
//                     src={userAvatarUrl}
//                     alt="User avatar"
//                     className={topBarStyles.avatar}
//                     style={{ borderColor: styles.topbarBtn }}
//                   />
//                 )}
//                 <span>{userName}</span>
//               </button>

//               {isUserMenuOpen && (
//                 <div
//                   className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
//                   style={{
//                     backgroundColor: styles.dropdownBg,
//                     color: styles.dropdownText,
//                   }}
//                 >
//                   {getChildrenPages(2).map((child: Page) => (
//                     <button
//                       key={child.id}
//                       className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
//                       onClick={() => {
//                         navigate(child.path);
//                         setIsUserMenuOpen(false);
//                       }}
//                     >
//                       <i className={`${child.icon} w-4 text-sm`}></i>
//                       <span>{child.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom theme popup */}
//       <CustomThemePopup
//         isOpen={showCustomPopup}
//         onClose={() => setShowCustomPopup(false)}
//       />
//       {/* <CompanyDetailsPopup
//         isOpen={showCompanyDetails}
//         onClose={() => setShowCompanyDetails(false)}
//         onSave={(lightLogo, darkLogo, lightSize, darkSize) => {
//           // ✅ Save logos + sizes globally in Zustand store
//           useDarkModeStore.getState().setCompanyLogos({
//             lightLogo,
//             darkLogo,
//             lightSize,
//             darkSize,
//           });

//           setShowCompanyDetails(false);
//           console.log("Saved logos with sizes:", {
//             lightLogo,
//             darkLogo,
//             lightSize,
//             darkSize,
//           });
//         }}
//       /> */}
//       {/* Company Details Popup */}
//     </>
//   );
// };

// export default TopBar;
import React, { useState, useRef, useEffect } from "react";

import { topBarStyles } from "./TopBar.styles";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
import CustomThemePopup from "../../Theme/CustomThemePopup";
import { useSidebarContext } from "../../Context/SidebarContext";
import type { Page } from "../../Types/Page";
import { useNavigate } from "react-router-dom";
import FrameIcon from "../../assets/Frame.svg?react";
import CompanyIcon from "../../assets/Frame (4).svg?react";

import { IconChevronDown } from "@tabler/icons-react";
import {
  IconBell,
  IconDeviceDesktop,
  IconHelp,
  IconMoon,
  IconMoonStars,
  IconPalette,
  IconSettings,
  IconSpeakerphone,
  IconSun,
} from "@tabler/icons-react";
import Layer1f from "../../assets/Layer 1.png";
import guardImg from "../../assets/guardian_global1.png";
import SafeWatch from "../../assets/Safewatch2_logo.png";

interface TopBarProps {
  userName: string;
  userAvatarUrl?: string;
}

const TopBar: React.FC<TopBarProps> = ({ userName, userAvatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isLeftDropdownOpen, setIsLeftDropdownOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const helpMenuRef = useRef<HTMLDivElement>(null);
  const settingsMenuRef = useRef<HTMLDivElement>(null);
  const leftDropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const theme = useDarkModeStore((s) => s.theme);
  const styles = useDarkModeStore((s) => s.styles);
  const setTheme = useDarkModeStore((s) => s.setTheme);
  const { menuPages } = useSidebarContext();
  const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
  const customTheme = useDarkModeStore((s) => s.customTheme);

  const getChildrenPages = (parentId: number): Page[] => {
    return menuPages.filter((p) => p.parentId === parentId);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        leftDropdownRef.current &&
        !leftDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLeftDropdownOpen(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        helpMenuRef.current &&
        !helpMenuRef.current.contains(event.target as Node)
      ) {
        setIsHelpMenuOpen(false);
      }
      if (
        settingsMenuRef.current &&
        !settingsMenuRef.current.contains(event.target as Node)
      ) {
        setIsSettingsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body background according to theme
  useEffect(() => {
    let bodyColor = "#ffffff";
    if (effectiveTheme === "light") bodyColor = "#235e8b";
    else if (effectiveTheme === "dark") bodyColor = "#0f2739";
    else if (effectiveTheme === "night") bodyColor = "#0f0f0f";
    else if (effectiveTheme === "custom")
      bodyColor = customTheme.topbar.background;

    document.body.style.backgroundColor = bodyColor;
  }, [effectiveTheme, customTheme]);

  const renderThemeIcon = () => {
    switch (theme) {
      case "light":
        return <IconSun size={24} stroke={1.5} />;
      case "dark":
        return <IconMoon size={24} stroke={1.5} />;
      case "night":
        return <IconMoonStars size={24} stroke={1.5} />;
      case "system":
        return <IconDeviceDesktop size={24} stroke={1.5} />;
      case "custom":
        return <IconPalette size={24} stroke={1.5} />;
      default:
        return null;
    }
  };

  return (
    <>
      <style>
        {`
          #global-search::placeholder {
            color: ${styles.searchText};
            opacity: 0.7;
            transition: color 0.6s ease-in-out;
          }
        `}
      </style>

      <div
        className={topBarStyles.topbar}
        style={{ backgroundColor: styles.topbarBg, color: styles.topbarText }}
      >
        {/* Left dropdown container */}
        {/* <div
          className="flex  justify-start w-1/7 relative"
          ref={leftDropdownRef}
        >
          <button
            className="w-50 px-3 py-2 bg-white/10 rounded hover:bg-white/20 text-sm text-white"
            onClick={() => setIsLeftDropdownOpen((prev) => !prev)}
          >
            Select Option
          </button>

          {isLeftDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-gray-700 text-black dark:text-white z-50">
              {["A", "B", "C"].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                  onClick={() => {
                    console.log("Selected:", item);
                    setIsLeftDropdownOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div> */}

        <div
          className="flex items-center justify-start w-[261px]  relative"
          ref={leftDropdownRef}
        >
          {/* Dropdown Button */}
          <button
            className="w-full flex  justify-between px-3 py-1.5 h-[35px]  bg-[#c5dbff] rounded hover:bg-white/20 text-sm text-white relative"
            onClick={() => setIsLeftDropdownOpen((prev) => !prev)}
          >
            {/* Floating Placeholder */}

            {/* Selected or placeholder content */}
            <div className="flex items-center gap-1">
              <FrameIcon className="w-[18px] h-[18px] text-blue transition-colors text-[#1766A8] mb-1  duration-300" />
              <span
                className={`${
                  selectedCompany ? "text-[#1766A8]" : "text-[#1766A8]"
                }`}
              >
                {selectedCompany || " Security Org"}
              </span>
            </div>

            <IconChevronDown
              size={16}
              stroke={1.5}
              className={`transition-transform duration-300 mt-1 text-[#1766A8]  ${
                isLeftDropdownOpen ? "rotate-180 " : ""
              }`}
            />
          </button>

          {/* Dropdown List */}
          {isLeftDropdownOpen && (
            <div className="absolute top-[40px] left-0 w-full rounded-lg shadow-lg bg-white dark:bg-gray-700 text-black dark:text-white z-50">
              {["SECURECY", "GUARDIAN", "SAFEWATCH"].map((company) => (
                <button
                  key={company}
                  className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded flex items-center gap-2"
                  onClick={() => {
                    setSelectedCompany(company);
                    setIsLeftDropdownOpen(false);
                  }}
                >
                  <img
                    src={
                      company === "SECURECY"
                        ? Layer1f
                        : company === "GUARDIAN"
                        ? guardImg
                        : SafeWatch
                    }
                    alt={`${company} logo`}
                    className="w-6 h-auto object-contain"
                  />
                  <span>{company}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right section: global search + icons */}
        <div className="flex items-center justify-end gap-2  relative">
          {/* Global Search */}
          <div
            className={topBarStyles.searchContainer}
            style={{
              backgroundColor: styles.searchBg,
              color: styles.searchText,
            }}
          >
            <CompanyIcon
              className="w-5 h-5"
              style={{ color: styles.searchText }}
            />
            <input
              id="global-search"
              type="text"
              placeholder="Global search"
              className={topBarStyles.searchInput}
              style={{ color: styles.searchText }}
            />
          </div>

          {/* Right icons */}
          <div className={topBarStyles.topbarRight}>
            {/* Theme selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={topBarStyles.iconButton}
                style={{
                  backgroundColor: styles.topbarBtn,
                  color: styles.topbarText,
                }}
                title="Theme Mode"
              >
                {React.cloneElement(renderThemeIcon()!, {
                  style: { color: styles.topbarText },
                })}
              </button>

              {isOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg p-2 z-50"
                  style={{
                    backgroundColor: styles.dropdownBg,
                    color: styles.dropdownText,
                  }}
                >
                  {["light", "dark", "night", "system", "custom"].map((t) => (
                    <button
                      key={t}
                      className="w-full flex justify-between items-center text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                      onClick={() => {
                        setTheme(t as any);
                        if (t === "custom") setShowCustomPopup(true);
                        setIsOpen(false);
                      }}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                      {t === "light" && <IconSun />}
                      {t === "dark" && <IconMoon />}
                      {t === "night" && <IconMoonStars />}
                      {t === "system" && <IconDeviceDesktop />}
                      {t === "custom" && <IconPalette />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider after theme selector */}
            <div className={topBarStyles.verticalDivider}></div>

            {/* Other action buttons */}
            {[
              {
                id: "notifications",
                title: "Notifications",
                icon: <IconSpeakerphone />,
              },
              {
                id: "help",
                title: "Help & Support",
                icon: <IconHelp />,
              },
              {
                id: "settings",
                title: "Settings",
                icon: <IconSettings />,
              },
              {
                id: "updates",
                title: "What's New",
                icon: <IconBell />,
              },
            ].map((item, i) => (
              <React.Fragment key={item.id}>
                {item.id === "help" ? (
                  <div className="relative" ref={helpMenuRef}>
                    <button
                      type="button"
                      title={item.title}
                      className={topBarStyles.iconButton}
                      style={{
                        backgroundColor: styles.topbarBtn,
                        color: styles.topbarText,
                      }}
                      onClick={() => setIsHelpMenuOpen((prev) => !prev)}
                    >
                      {item.icon}
                    </button>

                    {isHelpMenuOpen && (
                      <div
                        className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
                        style={{
                          backgroundColor: styles.dropdownBg,
                          color: styles.dropdownText,
                        }}
                      >
                        {getChildrenPages(15).map((child: Page) => (
                          <button
                            key={child.id}
                            className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
                            onClick={() => {
                              navigate(child.path);
                              setIsHelpMenuOpen(false);
                            }}
                          >
                            <i className={`${child.icon} w-4 text-sm`}></i>
                            <span>{child.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.id === "settings" ? (
                  <div className="relative" ref={settingsMenuRef}>
                    <button
                      type="button"
                      title={item.title}
                      className={topBarStyles.iconButton}
                      style={{
                        backgroundColor: styles.topbarBtn,
                        color: styles.topbarText,
                      }}
                      onClick={() => setIsSettingsMenuOpen((prev) => !prev)}
                    >
                      {item.icon}
                    </button>

                    {isSettingsMenuOpen && (
                      <div
                        className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
                        style={{
                          backgroundColor: styles.dropdownBg,
                          color: styles.dropdownText,
                        }}
                      >
                        <button
                          className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
                          onClick={() => {
                            navigate("/company-details");
                            setIsSettingsMenuOpen(false);
                          }}
                        >
                          <span>Company Details</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    title={item.title}
                    className={topBarStyles.iconButton}
                    style={{
                      backgroundColor: styles.topbarBtn,
                      color: styles.topbarText,
                    }}
                  >
                    {item.icon}
                  </button>
                )}

                {/* Divider between icons, except after the last one */}
                {i < 3 && <div className={topBarStyles.verticalDivider}></div>}
              </React.Fragment>
            ))}

            {/* Divider before user profile */}
            <div className={topBarStyles.verticalDivider}></div>

            {/* User profile button */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center p-1 pr-0 rounded justify-between"
                style={{ color: styles.topbarText }}
              >
                {userAvatarUrl && (
                  <img
                    src={userAvatarUrl}
                    alt="User avatar"
                    className={topBarStyles.avatar}
                    style={{ borderColor: styles.topbarBtn }}
                  />
                )}
                <span className={topBarStyles.userName}>{userName}</span>
              </button>

              {isUserMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg p-2 z-50"
                  style={{
                    backgroundColor: styles.dropdownBg,
                    color: styles.dropdownText,
                  }}
                >
                  {getChildrenPages(2).map((child: Page) => (
                    <button
                      key={child.id}
                      className="w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2"
                      onClick={() => {
                        navigate(child.path);
                        setIsUserMenuOpen(false);
                      }}
                    >
                      <i className={`${child.icon} w-4 text-sm`}></i>
                      <span>{child.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom theme popup */}
      <CustomThemePopup
        isOpen={showCustomPopup}
        onClose={() => setShowCustomPopup(false)}
      />
    </>
  );
};

export default TopBar;
