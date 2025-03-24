import { Link } from 'react-router-dom';
import { routes } from '@/core';
import { Button, Card, CardContent, CardActions, Typography, Box } from '@mui/material';
import { MemberEntityApi } from '@/pods/github-list/';

export const GitHubListMemberCardComponent = (member: MemberEntityApi) => {
  return (
    <Card
      className="flex flex-col items-center w-[280px] hover:shadow-lg transition-shadow"
      component="article"
      role="article"
      aria-label={`Perfil de ${member.login}`}
      tabIndex={0}
    >
      <CardContent className="flex flex-col items-center gap-1 w-full">
        <Box className="relative">
          <img
            className="w-32 h-32 border-4 border-[#1b5e20] rounded-full"
            src={member.avatar_url}
            alt={`Foto de perfil de ${member.login}`}
            loading="lazy"
            width={128}
            height={128}
          />
          <div className="sr-only">Imagen de perfil del usuario</div>
        </Box>
        <Typography
          component="h2"
          variant="h6"
          className="mb-2 text-center"
          aria-label={`Nombre de usuario: ${member.login}`}
        >
          {member.login}
        </Typography>
      </CardContent>
      <CardActions className="w-full justify-center pb-4">
        <Button
          variant="contained"
          color="success"
          aria-label={`Ver más información sobre ${member.login}`}
          className="w-full max-w-[200px]"
          component={Link}
          to={routes.details(member.login)}
        >
          <span aria-hidden="true">Más info</span>
          <span className="sr-only">Ver perfil completo de {member.login}</span>
        </Button>
      </CardActions>
    </Card>
  );
};
