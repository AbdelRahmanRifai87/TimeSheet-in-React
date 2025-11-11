import { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
import WidgetsGridLayout from "../Components/widget/WdigetsGridLayout";
import Breadcrumb from "../Components/BreadCrumb";
import { useDarkModeStore } from "../Theme/useDarkModeStore";
import { AppIcon } from "../icons";
import AddWidget from "../Components/widget/AddWidget";
import GeneralTable from "../Components/GeneralTable";
import { seedDashboardOnce } from "../store/seedDashboardOnce";

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
  } = useDynamicGrid();

  const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false);
  const editItems = () => setIsDraggingOrResizing((prev) => !prev);

  function DismissHandler() {
    setDismiss((d) => !d);
  }
  useEffect(() => {
    seedDashboardOnce();
  }, []);

  return (
    <div className="min-h-screen px-9 pt-3 font-sans transition-colors">
      {/* Example card */}
      <div
        className={`flex justify-between items-center px-6 py-3.5 rounded-xl mb-5 border-[1px] border-[#3CCC8B] transition-colors ${
          dismiss ? "hidden" : ""
        }`}
        style={{ backgroundColor: "#E9F9F0", color: styles.mainText }}
      >
        <div className="flex items-center justify-center space-x-3 ml-3">
          <div className="flex-shrink-0 text ">
            <AppIcon name="bell" size={35} className="text-[#178C5B]" />
          </div>
          <div>
            <h3 className="text-base mb-0.5 font-[600] text-[#111827]">
              Welcome to the new dashboard!
            </h3>
            <p className="text-sm text-[#4B5563] font-[500]">
              Explore New Widgets, Dynamic Views, and Powerful Functionalities.{" "}
            </p>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button
            style={{
              color: "#178C5B",
            }}
            className=" cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg  hover:outline-1 hover:outline-[#6C668540] transition-colors"
          >
            Explore
          </button>
          <button
            style={{
              color: "#6B7280",
            }}
            className=" cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg  hover:outline-1 hover:outline-[#6C668540] transition-colors"
            onClick={DismissHandler}
          >
            Dismiss
          </button>
        </div>
      </div>

      {/* Top actions */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex flex-col">
          <Breadcrumb />
          <h1
            className="text-3xl font-[700] px-0 py-1 rounded transition-colors duration-700"
            style={{ color: styles.mainText }}
          >
            Dashboard
          </h1>
        </div>

        <div className="flex gap-5">
          {isDraggingOrResizing && (
            // <button
            //   onClick={addItem}
            //   style={{
            //     backgroundColor: styles.mainBtn,
            //     color: styles.sidebarText,
            //   }}
            //   className=" cursor-pointer font-semibold p-3 py-2 rounded-lg shadow-md transition-colors duration-200 flex items-center space-x-2 gap-2"
            // >
            //   <AppIcon name="add" className="mr-0" />
            //   <span className="text-sm font-medium">Add widget</span>
            // </button>
            <AddWidget onAdd={(label) => addItem(label)} />
          )}
          <button
            onClick={editItems}
            style={{
              backgroundColor: styles.mainBtn,
              color: styles.sidebarText,
            }}
            className="  cursor-pointer font-semibold p-3 py-2 rounded-lg shadow-md transition-colors duration-200 flex items-center space-x-2 gap-2"
          >
            <AppIcon size={23} name="edit" className="mr-0" />
            <span className="text-sm font-medium">
              {" "}
              {isDraggingOrResizing ? "Done" : "Edit widget"}
            </span>
          </button>
        </div>
      </div>
      <div className="relative inline-block text-left mb-4 mt-2">
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
