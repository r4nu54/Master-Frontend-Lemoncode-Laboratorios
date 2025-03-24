import { createContext, useContext, useEffect, useState } from 'react';
import { getMembersByOrg, MemberEntityApi } from '@/pods/github-list';
import { MembersEntityApi } from './index';
import { OrgContext, PaginationContext } from '@/core/providers';
import { AxiosError } from 'axios';

interface Props {
  children: React.ReactNode;
}

export const MemberContext = createContext<MembersEntityApi>({
  members: [],
  setMembers: () => { },
  isLoading: false,
});

export const MemberProvider: React.FC<Props> = ({ children }) => {
  const [members, setMembers] = useState<MemberEntityApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { orgName, setIsError, isNewOrg, setIsNewOrg } = useContext(OrgContext);
  const { currentPage, setCurrentPage, setLastPage, perPage } = useContext(PaginationContext);

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true);
      try {
        const { data, lastPageApi } = await getMembersByOrg(orgName, perPage, currentPage);
        setMembers(data);
        if (lastPageApi) {
          setLastPage(lastPageApi);
        }
        if (isNewOrg) {
          setCurrentPage(1);
          setIsNewOrg(false);
        }
        setIsError(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 404) {
          setIsError(true);
          setMembers([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [orgName, currentPage]);

  return (
    <MemberContext.Provider value={{ members, setMembers, isLoading }}>
      {children}
    </MemberContext.Provider>
  );
};
