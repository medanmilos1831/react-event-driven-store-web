import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
  InstallationPage,
  QuickStartPage,
  EventStoreProviderPage,
  MutationsPage,
  SelectorPage,
  EventEmitterPage,
  ExamplePage,
  NotFound,
} from '../pages';
import { SideBar } from '../components';

export const router = () =>
  createBrowserRouter(
    [
      {
        element: (
          <div className="h-full w-full">
            <SideBar />

            <div className="w-full h-full relative">
              <div className="lg:pl-72 h-full">
                <main
                  className="py-10 w-full h-full"
                  style={{
                    backgroundColor: '#030712',
                  }}
                >
                  <div className="w-full h-full">
                    <Outlet />
                  </div>
                </main>
              </div>
            </div>
          </div>
        ),
        path: '/',
        children: [
          {
            path: '/',
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
            path: '/*',
            element: <NotFound />,
          },
        ],
      },
    ],
    {
      basename: '/react-event-driven-store-web/',
    }
  );
