import { createContext, useState } from 'react';

import { OrgModel } from './index';

interface Props {
  children: React.ReactNode;
}

export const OrgContext = createContext<OrgModel>({
  orgName: '',
  setOrgName: () => {},
  isError: false,
  setIsError: () => {},
  isNewOrg: false,
  setIsNewOrg: () => {},
});

export const OrgProvider: React.FC<Props> = ({ children }) => {
  const [orgName, setOrgName] = useState<string>('Lemoncode');
  const [isError, setIsError] = useState<boolean>(false);
  const [isNewOrg, setIsNewOrg] = useState<boolean>(false);

  return (
    <OrgContext.Provider value={{ orgName, setOrgName, isError, setIsError, isNewOrg, setIsNewOrg }}>
      {children}
    </OrgContext.Provider>
  );
};
