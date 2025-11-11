// // import React, { useEffect, useRef, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import type { Page } from "../../Types/Page";
// // import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// // interface SidebarMenuItemProps {
// //   page: Page;
// //   isCollapsed: boolean;
// //   isChild?: boolean;
// //   childrenMap?: Record<number, Page[]>;
// //   expandedMap: Record<number, boolean>;
// //   onToggleExpand: (id: number) => void;
// //   level?: number;
// // }

// // const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
// //   page,
// //   isCollapsed,
// //   isChild = false,
// //   childrenMap,
// //   expandedMap,
// //   onToggleExpand,
// //   level = 0,
// // }) => {
// //   const location = useLocation();
// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
// //   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

// //   const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
// //   const isExpanded = expandedMap[page.id] || false;

// //   const [isHovered, setIsHovered] = useState(false);
// //   const [isPopupOpen, setIsPopupOpen] = useState(false);
// //   const triggerRef = useRef<HTMLAnchorElement | null>(null);
// //   const popupRef = useRef<HTMLDivElement | null>(null);
// //   const [coords, setCoords] = useState<{ left: number; top: number } | null>(
// //     null
// //   );

// //   // Update popup position
// //   const updateCoords = () => {
// //     const rect = triggerRef.current?.getBoundingClientRect();
// //     if (!rect) return;
// //     setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
// //   };

// //   // Close popup when mouse leaves both trigger & popup
// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       if (
// //         !popupRef.current ||
// //         !triggerRef.current ||
// //         popupRef.current.contains(e.target as Node) ||
// //         triggerRef.current.contains(e.target as Node)
// //       )
// //         return;
// //       setIsPopupOpen(false);
// //     };
// //     document.addEventListener("mousemove", handleMouseMove);
// //     return () => document.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const isActive =
// //     location.pathname === page.path ||
// //     (page.path !== "/" && location.pathname.startsWith(page.path));

// //   const activeClasses = isActive
// //     ? isChild
// //       ? "text-white font-bold"
// //       : `${
// //           isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
// //         } font-medium mx-2 rounded-md px-2`
// //     : isDarkMode
// //     ? "text-white hover:bg-gray-600/30"
// //     : "text-white hover:bg-white/10";

// //   return (
// //     <div
// //       className="relative"
// //       onMouseEnter={() => {
// //         if (isCollapsed && hasChildren) {
// //           setIsPopupOpen(true);
// //           updateCoords();
// //         }
// //       }}
// //       onMouseLeave={() => {
// //         if (isCollapsed) setIsPopupOpen(false);
// //       }}
// //     >
// //       <Link
// //         ref={triggerRef}
// //         to={page.path}
// //         className={`group flex items-center rounded transition-colors ${
// //           isChild ? "border-b border-gray-600" : "border-b border-gray-400/40"
// //         } ${activeClasses}`}
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //         onClick={(e) => {
// //           if (hasChildren) {
// //             e.preventDefault();
// //             onToggleExpand(page.id);
// //             if (isCollapsed) setIsPopupOpen((prev) => !prev);
// //           }
// //         }}
// //         style={
// //           isChild
// //             ? { padding: "3px 15px" }
// //             : isCollapsed
// //             ? { padding: "11px 12px" }
// //             : { padding: "7px 15px" }
// //         }
// //       >
// //         {isChild ? (
// //           <span className="w-6 text-center text-gray-400">
// //             {isHovered ? (
// //               <i
// //                 className="fas fa-caret-right text-gray-300"
// //                 style={{ fontSize: "12px" }}
// //               ></i>
// //             ) : (
// //               "-"
// //             )}
// //           </span>
// //         ) : (
// //           <div
// //             className={`flex items-center
// //             }`}
// //           >
// //             <i className={`${page.icon} w-4 text-sm`}></i>
// //           </div>
// //         )}
// //         {!isCollapsed && (
// //           <span className="ml-2 text-[13.5px]">{page.name}</span>
// //         )}
// //         {!isCollapsed && hasChildren && (
// //           <i
// //             className={`fas ${
// //               isExpanded ? "fa-chevron-up" : "fa-chevron-down"
// //             } ml-auto text-xs opacity-70 transition-transform duration-300`}
// //           ></i>
// //         )}
// //       </Link>

// //       {/* Collapsed sidebar popup */}
// //       {isCollapsed && isPopupOpen && coords && hasChildren && (
// //         <div
// //           ref={popupRef}
// //           style={{
// //             position: "fixed",
// //             left: `${coords.left}px`,
// //             top: `${coords.top}px`,
// //             minWidth: "160px",
// //             maxHeight: "300px",
// //             overflowY: "auto",
// //           }}
// //           className="z-40 shadow-lg bg-[#235e8b] p-2"
// //         >
// //           {childrenMap?.[page.id]?.map((child) => (
// //             <SidebarMenuItem
// //               key={child.id}
// //               page={child}
// //               isChild={true}
// //               isCollapsed={false} // style like expanded
// //               childrenMap={childrenMap}
// //               expandedMap={expandedMap}
// //               onToggleExpand={onToggleExpand}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* Expanded children in main sidebar */}
// //       {!isCollapsed && hasChildren && isExpanded && (
// //         <div className="ml-4 relative  ">
// //           {/* Vertical line */}
// //           {level === 0 && (
// //             <div
// //               className="absolute left-5.5 top-0 bottom-0 w-[2px] bg-white/40"
// //               style={{ borderRadius: "1px" }}
// //             />
// //           )}
// //           {childrenMap?.[page.id]?.map((child) => (
// //             <SidebarMenuItem
// //               key={child.id}
// //               page={child}
// //               isChild={true}
// //               isCollapsed={false}
// //               childrenMap={childrenMap}
// //               expandedMap={expandedMap}
// //               onToggleExpand={onToggleExpand}
// //               level={level + 1}
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SidebarMenuItem;
// // import React, { useEffect, useRef, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import type { Page } from "../../Types/Page";
// // import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// // interface SidebarMenuItemProps {
// //   page: Page;
// //   isCollapsed: boolean;
// //   isChild?: boolean;
// //   childrenMap?: Record<number, Page[]>;
// //   expandedMap: Record<number, boolean>;
// //   onToggleExpand: (id: number) => void;
// // }

// // const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
// //   page,
// //   isCollapsed,
// //   isChild = false,
// //   childrenMap,
// //   expandedMap,
// //   onToggleExpand,
// // }) => {
// //   const location = useLocation();
// //   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
// //   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

// //   const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
// //   const isExpanded = expandedMap[page.id] || false;

// //   const [isHovered, setIsHovered] = useState(false);
// //   const [isPopupOpen, setIsPopupOpen] = useState(false);
// //   const triggerRef = useRef<HTMLAnchorElement | null>(null);
// //   const popupRef = useRef<HTMLDivElement | null>(null);
// //   const [coords, setCoords] = useState<{ left: number; top: number } | null>(
// //     null
// //   );

// //   // Update popup position
// //   const updateCoords = () => {
// //     const rect = triggerRef.current?.getBoundingClientRect();
// //     if (!rect) return;
// //     setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
// //   };

// //   // Close popup when mouse leaves both trigger & popup
// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       if (
// //         !popupRef.current ||
// //         !triggerRef.current ||
// //         popupRef.current.contains(e.target as Node) ||
// //         triggerRef.current.contains(e.target as Node)
// //       )
// //         return;
// //       setIsPopupOpen(false);
// //     };
// //     document.addEventListener("mousemove", handleMouseMove);
// //     return () => document.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const isActive =
// //     location.pathname === page.path ||
// //     (page.path !== "/" && location.pathname.startsWith(page.path));

// //   const activeClasses = isActive
// //     ? isChild
// //       ? `text-white font-bold ${
// //           isCollapsed ? "flex justify-center items-center" : ""
// //         }`
// //       : `${
// //           isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
// //         } font-medium mx-2 rounded-md px-2 ${
// //           isCollapsed ? "flex justify-center items-center" : ""
// //         }`
// //     : isDarkMode
// //     ? `text-white hover:bg-gray-600/30 ${
// //         isCollapsed ? "flex justify-center items-center" : ""
// //       }`
// //     : `text-white hover:bg-white/10 ${
// //         isCollapsed ? "flex justify-center items-center" : ""
// //       }`;

// //   return (
// //     <div
// //       className="relative"
// //       onMouseEnter={() => {
// //         if (isCollapsed && hasChildren) {
// //           setIsPopupOpen(true);
// //           updateCoords();
// //         }
// //       }}
// //       onMouseLeave={() => {
// //         if (isCollapsed) setIsPopupOpen(false);
// //       }}
// //     >
// //       <Link
// //         ref={triggerRef}
// //         to={page.path}
// //         className={`group flex w-full items-center rounded transition-colors ${
// //           isChild ? "border-b border-gray-600" : "border-b border-gray-400/40"
// //         } ${activeClasses}`}
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //         onClick={(e) => {
// //           if (hasChildren) {
// //             e.preventDefault();
// //             onToggleExpand(page.id);
// //             if (isCollapsed) setIsPopupOpen((prev) => !prev);
// //           }
// //         }}
// //         style={
// //           isChild
// //             ? { padding: "3px 15px" }
// //             : isCollapsed
// //             ? { padding: "11px 12px" }
// //             : { padding: "7px 15px" }
// //         }
// //       >
// //         {isChild ? (
// //           <span className="w-6 text-center text-gray-400">
// //             {isHovered ? (
// //               <i
// //                 className="fas fa-caret-right text-gray-300"
// //                 style={{ fontSize: "12px" }}
// //               ></i>
// //             ) : (
// //               "-"
// //             )}
// //           </span>
// //         ) : (
// //           <div className="flex items-center">
// //             <i className={`${page.icon} w-4 text-sm`}></i>
// //           </div>
// //         )}
// //         {!isCollapsed && (
// //           <span className="ml-2 text-[13.5px]">{page.name}</span>
// //         )}
// //         {!isCollapsed && hasChildren && (
// //           <i
// //             className={`fas ${
// //               isExpanded ? "fa-chevron-up" : "fa-chevron-down"
// //             } ml-auto text-xs opacity-70 transition-transform duration-300`}
// //           ></i>
// //         )}
// //       </Link>

// //       {/* Collapsed sidebar popup */}
// //       {isCollapsed && isPopupOpen && coords && hasChildren && (
// //         <div
// //           ref={popupRef}
// //           style={{
// //             position: "fixed",
// //             left: `${coords.left}px`,
// //             top: `${coords.top}px`,
// //             minWidth: "160px",
// //             maxHeight: "300px",
// //             overflowY: "auto",
// //           }}
// //           className="z-40 shadow-lg bg-[#235e8b] p-2"
// //         >
// //           {childrenMap?.[page.id]?.map((child) => (
// //             <SidebarMenuItem
// //               key={child.id}
// //               page={child}
// //               isChild={true}
// //               isCollapsed={false} // style like expanded
// //               childrenMap={childrenMap}
// //               expandedMap={expandedMap}
// //               onToggleExpand={onToggleExpand}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* Expanded children in main sidebar */}
// //       {!isCollapsed && hasChildren && isExpanded && (
// //         <div className="relative w-full">
// //           {/* Only add vertical line for direct children, not nested children */}
// //           {!isChild && (
// //             <div className="absolute left-5.5 top-0 bottom-0 w-[2px] bg-white/20" />
// //           )}

// //           <div className="flex flex-col">
// //             {childrenMap?.[page.id]?.map((child) => (
// //               <div key={child.id} className="w-full">
// //                 <SidebarMenuItem
// //                   page={child}
// //                   isChild={true}
// //                   isCollapsed={false}
// //                   childrenMap={childrenMap}
// //                   expandedMap={expandedMap}
// //                   onToggleExpand={onToggleExpand}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SidebarMenuItem;

// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import type { Page } from "../../Types/Page";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface SidebarMenuItemProps {
//   page: Page;
//   isCollapsed: boolean;
//   isChild?: boolean;
//   childrenMap?: Record<number, Page[]>;
//   expandedMap: Record<number, boolean>;
//   onToggleExpand: (id: number) => void;
//   level?: number; // <-- depth of the item
// }

// const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
//   page,
//   isCollapsed,
//   isChild = false,
//   childrenMap,
//   expandedMap,
//   onToggleExpand,
//   level = 0, // default root level
// }) => {
//   const location = useLocation();
//   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
//   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

//   const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
//   const isExpanded = expandedMap[page.id] || false;

//   const [isHovered, setIsHovered] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const triggerRef = useRef<HTMLAnchorElement | null>(null);
//   const popupRef = useRef<HTMLDivElement | null>(null);
//   const [coords, setCoords] = useState<{ left: number; top: number } | null>(
//     null
//   );

//   // Update popup position
//   const updateCoords = () => {
//     const rect = triggerRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
//   };

//   // Close popup when mouse leaves both trigger & popup
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (
//         !popupRef.current ||
//         !triggerRef.current ||
//         popupRef.current.contains(e.target as Node) ||
//         triggerRef.current.contains(e.target as Node)
//       )
//         return;
//       setIsPopupOpen(false);
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const isActive =
//     location.pathname === page.path ||
//     (page.path !== "/" && location.pathname.startsWith(page.path));

//   const activeClasses = isActive
//     ? isChild
//       ? `text-white font-bold ${
//           isCollapsed ? "flex justify-center items-center" : ""
//         }`
//       : `${
//           isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
//         } font-medium   px-2 ${
//           isCollapsed ? "flex justify-center items-center" : ""
//         }`
//     : isDarkMode
//     ? `text-white hover:bg-gray-600/30 ${
//         isCollapsed ? "flex justify-center items-center" : ""
//       }`
//     : `text-white hover:bg-white/10 ${
//         isCollapsed ? "flex justify-center items-center" : ""
//       }`;

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => {
//         if (isCollapsed && hasChildren) {
//           setIsPopupOpen(true);
//           updateCoords();
//         }
//       }}
//       onMouseLeave={() => {
//         if (isCollapsed) setIsPopupOpen(false);
//       }}
//     >
//       <Link
//         ref={triggerRef}
//         to={page.path}
//         className={`group flex w-full items-center rounded transition-colors ${
//           isChild ? "border-b border-gray-600" : "border-b border-gray-400/40"
//         } ${activeClasses}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={(e) => {
//           if (hasChildren) {
//             e.preventDefault();
//             onToggleExpand(page.id);
//             if (isCollapsed) setIsPopupOpen((prev) => !prev);
//           }
//         }}
//         style={
//           isCollapsed
//             ? { padding: "11px 12px" }
//             : {
//                 paddingTop: isChild ? "3px" : "7px",
//                 paddingBottom: isChild ? "3px" : "7px",
//                 paddingLeft: `${15 + level * 16}px`, // <-- indentation for hierarchy
//                 paddingRight: "15px",
//               }
//         }
//       >
//         {isChild ? (
//           <span className="w-6 text-center text-gray-400">
//             {isHovered ? (
//               <i
//                 className="fas fa-caret-right text-gray-300"
//                 style={{ fontSize: "12px" }}
//               ></i>
//             ) : (
//               "-"
//             )}
//           </span>
//         ) : (
//           <div className="flex items-center">
//             <i className={`${page.icon} w-4 text-sm`}></i>
//           </div>
//         )}
//         {!isCollapsed && (
//           <span className="ml-2 text-[13.5px]">{page.name}</span>
//         )}
//         {!isCollapsed && hasChildren && (
//           <i
//             className={`fas ${
//               isExpanded ? "fa-chevron-up" : "fa-chevron-down"
//             } ml-auto text-xs opacity-70 transition-transform duration-300`}
//           ></i>
//         )}
//       </Link>

//       {/* Collapsed sidebar popup */}
//       {isCollapsed && isPopupOpen && coords && hasChildren && (
//         <div
//           ref={popupRef}
//           style={{
//             position: "fixed",
//             left: `${coords.left}px`,
//             top: `${coords.top}px`,
//             minWidth: "160px",
//             maxHeight: "300px",
//             overflowY: "auto",
//           }}
//           className="z-40 shadow-lg bg-[#235e8b] p-2"
//         >
//           {childrenMap?.[page.id]?.map((child) => (
//             <SidebarMenuItem
//               key={child.id}
//               page={child}
//               isChild={true}
//               isCollapsed={false} // style like expanded
//               childrenMap={childrenMap}
//               expandedMap={expandedMap}
//               onToggleExpand={onToggleExpand}
//               level={level + 1} // pass depth for popup too
//             />
//           ))}
//         </div>
//       )}

//       {/* Expanded children in main sidebar */}
//       {!isCollapsed && hasChildren && isExpanded && (
//         <div className="relative w-full">
//           {/* Vertical line for direct children */}
//           {!isChild && (
//             <div
//               className="absolute left-9.5  top-0 bottom-0 w-[2px] bg-white/20"
//               // shift line according to level
//             />
//           )}

//           <div className="flex flex-col">
//             {childrenMap?.[page.id]?.map((child) => (
//               <div key={child.id} className="w-full">
//                 <SidebarMenuItem
//                   page={child}
//                   isChild={true}
//                   isCollapsed={false}
//                   childrenMap={childrenMap}
//                   expandedMap={expandedMap}
//                   onToggleExpand={onToggleExpand}
//                   level={level + 1} // pass depth
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidebarMenuItem;
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import type { Page } from "../../Types/Page";
// import { useDarkModeStore } from "../../Theme/useDarkModeStore";

// interface SidebarMenuItemProps {
//   page: Page;
//   isCollapsed: boolean;
//   isChild?: boolean;
//   childrenMap?: Record<number, Page[]>;
//   expandedMap: Record<number, boolean>;
//   onToggleExpand: (id: number) => void;
//   level?: number; // depth of the item
// }

// const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
//   page,
//   isCollapsed,
//   isChild = false,
//   childrenMap,
//   expandedMap,
//   onToggleExpand,
//   level = 0,
// }) => {
//   const location = useLocation();
//   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
//   const isDarkMode = effectiveTheme === "dark" || effectiveTheme === "night";

//   const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
//   const isExpanded = expandedMap[page.id] || false;

//   const [isHovered, setIsHovered] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const triggerRef = useRef<HTMLAnchorElement | null>(null);
//   const popupRef = useRef<HTMLDivElement | null>(null);
//   const [coords, setCoords] = useState<{ left: number; top: number } | null>(
//     null
//   );

//   // Update popup position
//   const updateCoords = () => {
//     const rect = triggerRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
//   };

//   // Close popup when mouse leaves both trigger & popup
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (
//         !popupRef.current ||
//         !triggerRef.current ||
//         popupRef.current.contains(e.target as Node) ||
//         triggerRef.current.contains(e.target as Node)
//       )
//         return;
//       setIsPopupOpen(false);
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const isActive =
//     location.pathname === page.path ||
//     (page.path !== "/" && location.pathname.startsWith(page.path));

//   const activeClasses = isActive
//     ? isChild
//       ? `text-white font-bold ${
//           isCollapsed ? "flex justify-center items-center" : ""
//         }`
//       : `${
//           isDarkMode ? "bg-gray-700 text-white" : "bg-white text-[#2186d4]"
//         } font-medium ${isCollapsed ? "flex justify-center items-center" : ""}`
//     : isDarkMode
//     ? `text-white hover:bg-gray-600/30 ${
//         isCollapsed ? "flex justify-center items-center" : ""
//       }`
//     : `text-white hover:bg-white/10 ${
//         isCollapsed ? "flex justify-center items-center" : ""
//       }`;

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => {
//         if (isCollapsed && hasChildren) {
//           setIsPopupOpen(true);
//           updateCoords();
//         }
//       }}
//       onMouseLeave={() => {
//         if (isCollapsed) setIsPopupOpen(false);
//       }}
//     >
//       <Link
//         ref={triggerRef}
//         to={page.path}
//         className={`group flex w-full items-center rounded transition-colors ${
//           isChild ? "border-b border-gray-600" : "border-b border-gray-400/40"
//         } ${activeClasses}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={(e) => {
//           if (hasChildren) {
//             e.preventDefault();
//             onToggleExpand(page.id);
//             if (isCollapsed) setIsPopupOpen((prev) => !prev);
//           }
//         }}
//         style={
//           isCollapsed
//             ? { padding: "11px 12px" }
//             : {
//                 paddingTop: isChild ? "3px" : "7px",
//                 paddingBottom: isChild ? "3px" : "7px",
//                 paddingLeft: `${15 + level * 16}px`,
//                 paddingRight: "15px",
//               }
//         }
//       >
//         {level === 0 ? (
//           // Parent: show main icon
//           <div className="flex items-center">
//             <i className={`${page.icon} w-4 text-sm`}></i>
//           </div>
//         ) : level === 1 ? (
//           // First-level child: dash, change to caret on hover
//           <span className="w-6 text-center text-gray-400">
//             {isHovered ? (
//               <i
//                 className="fas fa-caret-right text-gray-300"
//                 style={{ fontSize: "12px" }}
//               />
//             ) : (
//               "-"
//             )}
//           </span>
//         ) : (
//           // Levels >= 2: always show caret-right icon

//           <span className="w-6 text-center text-gray-400">
//             <i
//               className="fas fa-caret-right text-gray-300"
//               style={{ fontSize: "12px" }}
//             />
//           </span>
//         )}

//         {!isCollapsed && (
//           <span className="ml-2 text-[13.5px]">{page.name}</span>
//         )}

//         {!isCollapsed && hasChildren && (
//           <i
//             className={`fas ${
//               isExpanded ? "fa-chevron-up" : "fa-chevron-down"
//             } ml-auto text-xs opacity-70 transition-transform duration-300`}
//           ></i>
//         )}
//       </Link>

//       {/* Collapsed sidebar popup */}
//       {isCollapsed && isPopupOpen && coords && hasChildren && (
//         <div
//           ref={popupRef}
//           style={{
//             position: "fixed",
//             left: `${coords.left}px`,
//             top: `${coords.top}px`,
//             minWidth: "160px",
//             maxHeight: "300px",
//             overflowY: "auto",
//           }}
//           className="z-40 shadow-lg bg-[#235e8b] p-2"
//         >
//           {childrenMap?.[page.id]?.map((child) => (
//             <SidebarMenuItem
//               key={child.id}
//               page={child}
//               isChild={true}
//               isCollapsed={false}
//               childrenMap={childrenMap}
//               expandedMap={expandedMap}
//               onToggleExpand={onToggleExpand}
//               level={level + 1}
//             />
//           ))}
//         </div>
//       )}

//       {/* Expanded children in main sidebar */}
//       {!isCollapsed && hasChildren && isExpanded && (
//         <div className="relative w-full">
//           {!isChild && (
//             <div className="absolute left-9.5 top-0 bottom-0 w-[2px] bg-white/20" />
//           )}

//           <div className="flex flex-col">
//             {childrenMap?.[page.id]?.map((child) => (
//               <div key={child.id} className="w-full">
//                 <SidebarMenuItem
//                   page={child}
//                   isChild={true}
//                   isCollapsed={false}
//                   childrenMap={childrenMap}
//                   expandedMap={expandedMap}
//                   onToggleExpand={onToggleExpand}
//                   level={level + 1}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidebarMenuItem;
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import type { Page } from "../../Types/Page";

// interface SidebarMenuItemProps {
//   page: Page;
//   isCollapsed: boolean;
//   isChild?: boolean;
//   childrenMap?: Record<number, Page[]>;
//   expandedMap: Record<number, boolean>;
//   onToggleExpand: (id: number) => void;
//   level?: number; // depth of the item
//   customTheme?: {
//     background: string;
//     text: string;
//     button: string;
//     hover?: string;
//   };
// }

// const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
//   page,
//   isCollapsed,
//   isChild = false,
//   childrenMap,
//   expandedMap,
//   onToggleExpand,
//   level = 0,
//   customTheme,
// }) => {
//   const location = useLocation();

//   const activeBgColor = "#BFDDF9"; // light blue background
//   const activeIconColor = "#1E73BE"; // darker blue icon
//   const inactiveIconColor = customTheme?.text || "#ffffff";
//   const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
//   const isExpanded = expandedMap[page.id] || false;

//   const [isHovered, setIsHovered] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const triggerRef = useRef<HTMLAnchorElement | null>(null);
//   const popupRef = useRef<HTMLDivElement | null>(null);
//   const [coords, setCoords] = useState<{ left: number; top: number } | null>(
//     null
//   );

//   const updateCoords = () => {
//     const rect = triggerRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
//   };

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (
//         !popupRef.current ||
//         !triggerRef.current ||
//         popupRef.current.contains(e.target as Node) ||
//         triggerRef.current.contains(e.target as Node)
//       )
//         return;
//       setIsPopupOpen(false);
//     };
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const isActive =
//     location.pathname === page.path ||
//     (page.path !== "/" && location.pathname.startsWith(page.path));

//   // -------------------------------
//   // Use theme from props
//   // -------------------------------
//   // const textColor = customTheme?.text || "#ffffff";

//   // const hoverBg = "rgba(255,255,255,0.1)";
//   // const activeBg = isActive ? hoverBg : "transparent";
//   // const activeText = isActive ? textColor : textColor;
//   // const hoverEffect = isHovered ? hoverBg : activeBg;
//   const hoverBg = "rgba(255,255,255,0.1)";

//   // Active item colors (based on your screenshot)
//   const activeBg = "#BFDDF9"; // Light blue background
//   const activeText = "#1E73BE"; // Darker blue icon/text

//   // When hovered, if not active, use the soft white hover
//   const hoverEffect = isActive ? activeBg : isHovered ? hoverBg : "transparent";

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => {
//         if (isCollapsed && hasChildren) {
//           setIsPopupOpen(true);
//           updateCoords();
//         }
//       }}
//       onMouseLeave={() => {
//         if (isCollapsed) setIsPopupOpen(false);
//       }}
//     >
//       <Link
//         ref={triggerRef}
//         to={page.path}
//         className={`group flex w-full items-center rounded transition-colors ${
//           isCollapsed ? "justify-center" : "justify-start"
//         } ${
//           isChild
//             ? "border-b border-gray-400/40"
//             : "border-b border-gray-400/40"
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={(e) => {
//           if (hasChildren) {
//             e.preventDefault();
//             onToggleExpand(page.id);
//             if (isCollapsed) setIsPopupOpen((prev) => !prev);
//           }
//         }}
//         style={{
//           backgroundColor: hoverEffect,
//           color: isActive ? activeText : textColor,
//           paddingLeft: `${15 + level * 16}px`,
//           paddingRight: "15px",
//           paddingTop: isChild ? "3px" : "8px",
//           paddingBottom: isChild ? "3px" : "8px",
//           borderRadius: "12px", // rounded like your design
//           transition: "all 0.2s ease-in-out",
//         }}
//       >
//         {/* Icon / Dash */}
//         {level === 0 ? (
//           // Parent: show main icon
//           // <div className="flex items-center w-6 justify-center">
//           //   <i className={`${page.icon} w-4 text-sm`}></i>
//           // </div>
//           <div
//             className="flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-200"
//             style={{
//               backgroundColor: isActive ? "#BFDDF9" : "transparent",
//               color: isActive ? "#1E73BE" : textColor,
//             }}
//           >
//             {page.icon}
//           </div>
//         ) : level === 1 ? (
//           // First-level child: dash, change to caret on hover
//           <span className="w-6 text-center text-gray-400">
//             {isHovered ? (
//               <i
//                 className="fas fa-caret-right text-gray-300"
//                 style={{ fontSize: "12px" }}
//               />
//             ) : (
//               "-"
//             )}
//           </span>
//         ) : (
//           // Levels >= 2: always show caret-right icon
//           <span className="w-6 text-center text-gray-400">
//             <i
//               className="fas fa-caret-right text-gray-300"
//               style={{ fontSize: "12px" }}
//             />
//           </span>
//         )}

//         {!isCollapsed && (
//           <span className="ml-2 text-[13.5px]">{page.name}</span>
//         )}

//         {!isCollapsed && hasChildren && (
//           <i
//             className={`fas ${
//               isExpanded ? "fa-chevron-up" : "fa-chevron-down"
//             } ml-auto text-xs opacity-70 transition-transform duration-300`}
//           ></i>
//         )}
//       </Link>

//       {/* Collapsed sidebar popup */}
//       {isCollapsed && isPopupOpen && coords && hasChildren && (
//         <div
//           ref={popupRef}
//           style={{
//             position: "fixed",
//             left: `${coords.left}px`,
//             top: `${coords.top}px`,
//             minWidth: "160px",
//             maxHeight: "300px",
//             overflowY: "auto",
//             backgroundColor: customTheme?.background || "#235e8b",
//             color: customTheme?.text || "#ffffff",
//             zIndex: 40,
//             padding: "0.5rem",
//           }}
//           className="shadow-lg "
//         >
//           {childrenMap?.[page.id]?.map((child) => (
//             <SidebarMenuItem
//               key={child.id}
//               page={child}
//               isChild={true}
//               isCollapsed={false}
//               childrenMap={childrenMap}
//               expandedMap={expandedMap}
//               onToggleExpand={onToggleExpand}
//               level={level + 1}
//               customTheme={customTheme}
//             />
//           ))}
//         </div>
//       )}

//       {/* Expanded children in main sidebar */}
//       {!isCollapsed && hasChildren && isExpanded && (
//         <div className="relative w-full">
//           {!isChild && (
//             <div
//               className="absolute left-9.5 top-0 bottom-0 w-[2px]"
//               style={{ backgroundColor: hoverBg }}
//             />
//           )}
//           <div className="flex flex-col">
//             {childrenMap?.[page.id]?.map((child) => (
//               <div key={child.id} className="w-full relative">
//                 <hr
//                   style={{
//                     border: "none",
//                     borderTop: `1px solid ${hoverBg}`,
//                     opacity: 0.3,
//                     margin: 0,
//                   }}
//                 />
//                 <SidebarMenuItem
//                   customTheme={customTheme}
//                   page={child}
//                   isChild={true}
//                   isCollapsed={false}
//                   childrenMap={childrenMap}
//                   expandedMap={expandedMap}
//                   onToggleExpand={onToggleExpand}
//                   level={level + 1}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidebarMenuItem;
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Page } from "../../Types/Page";

interface SidebarMenuItemProps {
  page: Page;
  isCollapsed: boolean;
  isChild?: boolean;
  childrenMap?: Record<number, Page[]>;
  expandedMap: Record<number, boolean>;
  onToggleExpand: (id: number) => void;
  level?: number;
  customTheme?: {
    background: string;
    text: string;
    button: string;
    hover?: string;
  };
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  page,
  isCollapsed,
  isChild = false,
  childrenMap,
  expandedMap,
  onToggleExpand,
  level = 0,
  customTheme,
}) => {
  const location = useLocation();

  const hasChildren = childrenMap && childrenMap[page.id]?.length > 0;
  const isExpanded = expandedMap[page.id] || false;
  // const closeTimer = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  // const [coords, setCoords] = useState<{ left: number; top: number } | null>(
  //   null
  // );
  const [coords, setCoords] = useState<{
    left: number;
    top: number;
    height: number;
    right: number;
  } | null>(null);

  // const updateCoords = () => {
  //   const rect = triggerRef.current?.getBoundingClientRect();
  //   if (!rect) return;
  //   setCoords({ left: Math.ceil(rect.right), top: Math.ceil(rect.top) });
  // };
  const updateCoords = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({
      left: Math.ceil(rect.right),
      top: Math.ceil(rect.top),
      height: Math.ceil(rect.height),
      right: Math.ceil(rect.right),
    });
  };
  // Clear close timer on unmount
  // useEffect(() => {
  //   return () => {
  //     if (closeTimer.current) window.clearTimeout(closeTimer.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (
  //       !popupRef.current ||
  //       !triggerRef.current ||
  //       popupRef.current.contains(e.target as Node) ||
  //       triggerRef.current.contains(e.target as Node)
  //     )
  //       return;
  //     setIsPopupOpen(false);
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => document.removeEventListener("mousemove", handleMouseMove);
  // }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!popupRef.current || !triggerRef.current) return;

      const popupRect = popupRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      // --- 👇 UPDATED SAFE ZONE CALCULATION ---
      // It now accounts for the +9px gap between popup and trigger.
      const safeZone = {
        left: Math.min(triggerRect.left, popupRect.left),
      };

      // safeZone.right += 2;

      if (x >= safeZone.left) {
        return;
      }

      setIsPopupOpen(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Detect if this page is active
  const isActive =
    location.pathname === page.path ||
    (page.path !== "/" && location.pathname.startsWith(page.path));

  // -------------------------------
  // Theme colors
  // -------------------------------
  const textColor = customTheme?.text || "#ffffff";
  const hoverBg = "rgba(255,255,255,0.1)";
  const activeBg = "#BFDDF9"; // Light blue background
  const activeText = "#1E73BE"; // Dark blue icon/text
  const hoverEffect = isActive ? activeBg : isHovered ? hoverBg : "transparent";

  return (
    <div
      className="relative  "
      onMouseEnter={() => {
        if (isCollapsed && hasChildren) {
          setIsPopupOpen(true);
          updateCoords();
        }
      }}
      onMouseLeave={() => {
        if (isCollapsed) setIsPopupOpen(false);
      }}
    >
      <Link
        ref={triggerRef}
        to={page.path}
        className={`group flex justify-center items-center  rounded transition-colors duration-200
    ${
      isCollapsed
        ? "justify-center  w-[45px] mx-auto "
        : `${
            level === 0
              ? "justify-start w-[200px] mt-1.5   pt-4 ml-5"
              : level === 1
              ? "justify-start  w-[160px] pt-[4px] pb-[4px] mb-0   ml-15 mt-2"
              : "justify-start w-[135px] ml-21 pt-[2px] pb-[2px]  mt-1.5"
          }`
    }
  `}
        // onMouseEnter={() => setIsHovered(true)}
        onMouseEnter={() => {
          setIsHovered(true);
          // ensure popup opens when re-entering the icon itself
          if (isCollapsed && hasChildren) {
            setIsPopupOpen(true);
            updateCoords();
          }
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            onToggleExpand(page.id);
            if (isCollapsed) setIsPopupOpen((prev) => !prev);
          }
        }}
        style={{
          backgroundColor: hoverEffect,
          color: isActive ? activeText : textColor,
          // paddingLeft: isCollapsed ? `${15 + level * 16}px` : " ",
          // paddingRight: "15px",
          paddingLeft: level >= 2 ? "" : "",

          paddingTop: isChild ? "" : isCollapsed ? "3px" : "1px ",
          paddingBottom: isChild ? "" : isCollapsed ? "3px" : "1px ",
          borderRadius: "8px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {/* Icon */}
        {/* {level === 0 ? (
          <div
            className="flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-200"
            style={{
              backgroundColor: isActive ? "#BFDDF9" : "transparent",
              color: isActive ? "#1E73BE" : textColor,
            }}
          >
            {isActive && page.iconActive ? page.iconActive : page.icon}
          </div>
        ) : level === 1 ? (
          <span className="w-6 text-center text-gray-400">
            {isHovered ? (
              <i
                className="fas fa-caret-right text-gray-300"
                style={{ fontSize: "12px" }}
              />
            ) : (
              "-"
            )}
          </span>
        ) : (
          <span className="w-6 text-center text-gray-400 ">
            <i
              className="fas fa-caret-right text-gray-400 "
              style={{ fontSize: "12px" }}
            />
          </span>
        )} */}
        {level === 0 ? (
          <div
            className="flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-200"
            style={{
              backgroundColor: isActive ? "#BFDDF9" : "transparent",
              color: isActive ? "#1E73BE" : textColor,
            }}
          >
            {isActive && page.iconActive ? page.iconActive : page.icon}
          </div>
        ) : (
          <div className="relative flex items-center ">
            {/* <div className="absolute left-0">
              <div
                style={{
                  height: "16px",
                  width: "2px",
                  backgroundColor: isActive
                    ? "#1E73BE"
                    : "rgba(255,255,255,0.4)",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  height: "2px",
                  width: "14px",
                  backgroundColor: isActive
                    ? "#1E73BE"
                    : "rgba(255,255,255,0.4)",
                  borderRadius: "1px",
                  marginTop: "-2px",
                }}
              />
            </div> */}
            <div
              className="absolute h-[1%] "
              style={{
                left: level === 0 ? "-23.5px" : "-20.5px",

                width: level === 0 ? "" : level === 1 ? "16px" : "12px",
                backgroundColor: isActive ? "#D1D5DB" : "#D1D5DB", // ⬅️ move the dash outside the container
              }}
            >
              {/* <div
                style={{
                
                }}
              /> */}
            </div>

            <span
              style={{
                color: isActive ? "#1E73BE" : textColor,
                fontWeight: isActive ? 600 : 400,
                fontSize: "13px",
                marginLeft: "5px",
              }}
            >
              {page.name}
            </span>
          </div>
        )}

        {!isCollapsed && level === 0 && (
          <span className="text-[13.5px]">{page.name}</span>
        )}

        {!isCollapsed && hasChildren && (
          <i
            className={`fas ${
              isExpanded ? "fa-chevron-up" : "fa-chevron-down"
            } ml-auto mr-3   text-xs opacity-70  transition-transform duration-300`}
          ></i>
        )}
      </Link>

      {/* Collapsed sidebar popup */}
      {isCollapsed && isPopupOpen && coords && hasChildren && (
        <>
          {/* Invisible bridge (fills the 9px gap so mouse can cross safely) */}
          {/* <div
            style={{
              position: "fixed",
              left: `${coords.left}px`,
              top: `${coords.top}px`,
              // same visual gap
              height: `${coords.height}px`,
              background: "transparent",
              zIndex: 40,
            }}
          /> */}

          <div
            ref={popupRef}
            style={{
              position: "fixed",
              left: `${coords.left + 9}px`,
              top: `${coords.top}px`,
              minWidth: "160px",
              maxHeight: "300px",
              overflowY: "auto",
              backgroundColor: customTheme?.background || "#235e8b",
              color: customTheme?.text || "#ffffff",
              zIndex: 40,
              padding: "0.5rem",
            }}
            className="shadow-lg"
          >
            {childrenMap?.[page.id]?.map((child) => (
              <SidebarMenuItem
                key={child.id}
                page={child}
                isChild={true}
                isCollapsed={false}
                childrenMap={childrenMap}
                expandedMap={expandedMap}
                onToggleExpand={onToggleExpand}
                level={level + 1}
                customTheme={customTheme}
              />
            ))}
          </div>
        </>
      )}

      {/* Expanded children in main sidebar */}
      {!isCollapsed && hasChildren && isExpanded && (
        <div className="relative w-full">
          <div
            className="absolute "
            style={{
              left:
                level === 0
                  ? "38px "
                  : level === 1
                  ? "62px"
                  : level === 2
                  ? "68px"
                  : "",
              top: level === 0 ? "0px" : level === 1 ? "0px" : "",

              width: level === 0 ? "1.5px" : level === 1 ? "1.5px" : "1.5px",
              height: level === 0 ? "calc(100% - 13px)" : "calc(100% - 11px)",
              backgroundColor:
                level === 0 ? "#D1D5DB" : level === 1 ? "#D1D5DB" : "#D1D5DB",
            }}
          />

          <div className="flex flex-col">
            {childrenMap?.[page.id]?.map((child) => (
              <div key={child.id} className="w-full relative ">
                <hr
                  style={{
                    border: "none",
                    borderTop: `1px solid ${hoverBg}`,
                    opacity: 0.3,
                    margin: 0,
                  }}
                />
                <SidebarMenuItem
                  customTheme={customTheme}
                  page={child}
                  isChild={true}
                  isCollapsed={false}
                  childrenMap={childrenMap}
                  expandedMap={expandedMap}
                  onToggleExpand={onToggleExpand}
                  level={level + 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenuItem;
