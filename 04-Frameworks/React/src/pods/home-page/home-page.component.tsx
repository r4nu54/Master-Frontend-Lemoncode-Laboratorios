import { Typography } from '@mui/material';
import { HomePageMenu } from './components';

export const HomePage = () => {
  return (
    <section className="flex flex-col items-center h-screen gap-5 place-content-center ">
      <Typography variant="h2">Laboratorio Modulo Frameworks - React</Typography>
      <Typography variant="subtitle1">Elige una de las siguientes opciones:</Typography>
      <HomePageMenu />
    </section>
  );
};
