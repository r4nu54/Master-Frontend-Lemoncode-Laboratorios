import { Typography, Container } from '@mui/material';
import { HomePageMenu } from './components';

export const HomePage = () => {
  return (
    <Container component="main" maxWidth="md">
      <section
        className="flex flex-col items-center min-h-screen gap-5 place-content-center"
        aria-labelledby="main-title"
      >
        <Typography
          variant="h2"
          component="h1"
          className="text-center"
          id="main-title"
        >
          Explorador de Organizaciones GitHub
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-center text-gray-600"
        >
          Busca y explora información de organizaciones en GitHub
        </Typography>
        <HomePageMenu />
      </section>
    </Container>
  );
};
