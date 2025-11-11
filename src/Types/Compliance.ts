export interface ComplianceType {
  id: string;
  staffName: string;
  ComplianceName: string;
  LicenseReference: string;
  expDate: string;
  complianceType: string;
  verify: boolean;
}
export interface ComplianceTableDataProps {
  data: ComplianceType[];
}
