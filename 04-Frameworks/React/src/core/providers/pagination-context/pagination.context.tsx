import { createContext, useState } from 'react';

import { PaginationModel } from './index';

interface Props {
  children: React.ReactNode;
}

export const PaginationContext = createContext<PaginationModel>({
  currentPage: 1,
  perPage: 8,
  setCurrentPage: () => {},
});

export const PaginationProvider: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const perPage = 8;

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage, perPage }}>{children}</PaginationContext.Provider>
  );
};
