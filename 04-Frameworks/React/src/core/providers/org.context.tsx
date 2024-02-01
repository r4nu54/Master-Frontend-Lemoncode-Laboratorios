import { createContext, useState } from 'react';

import { OrgModel } from '@/core/models';

interface Props {
  children: React.ReactNode;
}

export const OrgContext = createContext<OrgModel>({ orgName: '', setOrgName: () => {} });

export const OrgProvider: React.FC<Props> = ({ children }) => {
  const [orgName, setOrgName] = useState<string>('Lemoncode');

  return <OrgContext.Provider value={{ orgName: orgName, setOrgName }}>{children}</OrgContext.Provider>;
};
