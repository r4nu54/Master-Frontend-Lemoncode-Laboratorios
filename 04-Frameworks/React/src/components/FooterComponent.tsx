import { Pagination } from '@mui/material';

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex place-content-center">
      <Pagination count={10} color="standard" variant="outlined" shape="rounded" />
    </footer>
  );
};
