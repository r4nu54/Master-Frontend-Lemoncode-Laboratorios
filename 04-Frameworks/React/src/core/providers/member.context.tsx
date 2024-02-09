import { createContext, useContext, useEffect, useState } from 'react';
import { getMembersByOrg } from '@/core/api';
import { MembersEntityApi, MemberEntityApi } from '@/core/models';
import { OrgContext } from './org.context';

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
