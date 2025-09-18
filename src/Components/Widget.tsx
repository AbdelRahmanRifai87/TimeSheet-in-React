interface WidgetProps {
    children: React.ReactNode;
    title: string;
    onRemove: () => void;
}

function Widget({ children, title, onRemove }: WidgetProps) {
    return (<div className=" bg-white rounded-lg shadow-md border border-gray-200 h-full w-full flex flex-col items-center">
        <header className="flex items-center rounded-lg justify-between !px-4 !py-2 bg-gray-50 border-b border-gray-200 rounded-t-lg w-[95%] !mt-3 mb-2 " >
            <span className="font-semibold text-gray-700 text-lg">{title}</span>
            <div className="flex space-x-2"> {/* Replace with actual SVG icons for 'down' and 'drag' if needed */}
                <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onRemove}
                    title="Remove widget"
                >
                    ×
                </button>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> </svg>
                </button> <button className=" grabbable text-gray-500 hover:text-gray-700 focus:outline-none " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l7.5-7.5 7.5 7.5M3 16.5l7.5 7.5 7.5-7.5M7.5 12h9" /> </svg>
                </button>
            </div>
        </header>
        <div className="relative w-full h-full">
            <div className="widget-content flex justify-center absolute inset-0 overflow-auto p-2 ">

                {children}

            </div>
        </div>
        <select className="rounded-lg styled-select">
            <option value='1' >  option1</option>
            <option value='2'>option2</option>
            <option value='3'>option3</option>
            <option value='4'>option4</option>
        </select>
    </div>)
} export default Widget
