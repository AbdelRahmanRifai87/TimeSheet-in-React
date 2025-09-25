import { useState } from "react";
import "react-grid-layout/css/styles.css";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
// import { DataList } from "../Components/DataList";
import Breadcrumb from "../Components/BreadCrumb";
import { useOutletContext } from "react-router-dom";
type ContextType = { isDarkMode: boolean };

function SwitchToDetails() {
  // 1. Initialize state to manage the dropdown's visibility
  const { isDarkMode } = useOutletContext<ContextType>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  function editItems() {
    setIsDraggingOrResizing((isDraggingOrResizing) => !isDraggingOrResizing);
  }

  return (
    <div className="px-9 pt-3 ">
      <Breadcrumb />
      <div className="flex justify-between items-center px-6 py-7 rounded-xl bg-[#1C75BC26] mb-5  shadow-md">
        <div className="flex items-start space-x-3">
          {/* Bell icon */}
          <div className="flex-shrink-0 text">🔔</div>
          <div>
            <h3
              className={`text-base mb-2 font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Planned Outage Delayed
            </h3>
            <p className="text-s text-gray-500">
              All systems will be operating normally tonight
            </p>
          </div>
        </div>

        {/* Buttons on the right side */}
        <div className="flex space-x-2 items-center">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-lg hover:outline-1 hover:outline-[#6C668540] ${
              isDarkMode ? "text-white" : "text-[#0B0B26]"
            }`}
          >
            Allow push
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-lg hover:outline-1 hover:outline-[#6C668540] ${
              isDarkMode ? "text-white" : "text-[#0B0B26]"
            }`}
          >
            Dismiss
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex flex-col">
          <h1
            className={`text-3xl font-semibold px-0 py-1 rounded transition-colors duration-700 ${
              isDarkMode ? " text-white" : "text-gray-800"
            }`}
          >
            Dashboard
          </h1>

          <div className="relative inline-block text-left mt-2">
            {/* 2. Add an onClick handler to the toggle div */}
            <div
              className="flex items-center space-x-2 text-[#2B82BC] font-[600] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the state
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

            {/* 3. Conditionally render the dropdown menu */}
            {isMenuOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg compliance-view">
                <ul className="list-none m-0 p-0">
                  <li className="px-4 py-2 text-[#1C75BC] font-semibold hover:bg-gray-100  cursor-pointer">
                    Compliance View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100  cursor-pointer">
                    Accounts View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100  cursor-pointer">
                    Operations View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100  cursor-pointer">
                    NCC View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100  cursor-pointer">
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
              className="bg-[#1C75BC]  hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
            >
              <i className="fa-solid fa-plus"></i>{" "}
              <span className="text-sm font-medium">Add widget </span>
            </button>
          )}
          <button
            onClick={editItems}
            className="bg-[#1C75BC]  hover:bg-[#155a8e] text-white font-semibold py-4 px-15 rounded-xl shadow-md transition-colors duration-200 flex items-center space-x-2 gap-1"
          >
            <img src="basil_edit-outline.png" alt="" />{" "}
            <span className="text-sm font-medium">Edit widget</span>
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
        isDarkMode={isDarkMode}
        isDraggingOrResizing={isDraggingOrResizing}
        toggleItemHeight={toggleItemHeight}
      />
    </div>
  );
}
export default SwitchToDetails;
