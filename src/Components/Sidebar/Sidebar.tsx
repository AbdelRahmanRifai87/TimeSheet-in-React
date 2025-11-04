// // // import SidebarDivider from "./SidebarDivider";
// // import SidebarMenu from "./SidebarMenu";
// // import SidebarFooter from "./SidebarFooter";
// // import { useSidebarContext } from "../../Context/SidebarContext";
// // import { useEffect, useRef, useState } from "react";
// // import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// // const Sidebar: React.FC = () => {
// //   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);

// //   // Company dropdown state
// //   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
// //   const [selectedCompany, setSelectedCompany] = useState("ULTIMATE");
// //   const [orderedCompanies, setOrderedCompanies] = useState([
// //     "ULTIMATE",
// //     "GUARDIAN",
// //     "SAFEWATCH",
// //   ]);

// //   const dropdownRef = useRef<HTMLDivElement>(null);

// //   // Logos
// //   const companyLogos: Record<string, string> = {
// //     ULTIMATE: "/ultimatesecurity2.png",
// //     GUARDIAN: "/guardian_global1.png",
// //     SAFEWATCH: "/Safewatch2_logo.png",
// //   };
// //   const companySigns: Record<string, string> = {
// //     ULTIMATE:
// //       effectiveTheme === "dark" || effectiveTheme === "night"
// //         ? "/logo_white.png"
// //         : "/logo_color1.png",
// //     GUARDIAN: "/logo_color1.png",
// //     SAFEWATCH: "/logo_color1.png",
// //   };

// //   // Click outside dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (
// //         dropdownRef.current &&
// //         !dropdownRef.current.contains(event.target as Node)
// //       ) {
// //         setIsCompanyDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     setOrderedCompanies([
// //       selectedCompany,
// //       ...orderedCompanies.filter((c) => c !== selectedCompany),
// //     ]);
// //   }, []);

// //   const sidebarBg =
// //     effectiveTheme === "light"
// //       ? "bg-[#235e8b]"
// //       : effectiveTheme === "dark"
// //       ? "bg-[#0f2739]"
// //       : effectiveTheme === "night"
// //       ? "bg-[#0f0f0f]"
// //       : "bg-[#235e8b]";

// //   return (
// //     <aside
// //       className={`row-span-2 flex flex-col transition-all duration-300   ${sidebarBg}`}
// //     >
// //       {/* Company Logo */}

// //       <div
// //         ref={dropdownRef}
// //         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
// //         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
// //       >
// //         <img
// //           src={
// //             isCollapsed
// //               ? companySigns[selectedCompany]
// //               : companyLogos[selectedCompany]
// //           }
// //           alt={`${selectedCompany} Logo`}
// //           className={`object-contain transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[500px] h-[45px]"
// //           }`}
// //         />
// //         {!isCollapsed && (
// //           // <i
// //           //   className={`fas fa-chevron-down absolute bottom-3 right-0.25 text-white transition-transform duration-300 ${
// //           //     isCompanyDropdownOpen ? "rotate-180" : ""
// //           //   }`}
// //           // />
// //           <i
// //             className={`fas fa-chevron-down absolute bottom-3 right-1 text-white text-xs transition-transform duration-300 ${
// //               isCompanyDropdownOpen ? "rotate-180" : ""
// //             }`}
// //           />
// //         )}
// //         {/* Dropdown list */}
// //         {isCompanyDropdownOpen && !isCollapsed && (
// //           <div
// //             className={`absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50 ${
// //               effectiveTheme === "light"
// //                 ? "bg-[#625d5d] text-black"
// //                 : effectiveTheme === "dark"
// //                 ? "bg-[#8e8e8e] text-white"
// //                 : effectiveTheme === "night"
// //                 ? "bg-[#312f2f] text-white"
// //                 : "bg-gray-200 text-black"
// //             }`}
// //           >
// //             {orderedCompanies.map((company) => (
// //               <div
// //                 key={company}
// //                 className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
// //                 onClick={() => {
// //                   setSelectedCompany(company);
// //                   setIsCompanyDropdownOpen(false);
// //                 }}
// //               >
// //                 {company}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //       <div className="flex-1 overflow-y-auto overflow-x-hidden  no-scrollbar ">
// //         <SidebarMenu pages={menuPages || []} isCollapsed={isCollapsed} />
// //       </div>
// //       {/* <SidebarDivider /> */}

// //       {/* Menu */}

// //       {/* Collapse Button */}
// //       <div className="mt-auto  flex flex-col gap-3 ">
// //         <button
// //           className={`flex items-center justify-center  bg-[#EDEDED80] text-[#F5F5DC] rounded-md mx-auto transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
// //           }`}
// //           onClick={() => setIsCollapsed((prev) => !prev)}
// //         >
// //           {isCollapsed ? (
// //             <i className="fas fa-angle-right"></i>
// //           ) : (
// //             <>
// //               <span className="text-sm font-medium mr-2 ">Collapse Menu</span>
// //               <i className="fas fa-angle-left"></i>
// //             </>
// //           )}
// //         </button>
// //       </div>

// //       <SidebarFooter />
// //     </aside>
// //   );
// // };

// // export default Sidebar;
// // import SidebarMenu from "./SidebarMenu";
// // import SidebarFooter from "./SidebarFooter";
// // import { useSidebarContext } from "../../Context/SidebarContext";
// // import { useEffect, useRef, useState } from "react";
// // import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// // const Sidebar: React.FC = () => {
// //   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

// //   const theme = useDarkModeStore((state) => state.theme);
// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
// //   const customTheme = useDarkModeStore((state) => state.customTheme); // ✅ added

// //   // Company dropdown state
// //   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
// //   const [selectedCompany, setSelectedCompany] = useState("ULTIMATE");
// //   const [orderedCompanies, setOrderedCompanies] = useState([
// //     "ULTIMATE",
// //     "GUARDIAN",
// //     "SAFEWATCH",
// //   ]);

// //   const dropdownRef = useRef<HTMLDivElement>(null);

// //   // Logos
// //   const companyLogos: Record<string, string> = {
// //     ULTIMATE: "/ultimatesecurity2.png",
// //     GUARDIAN: "/guardian_global1.png",
// //     SAFEWATCH: "/Safewatch2_logo.png",
// //   };

// //   const companySigns: Record<string, string> = {
// //     ULTIMATE:
// //       effectiveTheme === "dark" || effectiveTheme === "night"
// //         ? "/logo_white.png"
// //         : "/logo_color1.png",
// //     GUARDIAN: "/logo_color1.png",
// //     SAFEWATCH: "/logo_color1.png",
// //   };

// //   // Click outside dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
// //         setIsCompanyDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     setOrderedCompanies([
// //       selectedCompany,
// //       ...orderedCompanies.filter((c) => c !== selectedCompany),
// //     ]);
// //   }, []);

// //   // Determine sidebar background
// //   const sidebarBg =
// //     theme === "custom"
// //       ? customTheme.sidebar.background
// //       : effectiveTheme === "light"
// //       ? "#235e8b"
// //       : effectiveTheme === "dark"
// //       ? "#0f2739"
// //       : effectiveTheme === "night"
// //       ? "#0f0f0f"
// //       : "#235e8b";

// //   const sidebarText =
// //     theme === "custom"
// //       ? customTheme.sidebar.text
// //       : effectiveTheme === "light"
// //       ? "#ffffff"
// //       : "#ffffff";

// //   const sidebarButtonBg =
// //     theme === "custom"
// //       ? customTheme.sidebar.button
// //       : "rgba(237, 237, 237, 0.5)";

// //   return (
// //     <aside
// //       className={row-span-2 flex flex-col transition-all duration-300}
// //       style={{ backgroundColor: sidebarBg, color: sidebarText }}
// //     >
// //       {/* Company Logo */}
// //       <div
// //         ref={dropdownRef}
// //         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
// //         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
// //       >
// //         <img
// //           src={isCollapsed ? companySigns[selectedCompany] : companyLogos[selectedCompany]}
// //           alt={${selectedCompany} Logo}
// //           className={`object-contain transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[500px] h-[45px]"
// //           }`}
// //         />
// //         {!isCollapsed && (
// //           <i
// //             className={`fas fa-chevron-down absolute bottom-3 right-1 text-xs transition-transform duration-300 ${
// //               isCompanyDropdownOpen ? "rotate-180" : ""
// //             }`}
// //           />
// //         )}
// //         {/* Dropdown list */}
// //         {isCompanyDropdownOpen && !isCollapsed && (
// //           <div
// //             className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
// //             style={{
// //               backgroundColor:
// //                 theme === "custom"
// //                   ? customTheme.sidebar.background
// //                   : effectiveTheme === "light"
// //                   ? "#625d5d"
// //                   : effectiveTheme === "dark"
// //                   ? "#8e8e8e"
// //                   : effectiveTheme === "night"
// //                   ? "#312f2f"
// //                   : "#ccc",
// //               color: sidebarText,
// //             }}
// //           >
// //             {orderedCompanies.map((company) => (
// //               <div
// //                 key={company}
// //                 className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
// //                 onClick={() => {
// //                   setSelectedCompany(company);
// //                   setIsCompanyDropdownOpen(false);
// //                 }}
// //               >
// //                 {company}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Sidebar Menu */}
// //       <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
// //         <SidebarMenu
// //           pages={menuPages || []}
// //           isCollapsed={isCollapsed}
// //           customTheme={theme === "custom" ? customTheme.sidebar : undefined} // pass colors to menu items
// //         />
// //       </div>

// //       {/* Collapse Button */}
// //       <div className="mt-auto flex flex-col gap-3">
// //         <button
// //           className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
// //           }`}
// //           onClick={() => setIsCollapsed((prev) => !prev)}
// //           style={{
// //             backgroundColor: sidebarButtonBg,
// //             color: sidebarText,
// //           }}
// //         >
// //           {isCollapsed ? (
// //             <i className="fas fa-angle-right"></i>
// //           ) : (
// //             <>
// //               <span className="text-sm font-medium mr-2">Collapse Menu</span>
// //               <i className="fas fa-angle-left"></i>
// //             </>
// //           )}
// //         </button>
// //       </div>

// //       <SidebarFooter />
// //     </aside>
// //   );
// // };

// // export default Sidebar;
// // import SidebarMenu from "./SidebarMenu";
// // import SidebarFooter from "./SidebarFooter";
// // import { useSidebarContext } from "../../Context/SidebarContext";
// // import { useEffect, useRef, useState } from "react";
// // import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// // const Sidebar: React.FC = () => {
// //   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

// //   const theme = useDarkModeStore((state) => state.theme);
// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
// //   const customTheme = useDarkModeStore((state) => state.customTheme); // ✅ added

// //   // Company dropdown state
// //   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
// //   const [selectedCompany, setSelectedCompany] = useState("ULTIMATE");
// //   const [orderedCompanies, setOrderedCompanies] = useState([
// //     "ULTIMATE",
// //     "GUARDIAN",
// //     "SAFEWATCH",
// //   ]);

// //   const dropdownRef = useRef<HTMLDivElement>(null);

// //   // Logos
// //   const companyLogos: Record<string, string> = {
// //     ULTIMATE: "/ultimatesecurity2.png",
// //     GUARDIAN: "/guardian_global1.png",
// //     SAFEWATCH: "/Safewatch2_logo.png",
// //   };

// //   const companySigns: Record<string, string> = {
// //     ULTIMATE:
// //       effectiveTheme === "dark" || effectiveTheme === "night"
// //         ? "/logo_white.png"
// //         : "/logo_color1.png",
// //     GUARDIAN: "/logo_color1.png",
// //     SAFEWATCH: "/logo_color1.png",
// //   };

// //   // Click outside dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
// //         setIsCompanyDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     setOrderedCompanies([
// //       selectedCompany,
// //       ...orderedCompanies.filter((c) => c !== selectedCompany),
// //     ]);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   // Determine sidebar colors
// //   const sidebarBg =
// //     theme === "custom"
// //       ? customTheme.sidebar.background
// //       : effectiveTheme === "light"
// //       ? "#235e8b"
// //       : effectiveTheme === "dark"
// //       ? "#0f2739"
// //       : effectiveTheme === "night"
// //       ? "#0f0f0f"
// //       : "#235e8b";

// //   const sidebarText =
// //     theme === "custom"
// //       ? customTheme.sidebar.text
// //       : "#ffffff";

// //   const sidebarButtonBg =
// //     theme === "custom"
// //       ? customTheme.sidebar.button
// //       : "rgba(237, 237, 237, 0.5)";

// //   return (
// //     <aside
// //       className="row-span-2 flex flex-col transition-all duration-300"
// //       style={{ backgroundColor: sidebarBg, color: sidebarText }}
// //     >
// //       {/* Company Logo */}
// //       <div
// //         ref={dropdownRef}
// //         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
// //         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
// //       >
// //         <img
// //           src={isCollapsed ? companySigns[selectedCompany] : companyLogos[selectedCompany]}
// //           alt={`${selectedCompany} Logo`}
// //           className={`object-contain transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[500px] h-[45px]"
// //           }`}
// //         />
// //         {!isCollapsed && (
// //           <i
// //             className={`fas fa-chevron-down absolute bottom-3 right-1 text-xs transition-transform duration-300 ${
// //               isCompanyDropdownOpen ? "rotate-180" : ""
// //             }`}
// //           />
// //         )}

// //         {/* Dropdown list */}
// //         {isCompanyDropdownOpen && !isCollapsed && (
// //           <div
// //             className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
// //             style={{
// //               backgroundColor:
// //                 theme === "custom"
// //                   ? customTheme.sidebar.background
// //                   : effectiveTheme === "light"
// //                   ? "#625d5d"
// //                   : effectiveTheme === "dark"
// //                   ? "#8e8e8e"
// //                   : effectiveTheme === "night"
// //                   ? "#312f2f"
// //                   : "#ccc",
// //               color: sidebarText,
// //             }}
// //           >
// //             {orderedCompanies.map((company) => (
// //               <div
// //                 key={company}
// //                 className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
// //                 onClick={() => {
// //                   setSelectedCompany(company);
// //                   setIsCompanyDropdownOpen(false);
// //                 }}
// //               >
// //                 {company}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Sidebar Menu */}
// //       <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
// //         <SidebarMenu
// //           pages={menuPages || []}
// //           isCollapsed={isCollapsed}
// //           customTheme={theme === "custom" ? customTheme.sidebar : undefined} // pass colors to menu items
// //         />
// //       </div>

// //       {/* Collapse Button */}
// //       <div className="mt-auto flex flex-col gap-3">
// //         <button
// //           className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
// //             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
// //           }`}
// //           onClick={() => setIsCollapsed((prev) => !prev)}
// //           style={{
// //             backgroundColor: sidebarButtonBg,
// //             color: sidebarText,
// //           }}
// //         >
// //           {isCollapsed ? (
// //             <i className="fas fa-angle-right"></i>
// //           ) : (
// //             <>
// //               <span className="text-sm font-medium mr-2">Collapse Menu</span>
// //               <i className="fas fa-angle-left"></i>
// //             </>
// //           )}
// //         </button>
// //       </div>

// //       <SidebarFooter />
// //     </aside>
// //   );
// // };

// // export default Sidebar;
// import SidebarMenu from "./SidebarMenu";
// import SidebarFooter from "./SidebarFooter";
// import { useSidebarContext } from "../../Context/SidebarContext";
// import { useEffect, useRef, useState } from "react";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// const Sidebar: React.FC = () => {
//   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Sidebar styles from store
//   const { sidebarBg, sidebarText, sidebarBtn, sidebarDropdown } =
//     useDarkModeStore((s) => s.styles);

//   // Company dropdown state
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [selectedCompany, setSelectedCompany] = useState("ULTIMATE");
//   const [orderedCompanies, setOrderedCompanies] = useState([
//     "ULTIMATE",
//     "GUARDIAN",
//     "SAFEWATCH",
//   ]);

//   // Logos
//   const companyLogos: Record<string, string> = {
//     ULTIMATE: "/ultimatesecurity2.png",
//     GUARDIAN: "/guardian_global1.png",
//     SAFEWATCH: "/Safewatch2_logo.png",
//   };

//   const companySigns: Record<string, string> = {
//     ULTIMATE: "/logo_white.png",
//     GUARDIAN: "/logo_color1.png",
//     SAFEWATCH: "/logo_color1.png",
//   };

//   // Click outside dropdown
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsCompanyDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Reorder companies so selected is first
//   useEffect(() => {
//     setOrderedCompanies([
//       selectedCompany,
//       ...orderedCompanies.filter((c) => c !== selectedCompany),
//     ]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <aside
//       className="row-span-2 flex flex-col transition-all duration-300"
//       style={{ backgroundColor: sidebarBg, color: sidebarText }}
//     >
//       {/* Company Logo */}
//       <div
//         ref={dropdownRef}
//         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
//         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
//       >
//         <img
//           src={
//             isCollapsed
//               ? companySigns[selectedCompany]
//               : companyLogos[selectedCompany]
//           }
//           alt={`${selectedCompany} Logo`}
//           className={`object-contain transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[500px] h-[45px]"
//           }`}
//         />
//         {!isCollapsed && (
//           <i
//             className={`fas fa-chevron-down absolute bottom-3 right-1 text-xs transition-transform duration-300 ${
//               isCompanyDropdownOpen ? "rotate-180" : ""
//             }`}
//           />
//         )}

//         {/* Dropdown list */}
//         {isCompanyDropdownOpen && !isCollapsed && (
//           <div
//             className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
//             style={{
//               backgroundColor: sidebarDropdown,
//               color: sidebarText,
//             }}
//           >
//             {orderedCompanies.map((company) => (
//               <div
//                 key={company}
//                 className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
//                 onClick={() => {
//                   setSelectedCompany(company);
//                   setIsCompanyDropdownOpen(false);
//                 }}
//               >
//                 {company}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Sidebar Menu */}
//       <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
//         <SidebarMenu
//           pages={menuPages || []}
//           isCollapsed={isCollapsed}
//           customTheme={{
//             background: sidebarBg,
//             text: sidebarText,
//             button: sidebarBtn,
//           }}
//         />
//       </div>

//       {/* Collapse Button */}
//       <div className="mt-auto flex flex-col gap-3">
//         <button
//           className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
//           }`}
//           onClick={() => setIsCollapsed((prev) => !prev)}
//           style={{
//             backgroundColor: sidebarBtn,
//             color: sidebarText,
//           }}
//         >
//           {isCollapsed ? (
//             <i className="fas fa-angle-right"></i>
//           ) : (
//             <>
//               <span className="text-sm font-medium mr-2">Collapse Menu</span>
//               <i className="fas fa-angle-left"></i>
//             </>
//           )}
//         </button>
//       </div>

//       <SidebarFooter />
//     </aside>
//   );
// };

// export default Sidebar;
// import SidebarMenu from "./SidebarMenu";
// import SidebarFooter from "./SidebarFooter";
// import { useSidebarContext } from "../../Context/SidebarContext";
// import { useEffect, useRef, useState } from "react";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// const Sidebar: React.FC = () => {
//   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

//   // --------------------
//   // Get theme & precomputed styles
//   // --------------------
//   const styles = useDarkModeStore((state) => state.styles);
//   const theme = useDarkModeStore((state) => state.theme);
//   const customTheme = useDarkModeStore((state) => state.customTheme);
//   const customCompanyLogos = useDarkModeStore((s) => s.customCompanyLogos);
//   // --------------------
//   // Company dropdown
//   // --------------------
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [selectedCompany, setSelectedCompany] = useState("SECURECY");
//   const [orderedCompanies, setOrderedCompanies] = useState([
//     "SECURECY",
//     "GUARDIAN",
//     "SAFEWATCH",
//   ]);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const companyLogos: Record<string, string> = {
//     SECURECY: "/logo_white copy.png",
//     GUARDIAN: "/guardian_global1.png",
//     SAFEWATCH: "/Safewatch2_logo.png",
//   };

//   const companySigns: Record<string, string> = {
//     SECURECY: "/logo_color1.png",
//     GUARDIAN: "/logo_color1.png",
//     SAFEWATCH: "/logo_color1.png",
//   };

//   // --------------------
//   // Handle clicks outside dropdown
//   // --------------------
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsCompanyDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // --------------------
//   // Order companies
//   // --------------------
//   useEffect(() => {
//     setOrderedCompanies([
//       selectedCompany,
//       ...orderedCompanies.filter((c) => c !== selectedCompany),
//     ]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <aside
//       className="row-span-2 flex flex-col transition-all duration-300"
//       style={{
//         backgroundColor: styles.sidebarBg,
//         color: styles.sidebarText,
//       }}
//     >
//       {/* Company Logo */}
//       <div
//         ref={dropdownRef}
//         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
//         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
//       >
//         <img
//           src={
//             isCollapsed
//               ? companySigns[selectedCompany]
//               : companyLogos[selectedCompany]
//           }
//           alt={`${selectedCompany} Logo`}
//           className={`object-contain transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[400px] h-[35px]"
//           }`}
//         />
//         {!isCollapsed && (
//           <i
//             className={`fas fa-chevron-down absolute bottom-2 opacity-70  right-4 text-xs transition-transform duration-300 ${
//               isCompanyDropdownOpen ? "rotate-180" : ""
//             }`}
//           />
//         )}

//         {/* Dropdown list */}
//         {isCompanyDropdownOpen && !isCollapsed && (
//           <div
//             className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
//             style={{
//               backgroundColor: styles.sidebarBg,
//               color: styles.sidebarText,
//             }}
//           >
//             {orderedCompanies.map((company) => (
//               <div
//                 key={company}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
//                 onClick={() => {
//                   setSelectedCompany(company);
//                   setIsCompanyDropdownOpen(false);
//                 }}
//               >
//                 <img
//                   src={companyLogos[company]}
//                   alt={`${company} logo`}
//                   className="w-24 h-auto object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Sidebar Menu */}
//       <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
//         <SidebarMenu
//           pages={menuPages || []}
//           isCollapsed={isCollapsed}
//           customTheme={{
//             background: styles.sidebarBg,
//             text: styles.sidebarText,
//             button: styles.sidebarBtn,
//             hover: styles.sidebarHover,
//           }}
//         />
//       </div>

//       {/* Collapse Button */}
//       <div className="mt-auto flex flex-col gap-3">
//         <button
//           className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
//           }`}
//           onClick={() => setIsCollapsed((prev) => !prev)}
//           style={{
//             backgroundColor: styles.sidebarBtn,
//             color: styles.sidebarText,
//           }}
//         >
//           {isCollapsed ? (
//             <i className="fas fa-angle-right"></i>
//           ) : (
//             <>
//               <span className="text-sm font-medium mr-2">Collapse Menu</span>
//               <i className="fas fa-angle-left"></i>
//             </>
//           )}
//         </button>
//       </div>

//       <SidebarFooter />
//     </aside>
//   );
// };

// export default Sidebar;
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useEffect, useRef, useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

const Sidebar: React.FC = () => {
  const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

  // --------------------
  // Get theme & precomputed styles
  // --------------------
  const styles = useDarkModeStore((state) => state.styles);

  // --------------------
  // Company dropdown
  // --------------------
  // const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  // const [selectedCompany, setSelectedCompany] = useState("SECURECY");
  // const [orderedCompanies, setOrderedCompanies] = useState([
  //   "SECURECY",
  //   "GUARDIAN",
  //   "SAFEWATCH",
  // ]);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // const companyLogos: Record<string, string> = {
  //   SECURECY: "/Layer 1.png",
  //   GUARDIAN: "/guardian_global1.png",
  //   SAFEWATCH: "/Safewatch2_logo.png",
  // };

  // const companySigns: Record<string, string> = {
  //   SECURECY: "/Group 2147225115.png",
  //   GUARDIAN: "/Group 2147225115.png",
  //   SAFEWATCH: "/Group 2147225115.png",
  // };

  // --------------------
  // Handle clicks outside dropdown
  // --------------------
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsCompanyDropdownOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // // --------------------
  // // Order companies
  // // --------------------
  // useEffect(() => {
  //   setOrderedCompanies([
  //     selectedCompany,
  //     ...orderedCompanies.filter((c) => c !== selectedCompany),
  //   ]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <aside
      className="row-span-2 flex flex-col transition-all duration-300"
      style={{
        backgroundColor: styles.sidebarBg,
        color: styles.sidebarText,
      }}
    >
      {/* Company Logo}
      <div
        ref={dropdownRef}
        className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
        onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
      >
        <img
          src={
            isCollapsed
              ? companySigns[selectedCompany]
              : companyLogos[selectedCompany]
          }
          alt={`${selectedCompany} Logo`}
          className={`object-contain transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[400px] h-[35px]"
          }`}
        />
        {!isCollapsed && (
          <i
            className={`fas fa-chevron-down absolute bottom-2 opacity-70  right-4 text-xs transition-transform duration-300 ${
              isCompanyDropdownOpen ? "rotate-180" : ""
            }`}
          />
        )}

        {/* Dropdown list */}
      {/* {isCompanyDropdownOpen && !isCollapsed && (
          <div
            className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
            style={{
              backgroundColor: styles.sidebarBg,
              color: styles.sidebarText,
            }}
          >
            {orderedCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedCompany(company);
                  setIsCompanyDropdownOpen(false);
                }}
              >
                <img
                  src={companyLogos[company]}
                  alt={`${company} logo`}
                  className="w-24 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div> */}
      {/* Company Logo (Static SECURECY Only) */}
      {/* <div
        className="relative px-3 py-1 flex mb-2 justify-start select-none"
        style={{ cursor: "default" }}
      >
        <img
          src={isCollapsed ? "/Group 2147225115.png" : "/Layer 1.png"}
          alt="SECURECY Logo"
          className={`object-contain transition-all duration-300 mt-2.5 ${
            isCollapsed ? "w-10 h-10" : "w-[400px] h-[35px]"
          }`}
        />
      </div> */}
      <div
        className={`flex items-center justify-center ml-0.5 transition-all duration-300 ${
          isCollapsed ? "h-[7.5vh]" : "h-[7.5vh]"
        }`}
        style={{ cursor: "default" }}
      >
        <img
          src={isCollapsed ? "/Group 2147225115.png" : "/Layer 1.png"}
          alt="SECURECY Logo"
          className={`object-contain transition-all duration-300 ${
            isCollapsed
              ? "w-8   h-8 mt-[0%] mb-[3%] "
              : "w-[190px] h-[35px] mt-[1%] mb-[4%] "
          }`}
        />
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        <SidebarMenu
          pages={menuPages || []}
          isCollapsed={isCollapsed}
          customTheme={{
            background: styles.sidebarBg,
            text: styles.sidebarText,
            button: styles.sidebarBtn,
            hover: styles.sidebarHover,
          }}
        />
      </div>

      {/* Collapse Button */}
      <div className="mt-auto flex flex-col gap-3">
        <button
          className={`flex items-center justify-center  rounded-md mx-auto transition-all duration-300 ${
            isCollapsed ? "w-10 h-10" : "w-[180px] h-[34px] py-3 px-4"
          }`}
          onClick={() => setIsCollapsed((prev) => !prev)}
          style={{
            backgroundColor: styles.sidebarBtn,
            color: styles.collapseSidebarBtnText,
          }}
        >
          {/* {isCollapsed ? (
            <i className="fas fa-angle-right"></i>
          ) : (
            <>
              <span className="text-sm font-medium mr-2">Collapse Menu</span>
              <i className="fas fa-angle-left"></i>
            </>
          )} */}
          {isCollapsed ? (
            <IconChevronsRight size={18} stroke={1.5} />
          ) : (
            <>
              <span className="text-sm font-medium mr-2">Collapse Menu</span>
              <IconChevronsLeft size={18} stroke={1.5} />
            </>
          )}
        </button>
      </div>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
// import SidebarMenu from "./SidebarMenu";
// import SidebarFooter from "./SidebarFooter";
// import { useSidebarContext } from "../../Context/SidebarContext";
// import { useEffect, useRef, useState } from "react";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore"; // zustand store

// const Sidebar: React.FC = () => {
//   const { isCollapsed, setIsCollapsed, menuPages } = useSidebarContext();

//   // --------------------
//   // Get theme & precomputed styles
//   // --------------------
//   const styles = useDarkModeStore((state) => state.styles);
//   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
//   const customCompanyLogos = useDarkModeStore((s) => s.customCompanyLogos);

//   // --------------------
//   // Company dropdown
//   // --------------------
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [selectedCompany, setSelectedCompany] = useState("SECURECY");
//   const [orderedCompanies, setOrderedCompanies] = useState([
//     "SECURECY",
//     "GUARDIAN",
//     "SAFEWATCH",
//   ]);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // --------------------
//   // Company logos (dynamic from Zustand)
//   // --------------------
//   const companyLogos: Record<string, string> = {
//     SECURECY:
//       (effectiveTheme === "dark"
//         ? customCompanyLogos.SECURECY?.dark
//         : customCompanyLogos.SECURECY?.light) || "/logo_white copy.png",
//     GUARDIAN:
//       (effectiveTheme === "dark"
//         ? customCompanyLogos.GUARDIAN?.dark
//         : customCompanyLogos.GUARDIAN?.light) || "/guardian_global1.png",
//     SAFEWATCH:
//       (effectiveTheme === "dark"
//         ? customCompanyLogos.SAFEWATCH?.dark
//         : customCompanyLogos.SAFEWATCH?.light) || "/Safewatch2_logo.png",
//   };

//   const companySigns: Record<string, string> = {
//     SECURECY: "/logo_color1.png",
//     GUARDIAN: "/logo_color1.png",
//     SAFEWATCH: "/logo_color1.png",
//   };

//   // --------------------
//   // Handle clicks outside dropdown
//   // --------------------
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsCompanyDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // --------------------
//   // Order companies
//   // --------------------
//   useEffect(() => {
//     setOrderedCompanies([
//       selectedCompany,
//       ...orderedCompanies.filter((c) => c !== selectedCompany),
//     ]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <aside
//       className="row-span-2 flex flex-col transition-all duration-300"
//       style={{
//         backgroundColor: styles.sidebarBg,
//         color: styles.sidebarText,
//       }}
//     >
//       {/* Company Logo */}
//       <div
//         ref={dropdownRef}
//         className="relative px-3 py-1 flex mb-2 justify-start cursor-pointer"
//         onClick={() => setIsCompanyDropdownOpen((prev) => !prev)}
//       >
//         <img
//           src={
//             isCollapsed
//               ? companySigns[selectedCompany]
//               : companyLogos[selectedCompany]
//           }
//           alt={`${selectedCompany} Logo`}
//           className={`object-contain transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[400px] h-[35px]"
//           }`}
//         />
//         {!isCollapsed && (
//           <i
//             className={`fas fa-chevron-down absolute bottom-2 opacity-70 right-4 text-xs transition-transform duration-300 ${
//               isCompanyDropdownOpen ? "rotate-180" : ""
//             }`}
//           />
//         )}

//         {/* Dropdown list */}
//         {isCompanyDropdownOpen && !isCollapsed && (
//           <div
//             className="absolute top-full mt-2 w-[200px] shadow-lg rounded-md z-50"
//             style={{
//               backgroundColor: styles.sidebarBg,
//               color: styles.sidebarText,
//             }}
//           >
//             {orderedCompanies.map((company) => (
//               <div
//                 key={company}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
//                 onClick={() => {
//                   setSelectedCompany(company);
//                   setIsCompanyDropdownOpen(false);
//                 }}
//               >
//                 <img
//                   src={companyLogos[company]}
//                   alt={`${company} logo`}
//                   className="w-24 h-auto object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Sidebar Menu */}
//       <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
//         <SidebarMenu
//           pages={menuPages || []}
//           isCollapsed={isCollapsed}
//           customTheme={{
//             background: styles.sidebarBg,
//             text: styles.sidebarText,
//             button: styles.sidebarBtn,
//             hover: styles.sidebarHover,
//           }}
//         />
//       </div>

//       {/* Collapse Button */}
//       <div className="mt-auto flex flex-col gap-3">
//         <button
//           className={`flex items-center justify-center rounded-md mx-auto transition-all duration-300 ${
//             isCollapsed ? "w-10 h-10" : "w-[80%] py-3 px-4"
//           }`}
//           onClick={() => setIsCollapsed((prev) => !prev)}
//           style={{
//             backgroundColor: styles.sidebarBtn,
//             color: styles.sidebarText,
//           }}
//         >
//           {isCollapsed ? (
//             <i className="fas fa-angle-right"></i>
//           ) : (
//             <>
//               <span className="text-sm font-medium mr-2">Collapse Menu</span>
//               <i className="fas fa-angle-left"></i>
//             </>
//           )}
//         </button>
//       </div>

//       <SidebarFooter />
//     </aside>
//   );
// };

// export default Sidebar;
