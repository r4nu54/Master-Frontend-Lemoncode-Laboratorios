import { createContext, useContext, useEffect, useState } from 'react';
import { getMembersByOrg, MemberEntityApi } from '@/pods/github-list';
import { MembersEntityApi } from './index';
import { OrgContext, PaginationContext } from '@/core/providers';
import { LastPage } from '@mui/icons-material';

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
  const { currentPage, setLastPage, perPage } = useContext(PaginationContext);

  useEffect(() => {
    getMembersByOrg(orgName, perPage, currentPage)
      .then(({ data, lastPageApi }) => {
        setMembers(data);
        if (!lastPageApi) return;
        setLastPage(lastPageApi);
      })
      .then(() => setIsError(false))
      .catch(error => {
        if (error.response?.status === 404) {
          setIsError(true);
        }
      });
  }, [orgName, LastPage, currentPage, setIsError]);
  return <MemberContext.Provider value={{ members, setMembers }}>{children}</MemberContext.Provider>;
};
