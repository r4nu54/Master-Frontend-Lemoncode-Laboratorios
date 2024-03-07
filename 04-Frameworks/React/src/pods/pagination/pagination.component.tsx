import { useContext } from 'react';
import { PaginationContext, OrgContext } from '@/core/providers';
import Pagination from '@mui/material/Pagination';

export const PaginationComponent = () => {
  const { isError } = useContext(OrgContext);
  const { setCurrentPage, currentPage, lastPage } = useContext(PaginationContext);

  console.log(currentPage);
  console.log(lastPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      {!isError && (
        <Pagination count={lastPage} page={currentPage} variant="outlined" shape="rounded" onChange={handleChange} />
      )}
    </>
  );
};
