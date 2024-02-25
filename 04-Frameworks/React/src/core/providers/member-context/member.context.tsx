import { createContext, useContext, useEffect, useState } from 'react';
import { getMembersByOrg } from '@/pods/github-list/api';
import { MemberEntityApi } from '@/pods/github-list/api';
import { MembersEntityApi } from './index';
import { OrgContext } from '@/core/providers/org-context';
import { PaginationContext } from '@/core/providers/pagination-context';

interface Props {
  children: React.ReactNode;
}

export const MemberContext = createContext<MembersEntityApi>({
  members: [],
  setMembers: () => {},
});

export const MemberProvider: React.FC<Props> = ({ children }) => {
  const [members, setMembers] = useState<MemberEntityApi[]>([]);

  const { orgName, setIsError } = useContext(OrgContext);
  const { currentPage, perPage } = useContext(PaginationContext);

  useEffect(() => {
    getMembersByOrg(orgName, perPage, currentPage)
      .then(setMembers)
      .then(() => setIsError(false))
      .catch(error => {
        if (error.response.status === 404) {
          setIsError(true);
        }
      });
  }, [orgName, currentPage, setIsError]);
  return <MemberContext.Provider value={{ members, setMembers }}>{children}</MemberContext.Provider>;
};
