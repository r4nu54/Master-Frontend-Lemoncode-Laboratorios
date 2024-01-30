import { Link, useParams } from 'react-router-dom';
import { routes } from '@/core/router/routes';

import { Box, Card, CardContent, Typography } from '@mui/material';

export const DetailPage: React.FC = () => {
  const { login } = useParams<{ login: string }>();
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
          <Link to={routes.list}>Atrás</Link>
        </CardContent>
      </Card>
    </Box>
  );
};
