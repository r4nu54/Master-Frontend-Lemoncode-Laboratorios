import { Pagination } from '@mui/material';

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-screen mb-3">
      <Pagination count={5} color="standard" variant="outlined" shape="circular" />
    </footer>
  );
};
