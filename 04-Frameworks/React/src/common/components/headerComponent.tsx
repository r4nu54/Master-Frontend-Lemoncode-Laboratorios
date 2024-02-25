import { Link } from 'react-router-dom';
import { routes } from '@/core';
import { AppBar, Button, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';

export const HeaderComponent: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar className="flex gap-5">
          <Button startIcon={<HomeIcon />} variant="contained" color="success">
            <Link to={routes.root}>Home</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
