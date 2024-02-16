import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { switchRoutes } from '@/core/router/routes';

import { HomePage } from '@/pods/home-page';
import { ListPage } from '@/pods/github-list';
import { DetailPage } from '@/pods/github-detail';

export const RouterComponent: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={switchRoutes.root} element={<HomePage />} />
          <Route path={switchRoutes.list} element={<ListPage />} />
          <Route path={switchRoutes.details} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
