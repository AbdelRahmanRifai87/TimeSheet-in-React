import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Widget from "../Components/Widget";
import { useDynamicGrid } from "../hooks/useDynamicGrid";
const ResponsiveGridLayout = WidthProvider(Responsive);


function Dashboard() {

    // 1. Initialize state to manage the dropdown's visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { layouts, allItems, addItem, removeItem, updateLayouts, breakpoints, cols } = useDynamicGrid(3);


    return (
        <div className="p-9 bg-gray-100 min-h-screen font-sans">
            <p className="text-gray-500 text-sm mb-4">Dashboard / Your Details - General</p>

            <div className="flex justify-between items-center w-full mb-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

                    <div className="relative inline-block text-left mt-4">
                        {/* 2. Add an onClick handler to the toggle div */}
                        <div
                            className="flex items-center space-x-2 text-blue-600 font-semibold cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the state
                        >
                            <span>Compliance View</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* 3. Conditionally render the dropdown menu */}
                        {isMenuOpen && (
                            <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                                <ul className="list-none m-0 p-0">
                                    <li className="px-4 py-2 text-blue-600 bg-gray-100 rounded-md font-semibold cursor-pointer">Compliance View</li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">Accounts View</li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">Operations View</li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">NCC View</li>
                                    <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">Custom View</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <button onClick={addItem} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Add widget</span>
                </button>
            </div>
            <div style={{ marginTop: "100px", marginLeft: "auto" }}>

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
                            <Widget title={`Widget ${item.i}`} onRemove={() => removeItem(item.i)}>
                                <p className='item
                ' style={{ color: "black", height: "150px" }} >Content for widget {item.i}</p>
                            </Widget>
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>


        </div>
    );

}
export default Dashboard
