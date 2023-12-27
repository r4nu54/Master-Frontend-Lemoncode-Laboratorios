import { Link, useParams } from 'react-router-dom';
import { routes } from '@/core/router/routes';

import { AppLayout } from '@/layouts/app.layout';

import { Card, CardHeader, buttonVariants } from '@/components/ui';

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <AppLayout>
      <Card>
        <CardHeader></CardHeader>
        <h3>Id: {id}</h3>
        <Link
          className={buttonVariants({ variant: 'destructive', size: 'lg' })}
          to={routes.root}
        >
          Atras
        </Link>
      </Card>
    </AppLayout>
  );
};
