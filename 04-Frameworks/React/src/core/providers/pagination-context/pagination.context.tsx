import { createContext, useState } from 'react';

import { PaginationModel } from './index';

interface Props {
  children: React.ReactNode;
}

export const PaginationContext = createContext<PaginationModel>({
  currentPage: 1,
  perPage: 0,
  lastPage: 0,
  setCurrentPage: () => {},
  setLastPage: () => {},
});

export const PaginationProvider: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const perPage = 6;

  return (
    <PaginationContext.Provider value={{ currentPage, lastPage, setCurrentPage, setLastPage, perPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
