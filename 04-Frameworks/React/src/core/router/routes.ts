import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  list: '/list',
  details: '/detail/:login',
};

interface Routes extends Omit<SwitchRoutes, 'details'> {
  details: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (login) => generatePath(switchRoutes.details, { login }),
};
