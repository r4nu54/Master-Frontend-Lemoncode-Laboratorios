import { createContext, useState } from 'react';

import { OrgModel } from '@/core/providers/org.vm';

interface Props {
  children: React.ReactNode;
}

export const OrgContext = createContext<OrgModel>({ orgName: 'lemoncode', setOrgName: () => {} });

export const OrgProvider: React.FC<Props> = ({ children }) => {
  const [orgName, setOrgName] = useState<string>('lemoncode');

  console.log(orgName);
  return <OrgContext.Provider value={{ orgName, setOrgName }}>{children}</OrgContext.Provider>;
};
