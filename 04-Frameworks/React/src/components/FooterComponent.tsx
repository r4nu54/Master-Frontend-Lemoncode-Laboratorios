import { Pagination } from '@mui/material';

export const FooterComponent: React.FC = () => {
  // export const FooterComponent: React.FC<FooterProps> = ({ currentPage, totalPages, onPageChange }) => {
  //   const handlePageChange = (page: number) => {
  //     onPageChange(page);
  //   };

  return (
    <footer className="flex place-content-center">
      <Pagination count={10} color="standard" variant="outlined" shape="rounded" />
    </footer>
  );
};
