import { OrgContext } from '@/core/providers/org-context';
import { MemberContext } from '@/core/providers/member-context';
import { useContext, useState } from 'react';

export const useSetOrg = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { orgName, setOrgName, setIsNewOrg } = useContext(OrgContext);
  const { isLoading } = useContext(MemberContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === '') return;
    setOrgName(inputValue);
    setIsNewOrg(true);
  };

  return {
    orgName,
    loading: isLoading,
    handleInputChange,
    handleSubmit,
  };
};
