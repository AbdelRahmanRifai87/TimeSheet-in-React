import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Widget from "../Components/widget/Widget";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
import { DataList } from "../Components/DataList";
import { useDarkModeStore } from "../Theme/useDarkModeStore";
const ResponsiveGridLayout = WidthProvider(Responsive);

function Dashboard() {
  // TODO: Replace this with your actual global dark mode state (e.g., Zustand, Context)
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  // Dropdown menu visibility state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    layouts,
    allItems,
    addItem,
    removeItem,
    updateLayouts,
    breakpoints,
    cols,
  } = useDynamicGrid(3);

  return (
    <div className="px-9 pt-3 font-sans transition-colors bg-inherit">
      <p className="ml-3 text-sm mb-4 text-[#1C75BC]">
        {" "}
        <span className="font-bold mr-2"> Dashboard</span> / Your Details -
        General
      </p>

      <div
        className={`flex justify-between items-center px-6 py-7 rounded-xl mb-5 shadow-md transition-colors ${
          isDarkMode ? "bg-[#1e1e1e]" : "bg-[#1C75BC26]"
        }`}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 text">🔔</div>
          <div>
            <h3
              className={`text-sm mb-2 font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Planned Outage Delayed
            </h3>
            <p className="text-xs text-gray-500">
              All systems will be operating normally tonight
            </p>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg hover:outline-1 hover:outline-[#6C668540] ${
              isDarkMode ? "text-white" : "text-[#0B0B26]"
            }`}
          >
            Allow push
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-lg hover:outline-1 hover:outline-[#6C668540] ${
              isDarkMode ? "text-white" : "text-[#0B0B26]"
            }`}
          >
            Dismiss
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mb-8">
        <div className="flex flex-col">
          <h1
            className={`text-3xl font-semibold px-2 py-1 rounded transition-colors duration-700 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Dashboard
          </h1>

          <div className="relative inline-block text-left mt-4">
            <div
              className="flex items-center space-x-2 text-[#2B82BC] font-semibold cursor-pointer"
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
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg compliance-view">
                <ul className="list-none m-0 p-0">
                  <li className="px-4 py-2 text-[#1C75BC] font-semibold hover:bg-gray-100 cursor-pointer">
                    Compliance View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Accounts View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Operations View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    NCC View
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Custom View
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={addItem}
          className="bg-[#1C75BC] hover:bg-blue-700 text-white font-semibold py-4 px-15 rounded-lg shadow-md transition-colors duration-200 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add widget</span>
        </button>
      </div>

      <div>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={breakpoints}
          cols={cols}
          rowHeight={100}
          onLayoutChange={updateLayouts}
          isResizable
          isDraggable
          draggableHandle=".grabbable"
        >
          {allItems.map((item) => (
            <div key={item.i}>
              <Widget
                title={`${item.label}`}
                onRemove={() => removeItem(item.i)}
              >
                <DataList label={item.label} data={item.data} />
              </Widget>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}

export default Dashboard;
