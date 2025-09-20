interface Alert {
    id: string;
    title: string;
    message: string;
    severity: "high" | "medium" | "low";
}

export function AlertItem({ alert }: { alert: Alert }) {
    const severityColors = {
        high: "border-[#D32F2F] bg-[#D32F2F1A]",

        medium: "border-[#FFA000] bg-[#FFA0001A]",

        low: "border-[#E9D820] bg-[#E9D8201A]",

    };
    const iconSeverituColors = {
        high: "text-[#D32F2F]",
        medium: "text-[#FFA000]",
        low: "text-[#E9D820]"


    }

    return (
        <div
            className={`flex items-start border-t-2 rounded-lg p-3 mb-2 shadow-sm w-full ${severityColors[alert.severity]}`}
        >
            <div className={`flex-shrink-0 mt-1 ${iconSeverituColors[alert.severity]}`}>
                <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div className="ml-3">
                <h4 className="font-semibold text-gray-800 text-sm">{alert.title}</h4>
                <p className="text-xs text-gray-600">{alert.message}</p>
            </div>
        </div>
    );
}
