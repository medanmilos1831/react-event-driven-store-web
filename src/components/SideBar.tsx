import { NavLink } from 'react-router-dom';
const navigation = [
  { name: 'Installation', to: '' },
  { name: 'Quick Start', to: 'quick-start' },
  {
    name: 'Event Store Provider',
    to: 'event-store-provider',
  },
  {
    name: 'Mutations',
    to: 'mutations',
  },
  {
    name: 'Selector',
    to: 'selector',
  },
  {
    name: 'Event emitter',
    to: 'event-emitter',
  },
  {
    name: 'Example',
    to: 'example',
  },
];
export const SideBar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center"></div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.to}>
                      {({ isActive }) => {
                        return (
                          <span
                            className={`${
                              isActive ? 'text-white' : 'text-gray-500'
                            }`}
                          >
                            {item.name}
                          </span>
                        );
                      }}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
