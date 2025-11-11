// components/GeneralTable.tsx
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import type { GeneralTableProps } from "../Types/Table";

export default function GeneralTable<T>({
  data,
  columns,
  loading = false,
  striped = true,
  className = "",
}: GeneralTableProps<T>) {
  return (
    <div
      className={`rounded-xl border border-gray-200 shadow-sm overflow-hidden ${className}`}
    >
      <DataTable
        value={data}
        stripedRows={striped}
        loading={loading}
        showGridlines
        className="custom-table text-sm"
      >
        {columns.map((col, i) => (
          <Column
            key={i}
            field={col.field as string}
            header={col.header}
            body={col.body}
            style={col.style}
            className={col.className}
            headerClassName={col.headerClassName}
          />
        ))}
      </DataTable>
    </div>
  );
}
