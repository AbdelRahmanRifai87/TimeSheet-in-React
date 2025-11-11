// import { AlertList } from "./AlertList";
// import { BlockoutList } from "./BlockoutsList";
// import { ReportList } from "./ReportsList";
// import type { DataLabel } from "../Types/Widgets";

// // type DataLabel = "alerts" | "blockouts" | "reports";

// export function DataList({ label, data }: { label: DataLabel; data: any[] }) {
//   if (label === "alerts") return <AlertList alerts={data} />;
//   if (label === "blockouts") return <BlockoutList blockouts={data} />;
//   if (label === "reports") return <ReportList reports={data} />;
//   return null;
// }
// src/Components/widget/DataList.tsx
import { AlertList } from "./AlertList";
import { BlockoutList } from "./BlockoutsList";
// import { ReportList } from "./ReportsList";
import type { DataLabel } from "../Types/Widgets";
import type { ReactElement } from "react";
import Welfare from "./Welfare";
import { WelfareList } from "./WelfareList";
import { ShiftList } from "./ShiftList";
import ComplianceWidgetTable from "./ComplianceWidgetTable";

const RENDERERS: Record<DataLabel, (data: any[]) => ReactElement> = {
  alerts: (data) => <AlertList alerts={data} />,
  blockouts: (data) => <BlockoutList blockouts={data} />,
  welfare: (data) => <WelfareList welfare={data} />,
  resourceAlerts: (data) => <AlertList alerts={data} />,
  keyDispatch: (data) => <AlertList alerts={data} />,
  accShift: (data) => <ShiftList shifts={data} />,
  unaShift: (data) => <ShiftList shifts={data} />,
  decShift: (data) => <ShiftList shifts={data} />,
  compliance: (data) => <ComplianceWidgetTable data={data} />,
};
console.log("RENDERERS:", RENDERERS);

export function DataList({ label, data }: { label: DataLabel; data: any[] }) {
  const render = RENDERERS[label];
  if (!render)
    return <div style={{ opacity: 0.6 }}>No renderer for: {label}</div>;
  console.log("Rendering data for label:", label, data);
  return render(data);
}
