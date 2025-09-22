import { AlertList } from "./AlertList";
import { BlockoutList } from "./BlockoutsList";
import { ReportList } from "./ReportsList";

type DataLabel = "alerts" | "blockouts" | "reports";

export function DataList({
  label,
  data,
  isDarkMode = false,
}: {
  label: DataLabel;
  data: any[];
  isDarkMode?: boolean;
}) {
  if (label === "alerts")
    return <AlertList alerts={data} isDarkMode={isDarkMode} />;
  if (label === "blockouts")
    return <BlockoutList blockouts={data} isDarkMode={isDarkMode} />;
  if (label === "reports")
    return <ReportList reports={data} isDarkMode={isDarkMode} />;
  return null;
}
