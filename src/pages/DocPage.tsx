import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Scroll, SideBar } from '../components';

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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const DocPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-full w-full">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
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
                            <Link
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="h-6 w-6 shrink-0"
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <SideBar />

        <div className="w-full h-full relative">
          <div className="lg:pl-72 h-full">
            <main
              className="py-10 w-full h-full"
              style={{
                backgroundColor: '#030712',
              }}
            >
              <Scroll>
                <div className="px-4 sm:px-6 lg:px-20 w-full h-full">
                  <Outlet />
                </div>
              </Scroll>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
