import { createContext, useContext, useEffect, useState } from 'react';
import { getMembersByOrg } from '@/pods/github-list/api';
import { MemberEntityApi } from '@/pods/github-list/api';
import { MembersEntityApi } from './index';
import { OrgContext } from '@/core/providers/org-context';

interface Props {
  children: React.ReactNode;
}

export const MemberContext = createContext<MembersEntityApi>({
  members: [],
  setMembers: () => {},
});

export const MemberProvider: React.FC<Props> = ({ children }) => {
  const { orgName } = useContext(OrgContext);
  const [members, setMembers] = useState<MemberEntityApi[]>([]);

  useEffect(() => {
    getMembersByOrg(orgName).then(setMembers);
  }, [orgName]);
  return <MemberContext.Provider value={{ members, setMembers }}>{children}</MemberContext.Provider>;
};
