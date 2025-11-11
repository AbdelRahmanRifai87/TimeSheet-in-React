// {
//             id: "1",
//             staffName: "khalid",
//             ComplianceName: "VC",
//             LicenseReference: "959595263",
//             expDate: "Feb 23 2026",
//             complianceType: "Security License",
//           },
import type {
  ComplianceTableDataProps,
  ComplianceType,
} from "../Types/Compliance";
import GeneralTable from "./GeneralTable";
import type { ColumnConfig } from "../Types/Table";

export default function ComplianceWidgetTable({
  data,
}: {
  data: ComplianceType[];
}) {
  const columns: ColumnConfig<ComplianceType>[] = [
    { field: "staffName", header: "Staff Name" },
    { field: "ComplianceName", header: "Compliance Name" },
    { field: "LicenseReference", header: "License Reference" },
    { field: "expDate", header: "Expiry Date" },
    { field: "complianceType", header: "Compliance Type" },
    {
      field: "verify",
      header: "Verification",
      body: () => (
        <button
          className="w-[100%]  rounded-md bg-[#2E76BD] text-white text-sm py-2 px-3 font-medium cursor-pointer"
          style={{ width: "100%" }}
        >
          View & Verify
        </button>
      ),
    },
  ];
  return (
    <div className="w-full">
      {" "}
      <GeneralTable data={data} columns={columns} />
    </div>
  );
}
