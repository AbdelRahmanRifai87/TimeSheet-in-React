import { AlertList } from "./AlertList";
import { BlockoutList } from "./BlockoutsList";
import { ReportList } from "./ReportsList";

type DataLabel = "alerts" | "blockouts" | "reports";

export function DataList({ label, data }: { label: DataLabel; data: any[] }) {
  if (label === "alerts") return <AlertList alerts={data} />;
  if (label === "blockouts") return <BlockoutList blockouts={data} />;
  if (label === "reports") return <ReportList reports={data} />;
  return null;
}
