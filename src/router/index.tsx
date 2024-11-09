import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  DocPage,
  InstallationPage,
  QuickStartPage,
  EventStoreProviderPage,
  MutationsPage,
  SelectorPage,
  EventEmitterPage,
  ExamplePage,
  NotFound,
} from '../pages';

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
          path: '/doc',
          element: <DocPage />,
          children: [
            {
              path: 'installation',
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
            {
              path: 'mutations',
              element: <MutationsPage />,
            },
            {
              path: 'selector',
              element: <SelectorPage />,
            },
            {
              path: 'event-emitter',
              element: <EventEmitterPage />,
            },
            {
              path: 'example',
              element: <ExamplePage />,
            },
            {
              index: true,
              element: <NotFound />,
            },
            {
              path: '*',
              element: <NotFound />,
            },
          ],
        },
        {
          path: '/doc/*',
          element: <NotFound />,
        },
      ],
    },
  ]);
