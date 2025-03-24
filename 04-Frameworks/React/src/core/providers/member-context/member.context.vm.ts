import { MemberEntityApi } from '@/pods/github-list/api';

export interface MembersEntityApi {
  members: MemberEntityApi[];
  setMembers: (users: MemberEntityApi[]) => void;
  isLoading: boolean;
}
