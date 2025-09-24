import { AlertItem } from "./Alert";
import { useDarkModeStore } from "../Theme/useDarkModeStore"; // ✅ adjust path if needed

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: "high" | "medium" | "low";
}

export function AlertList({ alerts }: { alerts: Alert[] }) {
  // ✅ Get dark mode state from Zustand
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  return (
    <div className="flex flex-col space-y-2 w-full">
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} />
        // ✅ no need to pass isDarkMode anymore
      ))}
    </div>
  );
}
