import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationContext } from '@/core/providers/pagination-context';

export const PaginationComponent = () => {
  const { setCurrentPage, currentPage } = useContext(PaginationContext);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <Pagination count={5} variant="outlined" shape="rounded" />
    </>
  );
};
