import WidgetHeader from "./WidgetHeader";

interface WidgetProps {
    children: React.ReactNode;
    title: string;
    onRemove: () => void;
}
// <header className = "flex items-center rounded-lg justify-between !px-4 !py-2 bg-[#1C75BC26] border-b border-gray-200 rounded-t-lg w-full mb-2 ">
//             <span className="font-semibold text-[#05004E] text-lg">{title}</span>
//             <div className="flex space-x-2"> {/* Replace with actual SVG icons for 'down' and 'drag' if needed */}
//                 <button
//                     className="flex items-center justify-center px-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db] text-[#1C75BC] hover:text-gray-700 focus:outline-none cursor-pointer"
//                     onClick={onRemove}
//                     title="Remove widget"
//                 >
//                     ×
//                 </button>
//                 {/* <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>
//                 </button> <button className=" grabbable text-gray-500 hover:text-gray-700 focus:outline-none " >
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l7.5-7.5 7.5 7.5M3 16.5l7.5 7.5 7.5-7.5M7.5 12h9" /> </svg>
//                 </button> */}
//                 <button className="flex items-center justify-center px-2 rounded-lg bg-white border border-gray-200 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db]  shadow-sm text-[#1C75BC] hover:text-gray-700 focus:outline-none cursor-pointer">
//                     <i className="fa-solid fa-angle-down text-xs"></i>
//                 </button>


//                 <button className="grabbable flex items-center justify-center w-7 h-10 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-400 hover:shadow-[0_0_3px_0_#1C75BC] hover:border-[#5da2db] hover:text-[#1C75BC] focus:outline-none">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-8">
//                         {/* First column of dots */}
//                         <circle cx="3" cy="0" r="1.5" />
//                         <circle cx="3" cy="8" r="1.5" />
//                         <circle cx="3" cy="16" r="1.5" />
//                         {/* Second column of dots */}
//                         <circle cx="13" cy="0" r="1.5" />
//                         <circle cx="13" cy="8" r="1.5" />
//                         <circle cx="13" cy="16" r="1.5" />
//                     </svg>
//                 </button>

function Widget({ children, title, onRemove }: WidgetProps) {
    return (
        <div className=" bg-white rounded-lg shadow-md border border-gray-200 h-full w-full flex flex-col items-center px-1 pt-1 ">

            <WidgetHeader title={title} onRemove={onRemove} />


            <div className="relative w-full h-full">
                <div className="widget-content flex justify-center absolute inset-0 overflow-auto pt-2 px-3 ">

                    {children}

                </div>
            </div>
            <div className="w-full h-[20px]">

            </div>

        </div >)
} export default Widget
