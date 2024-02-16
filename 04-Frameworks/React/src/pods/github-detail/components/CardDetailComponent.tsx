import { Link } from 'react-router-dom';
import { routes } from '@/core';
import { Button, Card, CardContent, Typography, CardHeader, CardMedia } from '@mui/material';
import { MemberDetailApi } from '@/core/models';

export const CardDetailComponent = (memberDetail: MemberDetailApi) => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <Card className="flex" sx={{ maxWidth: 600 }}>
        <CardHeader
          className="flex flex-col justify-center items-center gap-2"
          title={memberDetail.name ?? memberDetail.login}
          subheader={memberDetail.company ?? memberDetail.location}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {memberDetail.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Repositorios: {memberDetail.public_repos}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Twitter: {memberDetail.twitter_username ? memberDetail.twitter_username : 'No disponible'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Seguidores: {memberDetail.followers}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={memberDetail.avatar_url}
          alt={`${memberDetail.name} picture`}
        />
      </Card>
      <Button variant="contained" color="success">
        <Link to={routes.list}>Atras</Link>
      </Button>
    </section>
  );
};
