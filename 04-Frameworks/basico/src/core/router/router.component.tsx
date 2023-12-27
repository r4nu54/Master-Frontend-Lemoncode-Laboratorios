import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { switchRoutes } from '@/core/router/routes';

import { ListPage, DetailPage } from '@/scenes';

export const RouterComponent: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={switchRoutes.root}
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
