// import { useMemo } from "react";
// import { AlertItem } from "./Alert";
// import { useDarkModeStore } from "../Theme/useDarkModeStore";

// interface Alert {
//   id: string;
//   title: string;
//   message: string;
//   severity: "high" | "medium" | "low";
//   img: string | null;
// }

// export function AlertList({ alerts }: { alerts: Alert[] }) {
//   const effectiveTheme = useDarkModeStore((state) => state.effectiveTheme);
//   const isDarkOrNight = effectiveTheme === "dark" || effectiveTheme === "night";

//   // Order map for prioritization
//   const severityOrder = {
//     high: 1,
//     medium: 2,
//     low: 3,
//   };

//   // Sort the alerts
//   const sortedAlerts = useMemo(() => {
//     return [...alerts].sort((a, b) => {
//       return severityOrder[a.severity] - severityOrder[b.severity];
//     });
//   }, [alerts]);

//   return (
//     <div
//       className={`flex flex-col space-y-2 w-full ${
//         isDarkOrNight ? "bg-dark" : "bg-white"
//       }`}
//     >
//       {sortedAlerts.map((alert, index) => (
//         <AlertItem key={alert.id} order={index} alert={alert} />
//       ))}
//     </div>
//   );
// }
import { useMemo } from "react";
import { AlertItem } from "./Alert";
import type { Alert } from "../Types/Alert";

export function AlertList({ alerts }: { alerts: ReadonlyArray<Alert> }) {
  // Order map for prioritization
  const severityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  // Sort the alerts
  const sortedAlerts = useMemo(
    () =>
      [...alerts].sort(
        (a, b) => severityOrder[a.severity] - severityOrder[b.severity]
      ),
    [alerts]
  );

  return (
    <div className={`flex flex-col space-y-2 w-full `}>
      {sortedAlerts.map((alert, index) => (
        <AlertItem key={alert.id} order={index} alert={alert} />
      ))}
    </div>
  );
}
