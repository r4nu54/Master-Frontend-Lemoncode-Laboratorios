import { Link } from 'react-router-dom';
import { routes } from '@/core';
import { Button, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const HomePageMenu = () => {
  return (
    <Box
      component="nav"
      className="flex flex-col items-center gap-4"
      aria-label="Menú principal"
    >
      <Typography variant="h6" component="h2" className="text-center">
        Selecciona una opción:
      </Typography>
      <Button
        color="success"
        variant="contained"
        size="large"
        startIcon={<GitHubIcon aria-hidden="true" />}
        className="min-w-[200px]"
      >
        <Link
          to={routes.list}
          className="w-full h-full flex items-center justify-center"
          aria-label="Explorar organizaciones de GitHub"
        >
          GitHub API
        </Link>
      </Button>
    </Box>
  );
};
