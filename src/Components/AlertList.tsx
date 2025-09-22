import { AlertItem } from "./Alert";

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
}

export function AlertList({
  alerts,
  isDarkMode = false,
}: {
  alerts: Alert[];
  isDarkMode?: boolean;
}) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}
