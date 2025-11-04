// import { useState } from "react";
// import "react-grid-layout/css/styles.css";
// import { useDynamicGrid } from "../hooks/useDynamicGrid";
// import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
// import Breadcrumb from "../Components/BreadCrumb";
// import { useDarkModeStore } from "../Theme/useDarkModeStore";

// function Dashboard() {
//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const {
//     layouts,
//     allItems,
//     addItem,
//     removeItem,
//     updateLayouts,
//     breakpoints,
//     cols,
//     toggleItemHeight,
//   } = useDynamicGrid(3);

//   const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false);

//   function editItems() {
//     setIsDraggingOrResizing((prev) => !prev);
//   }

//   const getBgColor = () => {
//     switch (effectiveTheme) {
//       case "dark":
//         return "bg-[#3a5567] text-white";
//       case "night":
//         return "bg-[#1f1f1f] text-white";
//       default:
//         return "bg-[#1C75BC26] text-gray-800"; // light
//     }
//   };

//   const getCardColor = () => {
//     switch (effectiveTheme) {
//       case "dark":
//         return "bg-[#3a5567] text-white";
//       case "night":
//         return "bg-[#1f1f1f] text-white";
//       default:
//         return "bg-[#1C75BC26] text-gray-800"; // light
//     }
//   };

//   return (
//     <div className={`px-9 pt-3 font-sans transition-colors ${getBgColor()}`}>
//       <Breadcrumb />

//       <div
//         className={`flex justify-between items-center px-6 py-7 rounded-xl mb-5 shadow-md transition-colors ${getCardColor()}`}
//       >
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 text">🔔</div>
//           <div>
//             <h3 className="text-base mb-2 font-semibold">
//               Planned Outage Delayed
//             </h3>
//             <p className="text-s text-gray-500">
//               All systems will be operating normally tonight
//             </p>
//           </div>
//         </div>

//         <div className="flex space-x-2 items-center">
//           <button className="px-4 py-2 text-sm font-semibold rounded-lg hover:outline-1 hover:outline-[#6C668540]">
//             Allow push
//           </button>
//           <button className="px-4 py-2 text-sm font-semibold rounded-lg hover:outline-1 hover:outline-[#6C668540]">
//             Dismiss
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-between items-center w-full mb-4">
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-semibold px-0 py-1 rounded transition-colors duration-700">
//             Dashboard
//           </h1>

//           <div className="relative inline-block text-left mt-2">
//             <div
//               className="flex items-center space-x-2 text-[#2B82BC] font-[600] cursor-pointer"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <span>Compliance View</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             {isMenuOpen && (
//               <div
//                 className={`absolute z-10 mt-2 w-48 rounded-lg shadow-lg compliance-view ${
//                   effectiveTheme === "dark"
//                     ? "bg-[#3a5567] text-white"
//                     : effectiveTheme === "night"
//                     ? "bg-[#1f1f1f] text-white"
//                     : "bg-white text-gray-800"
//                 }`}
//               >
//                 <ul className="list-none m-0 p-0">
//                   <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
//                     Compliance View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Accounts View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Operations View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     NCC View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Custom View
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex gap-5">
//           {isDraggingOrResizing && (
//             <button
//               onClick={addItem}
//               className="bg-[#1C75BC] hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//             >
//               <i className="fa-solid fa-plus"></i>{" "}
//               <span className="text-sm font-medium">Add widget </span>
//             </button>
//           )}
//           <button
//             onClick={editItems}
//             className="bg-[#1C75BC] hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//           >
//             <img src="basil_edit-outline.png" alt="" />{" "}
//             <span className="text-sm font-medium">Edit widget</span>
//           </button>
//         </div>
//       </div>

//       <WidgetsGridLayout
//         layouts={layouts}
//         allItems={allItems}
//         removeItem={removeItem}
//         updateLayouts={updateLayouts}
//         breakpoints={breakpoints}
//         cols={cols}
//         isDraggingOrResizing={isDraggingOrResizing}
//         toggleItemHeight={toggleItemHeight}
//         theme={effectiveTheme} // optional, pass theme to grid if needed
//       />
//     </div>
//   );
// }

// export default Dashboard;
// import { useState } from "react";
// import "react-grid-layout/css/styles.css";
// import { useDynamicGrid } from "../hooks/useDynamicGrid";
// import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
// import Breadcrumb from "../Components/BreadCrumb";
// import { useDarkModeStore } from "../Theme/useDarkModeStore";

// function Dashboard() {
//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const {
//     layouts,
//     allItems,
//     addItem,
//     removeItem,
//     updateLayouts,
//     breakpoints,
//     cols,
//     toggleItemHeight,
//   } = useDynamicGrid(3);

//   const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false);

//   function editItems() {
//     setIsDraggingOrResizing((prev) => !prev);
//   }

//   // Background & text helpers
//   const getBgColor = () => {
//     if (theme === "custom") {
//       return customTheme.globalBackground || customTheme.main.background;
//     }
//     switch (effectiveTheme) {
//       case "dark":
//         return "#3a5567";
//       case "night":
//         return "#1f1f1f";
//       default:
//         return "#1C75BC26"; // light
//     }
//   };

//   const getTextColor = () => {
//     if (theme === "custom") return customTheme.main.text;
//   };

//   const getButtonColor = () => {
//     if (theme === "custom") return customTheme.main.button;
//     return; // default button color
//   };

//   return (
//     <div
//       className="min-h-screen  px-9 pt-3 font-sans transition-colors"
//       style={{
//         backgroundColor: getBgColor(),
//         color: getTextColor(),
//       }}
//     >
//       <Breadcrumb />

//       {/* Example card */}
//       <div
//         className="flex justify-between items-center px-6 py-7 rounded-xl mb-5 shadow-md transition-colors"
//         style={{ backgroundColor: getBgColor(), color: getTextColor() }}
//       >
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 text">🔔</div>
//           <div>
//             <h3 className="text-base mb-2 font-semibold">
//               Planned Outage Delayed
//             </h3>
//             <p className="text-s text-gray-500">
//               {" "}
//               All systems will be operating normally tonight
//             </p>
//           </div>
//         </div>

//         <div className="flex space-x-2 items-center">
//           <button
//             style={{ backgroundColor: getButtonColor(), color: getTextColor() }}
//             className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md
//                hover:outline-1 hover:outline-[#6C668540] transition-colors"
//           >
//             Allow push
//           </button>
//           <button
//             style={{ backgroundColor: getButtonColor(), color: getTextColor() }}
//             className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md
//                hover:outline-1 hover:outline-[#6C668540] transition-colors"
//           >
//             Dismiss
//           </button>
//         </div>
//       </div>

//       {/* Top actions */}
//       <div className="flex justify-between items-center w-full mb-4">
//         <div className="flex flex-col">
//           <h1
//             className="text-3xl font-semibold px-0 py-1 rounded transition-colors duration-700"
//             style={{ color: getTextColor() }}
//           >
//             Dashboard
//           </h1>

//           <div className="relative inline-block text-left mt-2">
//             <div
//               className="flex items-center space-x-2 font-[600] cursor-pointer"
//               style={{ color: "#2B82BC" }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <span>Compliance View</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             {isMenuOpen && (
//               <div
//                 className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg compliance-view"
//                 style={{
//                   backgroundColor:
//                     theme === "custom" ? getBgColor() : undefined,
//                   color: theme === "custom" ? getTextColor() : undefined,
//                 }}
//               >
//                 <ul className="list-none m-0 p-0">
//                   <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
//                     Compliance View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Accounts View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Operations View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     NCC View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Custom View
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex gap-5">
//           {isDraggingOrResizing && (
//             <button
//               onClick={addItem}
//               style={{
//                 backgroundColor: getButtonColor(),
//                 color: getTextColor(),
//               }}
//               className="bg-[#1C75BC] hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//             >
//               <i className="fa-solid fa-plus"></i>
//               <span className="text-sm font-medium">Add widget </span>
//             </button>
//           )}
//           <button
//             onClick={editItems}
//             style={{ backgroundColor: getButtonColor(), color: getTextColor() }}
//             className="bg-[#1C75BC] hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//           >
//             <img src="basil_edit-outline.png" alt="" />{" "}
//             <span className="text-sm font-medium">Edit widget</span>
//           </button>
//         </div>
//       </div>

//       <WidgetsGridLayout
//         layouts={layouts}
//         allItems={allItems}
//         removeItem={removeItem}
//         updateLayouts={updateLayouts}
//         breakpoints={breakpoints}
//         cols={cols}
//         isDraggingOrResizing={isDraggingOrResizing}
//         toggleItemHeight={toggleItemHeight}
//         theme={theme === "custom" ? "custom" : effectiveTheme}
//         customTheme={theme === "custom" ? customTheme.main : undefined} // optional
//       />
//     </div>
//   );
// }

// export default Dashboard;
// import { useState } from "react";
// import "react-grid-layout/css/styles.css";
// import { useDynamicGrid } from "../hooks/useDynamicGrid";
// import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
// import Breadcrumb from "../Components/BreadCrumb";
// import { useDarkModeStore } from "../Theme/useDarkModeStore";

// function Dashboard() {
//   const theme = useDarkModeStore((s) => s.theme);
//   const effectiveTheme = useDarkModeStore((s) => s.effectiveTheme);
//   const customTheme = useDarkModeStore((s) => s.customTheme);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const {
//     layouts,
//     allItems,
//     addItem,
//     removeItem,
//     updateLayouts,
//     breakpoints,
//     cols,
//     toggleItemHeight,
//   } = useDynamicGrid(3);

//   const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false);
//   const editItems = () => setIsDraggingOrResizing((prev) => !prev);

//   // --------------------------
//   // Compute main styles
//   // --------------------------
//   const bgColor =
//     theme === "custom"
//       ? customTheme.globalBackground || customTheme.main.background
//       : effectiveTheme === "dark"
//       ? "#3a5567"
//       : effectiveTheme === "night"
//       ? "#1f1f1f"
//       : "#1C75BC26";

//   const textColor = theme === "custom" ? customTheme.main.text : "#000000";
//   const buttonColor = theme === "custom" ? customTheme.main.button : "#1C75BC";

//   const dropdownBg = theme === "custom" ? bgColor : "#ffffff";
//   const dropdownText = theme === "custom" ? textColor : "#000000";

//   return (
//     <div
//       className="min-h-screen px-9 pt-3 font-sans transition-colors"
//       style={{ backgroundColor: bgColor, color: textColor }}
//     >
//       <Breadcrumb />

//       {/* Example card */}
//       <div
//         className="flex justify-between items-center px-6 py-7 rounded-xl mb-5 shadow-md transition-colors"
//         style={{ backgroundColor: bgColor, color: textColor }}
//       >
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 text">🔔</div>
//           <div>
//             <h3 className="text-base mb-2 font-semibold">
//               Planned Outage Delayed
//             </h3>
//             <p className="text-s text-gray-500">
//               All systems will be operating normally tonight
//             </p>
//           </div>
//         </div>

//         <div className="flex space-x-2 items-center">
//           <button
//             style={{ backgroundColor: buttonColor, color: textColor }}
//             className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:outline-1 hover:outline-[#6C668540] transition-colors"
//           >
//             Allow push
//           </button>
//           <button
//             style={{ backgroundColor: buttonColor, color: textColor }}
//             className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:outline-1 hover:outline-[#6C668540] transition-colors"
//           >
//             Dismiss
//           </button>
//         </div>
//       </div>

//       {/* Top actions */}
//       <div className="flex justify-between items-center w-full mb-4">
//         <div className="flex flex-col">
//           <h1
//             className="text-3xl font-semibold px-0 py-1 rounded transition-colors duration-700"
//             style={{ color: textColor }}
//           >
//             Dashboard
//           </h1>

//           <div className="relative inline-block text-left mt-2">
//             <div
//               className="flex items-center space-x-2 font-[600] cursor-pointer"
//               style={{ color: "#2B82BC" }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <span>Compliance View</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             {isMenuOpen && (
//               <div
//                 className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg compliance-view"
//                 style={{ backgroundColor: dropdownBg, color: dropdownText }}
//               >
//                 <ul className="list-none m-0 p-0">
//                   <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
//                     Compliance View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Accounts View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Operations View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     NCC View
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Custom View
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex gap-5">
//           {isDraggingOrResizing && (
//             <button
//               onClick={addItem}
//               style={{ backgroundColor: buttonColor, color: textColor }}
//               className="font-semibold py-4 px-6 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//             >
//               <i className="fa-solid fa-plus"></i>
//               <span className="text-sm font-medium">Add widget</span>
//             </button>
//           )}
//           <button
//             onClick={editItems}
//             style={{ backgroundColor: buttonColor, color: textColor }}
//             className="font-semibold py-4 px-6 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
//           >
//             <img src="basil_edit-outline.png" alt="" />
//             <span className="text-sm font-medium">Edit widget</span>
//           </button>
//         </div>
//       </div>

//       <WidgetsGridLayout
//         layouts={layouts}
//         allItems={allItems}
//         removeItem={removeItem}
//         updateLayouts={updateLayouts}
//         breakpoints={breakpoints}
//         cols={cols}
//         isDraggingOrResizing={isDraggingOrResizing}
//         toggleItemHeight={toggleItemHeight}
//         theme={theme === "custom" ? "custom" : effectiveTheme}
//         customTheme={theme === "custom" ? customTheme.main : undefined}
//       />
//     </div>
//   );
// }

// export default Dashboard;
import { useState } from "react";
import "react-grid-layout/css/styles.css";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
import Breadcrumb from "../Components/BreadCrumb";
import { useDarkModeStore } from "../Theme/useDarkModeStore";

function Dashboard() {
  const styles = useDarkModeStore((s) => s.styles);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dismiss, setDismiss] = useState(false);

  const {
    layouts,
    allItems,
    addItem,
    removeItem,
    updateLayouts,
    breakpoints,
    cols,
    toggleItemHeight,
  } = useDynamicGrid(3);

  const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false);
  const editItems = () => setIsDraggingOrResizing((prev) => !prev);

  function DismissHandler() {
    setDismiss((d) => !d);
  }

  return (
    <div className="min-h-screen px-9 pt-3 font-sans transition-colors">
      <Breadcrumb />

      {/* Example card */}
      <div
        className={`flex justify-between items-center px-6 py-7 rounded-xl mb-5 shadow-md transition-colors ${
          dismiss ? "hidden" : ""
        }`}
        style={{ backgroundColor: styles.mainBg, color: styles.mainText }}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 text">🔔</div>
          <div>
            <h3 className="text-base mb-2 font-semibold">
              Planned Outage Delayed
            </h3>
            <p className="text-s text-gray-500">
              All systems will be operating normally tonight
            </p>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button
            style={{ backgroundColor: styles.mainBtn, color: styles.mainText }}
            className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:outline-1 hover:outline-[#6C668540] transition-colors"
          >
            Allow push
          </button>
          <button
            style={{ backgroundColor: styles.mainBtn, color: styles.mainText }}
            className="px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:outline-1 hover:outline-[#6C668540] transition-colors"
            onClick={DismissHandler}
          >
            Dismiss
          </button>
        </div>
      </div>

      {/* Top actions */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex flex-col">
          <h1
            className="text-3xl font-semibold px-0 py-1 rounded transition-colors duration-700"
            style={{ color: styles.mainText }}
          >
            Dashboard
          </h1>

          <div className="relative inline-block text-left mt-2">
            <div
              className="flex items-center space-x-2 font-[600] cursor-pointer"
              style={{ color: "#2B82BC" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span>Compliance View</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {isMenuOpen && (
              <div
                className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg compliance-view"
                style={{
                  backgroundColor: styles.dropdownBg,
                  color: styles.dropdownText,
                }}
              >
                <ul className="list-none m-0 p-0">
                  <li className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer">
                    Compliance View
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Accounts View
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Operations View
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    NCC View
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Custom View
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-5">
          {isDraggingOrResizing && (
            <button
              onClick={addItem}
              style={{
                backgroundColor: styles.mainBtn,
                color: styles.mainText,
              }}
              className="font-semibold py-4 px-6 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="text-sm font-medium">Add widget</span>
            </button>
          )}
          <button
            onClick={editItems}
            style={{ backgroundColor: styles.mainBtn, color: styles.mainText }}
            className="font-semibold py-4 px-6 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
          >
            <img src="basil_edit-outline.png" alt="" />{" "}
            <span className="text-sm font-medium">
              {" "}
              {isDraggingOrResizing ? "Done" : "Edit widget"}
            </span>
          </button>
        </div>
      </div>

      <WidgetsGridLayout
        layouts={layouts}
        allItems={allItems}
        removeItem={removeItem}
        updateLayouts={updateLayouts}
        breakpoints={breakpoints}
        cols={cols}
        isDraggingOrResizing={isDraggingOrResizing}
        toggleItemHeight={toggleItemHeight}
        // theme={effectiveTheme}
        // customTheme={theme === "custom" ? styles : undefined} // just pass styles for custom
      />
    </div>
  );
}

export default Dashboard;
