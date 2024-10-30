import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  DocPage,
  InstallationPage,
  QuickStartPage,
  EventStoreProviderPage,
} from '../pages';
import { EventStoreProvider } from 'react-event-driven-store';

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
              element: <InstallationPage />,
            },
            {
              path: 'quick-start',
              element: <QuickStartPage />,
            },
            {
              path: 'event-store-provider',
              element: <EventStoreProviderPage />,
            },
          ],
        },
      ],
    },
  ]);
