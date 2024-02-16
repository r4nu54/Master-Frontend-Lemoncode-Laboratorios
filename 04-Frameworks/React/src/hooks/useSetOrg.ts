import { OrgContext } from '@/core/providers/org-context';
import { useContext, useState } from 'react';

export const useSetOrg = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const { orgName, setOrgName } = useContext(OrgContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === '') return;
    setOrgName(inputValue);
  };

  return {
    orgName,
    handleInputChange,
    handleSubmit,
  };
};
