import { Link, useParams } from 'react-router-dom';
import { routes } from '@/core/router/routes';
import { MembersProvider } from '@/core/providers';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { getMembersByLogin } from '@/core/api';
import { MemberDetailApi } from '@/core/models';

export const DetailPage: React.FC = () => {
  const [detail, setDetail] = useState<MemberDetailApi>();

  useEffect(() => {
    console.log(detail);
    getMembersByLogin(login).then(setDetail);
  }, [login]);

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
