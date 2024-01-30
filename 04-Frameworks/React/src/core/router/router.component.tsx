import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { switchRoutes } from '@/core/router/routes';

import { HomePage, ListPage, DetailPage } from '@/scenes';

export const RouterComponent: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={switchRoutes.root}
            element={<HomePage />}
          />
          <Route
            path={switchRoutes.list}
            element={<ListPage />}
          />
          <Route
            path={switchRoutes.details}
            element={<DetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
