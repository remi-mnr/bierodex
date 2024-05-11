import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, useLocation } from 'react-router-dom';
import { AppBar } from '../shared/AppBar';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const MemoBiere = lazy(() => import('../screen/MemoBiere'));
const Dex = lazy(() => import('../dex/Dex'));

function Layout() {
  const location = useLocation();

  return (
    <div className="grid place-content-center h-screen w-screen">
      <div className="flex flex-col w-screen h-screen max-w-lg max-h-120 border-2 border-black">
        <Outlet />
      </div>
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'MemoBiere',
          element: <MemoBiere />
        },
        {
          path: 'Dex',
          element: <Dex />
        },
        {
          index: true,
          element: <MemoBiere />
        },
      ]
    }
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
