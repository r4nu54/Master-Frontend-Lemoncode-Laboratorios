export interface OrgModel {
  orgName: string;
  setOrgName: (orgName: string) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  isNewOrg: boolean;
  setIsNewOrg: (isNewOrg: boolean) => void;
}
