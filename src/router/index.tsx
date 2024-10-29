import { Outlet, createBrowserRouter } from 'react-router-dom';
import { HomePage, DocPage } from '../pages';

export const router = () =>
  createBrowserRouter([
    {
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'doc',
          element: <DocPage />,
        },
      ],
    },
  ]);
