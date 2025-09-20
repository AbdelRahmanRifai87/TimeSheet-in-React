interface Blockout {
    id: string;
    date: string;
    user: string;
    subtext: string;
}

export default function BlockoutItem({ blockout }: { blockout: Blockout }) {
    return (
        <div className="flex flex-col justify-between border border-gray-200 rounded-2xl min-w-[400px] shadow-lg w-full max-w-sm bg-white px-6 py-4 space-y-2">
            {/* Date range */}
            <div className="text-left text-[#1C75BC] text-sm font-light">
                {blockout.date}
            </div>

            {/* User */}
            <div className="text-left">
                <p className="text-xl font-semibold text-[#1E0E06]">{blockout.user}</p>
            </div>

            {/* Subtext */}
            <div className="text-left">
                <p className="text-sm text-gray-800">{blockout.subtext}</p>
            </div>

            {/* Approve/Deny Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button className="flex-1 bg-[#388E3C] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Approve
                </button>
                <button className="flex-1 bg-[#D32F2FE5] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Deny
                </button>
            </div>
        </div>
    );
}


// Make sure to install and use Tailwind CSS for the class names to work.
// npm install -D tailwindcss
// npx tailwindcss init
// Then configure your tailwind.config.js and include the paths to your files.


