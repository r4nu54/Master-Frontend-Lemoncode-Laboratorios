import { Link } from 'react-router-dom';
import { routes } from '@/core/router/routes';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';

export const MemberDetailComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Card>
        <CardContent>
          <Typography
            variant='h5'
            component='h2'>
            {login}
          </Typography>
          <Typography
            variant='body2'
            component='p'>
            {'description'}
          </Typography>
          <Button
            variant='contained'
            color='success'>
            <Link to={routes.list}>Atrás</Link>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
