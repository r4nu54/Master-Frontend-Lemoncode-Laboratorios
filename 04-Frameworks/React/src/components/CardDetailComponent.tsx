import { Link } from 'react-router-dom';
import { routes } from '@/core';
import { Button, Card, CardContent, CardActions, Typography, CardHeader, CardMedia } from '@mui/material';
import { MemberDetailApi } from '@/core/models';

export const CardDetailComponent = (memberDetail: MemberDetailApi) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={memberDetail.name ?? memberDetail.login}
        subheader={memberDetail.company ?? memberDetail.location}
      />
      <CardMedia component="img" image={memberDetail.avatar_url} alt={`${memberDetail.name} picture`} />
      <CardContent>
        <Typography variant="body2" component="p">
          {memberDetail.bio}
        </Typography>

        <CardActions>
          <Button variant="contained" color="success">
            <Link to={routes.list}>Vuelta al listado</Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
