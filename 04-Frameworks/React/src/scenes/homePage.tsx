import { Link } from 'react-router-dom';

import { routes } from '@/core';

import { Button } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <section className='flex flex-col items-center h-screen gap-5 place-content-center '>
        <h1 className='text-2xl mb-28'>Laboratorio Modulo Frameworks - React</h1>
        <Button
          variant='contained'
          color='success'>
          <Link to={routes.list}>GitHub Members List</Link>
        </Button>
      </section>
    </>
  );
};
