export interface UserPagePermission {
  userId: number;
  pageId: number;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
