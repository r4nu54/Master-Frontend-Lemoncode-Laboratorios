import { Link } from 'react-router-dom';

import { routes } from '@/core';

import { Button, Box } from '@mui/material';

export const HomePageMenu = () => {
  return (
    <Box component="nav" className="flex justify-center items-center gap-3">
      <Button color="success" variant="contained">
        <Link to={routes.list}>GitHub API</Link>
      </Button>
      <Button color="success" variant="contained">
        <Link to={routes.list}>Rick and Morty API</Link>
      </Button>
    </Box>
  );
};
