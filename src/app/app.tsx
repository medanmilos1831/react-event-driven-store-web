import { RouterProvider } from 'react-router-dom';
import { router } from '../router';

export const App = () => {
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router()} />
      {/* <HeroHeader /> */}
    </div>
  );
};
