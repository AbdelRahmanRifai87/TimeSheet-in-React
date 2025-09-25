import { useMemo } from "react";
import { AlertItem } from "./Alert";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ adjust path if needed

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
  img: string | null;
}

export function AlertList({ alerts }: { alerts: Alert[] }) {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  // Use a sorting order map for clear prioritization
  const severityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  // Sort the alerts based on the severity order
  const sortedAlerts = useMemo(() => {
    return [...alerts].sort((a, b) => {
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  }, [alerts]);

  return (
    <div className="flex flex-col space-y-2 w-full">
      {sortedAlerts.map((alert, index) => (
        <AlertItem key={alert.id} order={index} alert={alert} />
      ))}
    </div>
  );
}
