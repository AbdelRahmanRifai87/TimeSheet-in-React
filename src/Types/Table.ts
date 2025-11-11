export type ColumnConfig<T> = {
  field: keyof T;
  header: string;
  body?: (row: T) => JSX.Element;
  className?: string;
  headerClassName?: string;
  style?: React.CSSProperties;
};

export type GeneralTableProps<T> = {
  data: T[];
  columns: ColumnConfig<T>[];
  loading?: boolean;
  striped?: boolean;
  className?: string;
};
