import { Pagination } from '@mui/material';

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-screen bottom-0 fixed p-5">
      <Pagination count={10} color="standard" variant="outlined" shape="rounded" />
    </footer>
  );
};
