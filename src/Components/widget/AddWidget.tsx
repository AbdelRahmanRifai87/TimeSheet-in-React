// components/AddWidget.tsx
import { useState } from "react";
import { useDarkModeStore } from "../../Theme/useDarkModeStore";
import { AppIcon } from "../../icons";
import type { DataLabel } from "../../Types/Widgets";

export default function AddWidget({
  onAdd,
}: {
  onAdd: (label: DataLabel) => void;
}) {
  const [value, setValue] = useState<DataLabel>("alerts");
  const styles = useDarkModeStore((s) => s.styles);

  return (
    <div className="flex items-center gap-2">
      <select
        className="border rounded px-2 py-1 text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value as DataLabel)}
      >
        <option value="alerts">Alerts</option>
        <option value="blockouts">Blockouts</option>
        <option value="resourceAlerts">Resource Alerts</option>
        <option value="keyDispatch">Key Dispatch</option>
        <option value="welfare">Welfare</option>
        <option value="accShift">Accepted Shifts</option>
        <option value="decShift">Declined Shifts</option>
        <option value="unaShift">Unaccepted Shifts</option>
        <option value="compliance">Compliance</option>
      </select>

      <button
        onClick={() => onAdd(value)}
        style={{ backgroundColor: styles.mainBtn, color: styles.sidebarText }}
        className="cursor-pointer font-semibold p-3 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
      >
        <AppIcon name="add" size={20} />
        <span className="text-sm font-medium">Add widget</span>
      </button>
    </div>
  );
}
