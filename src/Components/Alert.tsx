import { MdArrowForwardIos } from 'react-icons/md';

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
  img: string | null
}

export function AlertItem({
  alert,
  isDarkMode = false,

  order
}: {
  alert: Alert;
  isDarkMode?: boolean;
  order: number
}) {
  const severityColors = {
    high: isDarkMode
      ? "border-[#D32F2F] bg-[#3a0e0e]" // deeper red
      : "border-[#D32F2F] bg-[#D32F2F1A]",
    medium: isDarkMode
      ? "border-[#FFA000] bg-[#4a3200]" // deeper amber
      : "border-[#FFA000] bg-[#FFA0001A]",
    low: isDarkMode
      ? "border-[#E9D820] bg-[#474700]" // deeper yellow/olive
      : "border-[#E9D820] bg-[#E9D8201A]",
  };
  const arrowColor = {
    high: "#D32F2F",
    medium: "#FFA000",
    low: "#E9D820"
  }
  const iconSeverity = {
    high: "dangerIcon.png",
    medium: "mediumIcon.png",
    low: "lowIcon.png",
  };
  console.log("the order", order)
  return (
    <div
      className={`flex relative items-start border-t-2 rounded-lg p-3 gap-3 mb-2 shadow-sm w-full ${severityColors[alert.severity]
        }`}
    >
      <div
        className={`flex-shrink-0 mt-1 flex justify-center w-[40px] h-[40px] `}
      >
        {alert.img ? (<img src={alert.img} width={"40x"} height={"40px"} className="rounded-full" />) : <img src={` /person not found icon/${iconSeverity[alert.severity]}`} className="w-[30px] h-[30px]" />}
      </div>
      <div className="ml-3">
        <h4
          className={`font-medium ${order === 0 ? "text-lg" : "text-sm"}  ${isDarkMode ? "text-white" : "text-[#1E0E06]"
            }`}
        >
          ATTENTION REQUIRED - {alert.title}
        </h4>

        <p
          className={`${order === 0 ? "text-lg" : "text-sm"} ${isDarkMode ? "text-white" : "text-[#1E0E06]"
            } mt-1 `}
        >
          {alert.message}
        </p>

      </div>
      <div className='absolute bottom-2 right-2'>
        <MdArrowForwardIos style={{ color: `${arrowColor[alert.severity]}` }} />
      </div>
    </div>
  );
}
