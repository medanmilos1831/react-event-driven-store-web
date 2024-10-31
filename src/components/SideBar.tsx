import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
const navigation = [
  { name: 'Installation', to: '', icon: HomeIcon, current: true },
  { name: 'Quick Start', to: 'quick-start', icon: UsersIcon, current: false },
  {
    name: 'Event Store Provider',
    to: 'event-store-provider',
    icon: UsersIcon,
  },
  {
    name: 'Mutations',
    to: 'mutations',
    icon: UsersIcon,
  },
  {
    name: 'Selector',
    to: 'selector',
    icon: UsersIcon,
  },
  {
    name: 'Event emitter',
    to: 'event-emitter',
    icon: UsersIcon,
  },
  {
    name: 'Example',
    to: 'example',
    icon: UsersIcon,
  },
];
export const SideBar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
        </div>
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
