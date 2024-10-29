import { Outlet, createBrowserRouter } from 'react-router-dom';
import { HomePage, DocPage, InstallationPage, QuickStartPage } from '../pages';

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
          children: [
            {
              index: true,
              // path: 'installation',
              element: <InstallationPage />,
            },
            {
              path: 'quick-start',
              element: <QuickStartPage />,
            },
          ],
        },
      ],
    },
  ]);
