import { Link } from 'react-router-dom';

import { routes } from '@/core';

import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';

import { MemberEntityApi } from '@/core/models';

export const CardComponent = (member: MemberEntityApi) => {
  return (
    <Card className='flex flex-col items-center w-[280px]'>
      <CardContent className='flex flex-col items-center gap-1'>
        <img
          className='w-32 h-32 border-4 border-[#1b5e20] rounded-full'
          src={member.avatar_url}
          alt={member.login}
        />
        <Typography className='mb-2'>{member.login}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='success'>
          <Link to={routes.details(member.login)}>Más info...</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
