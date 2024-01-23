import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkClass = (isActive) =>
    `inline-flex items-center border-b-2 ${
      isActive ? "border-orange-600" : "border-transparent"
    } px-1 pt-1 text-sm font-light text-gray-900 hover:border-orange-600 tracking-wider`;

  return (
    <Disclosure as="nav" className="bg-white fixed top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) => linkClass(isActive)}
                >
                  ACCUEIL
                </NavLink>
                <NavLink
                  to="/favoris"
                  className={({ isActive }) => linkClass(isActive)}
                >
                  FAVORIS
                </NavLink>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-base font-medium ${
                    isActive
                      ? "text-gray-700 border-l-4 border-orange-500"
                      : "text-gray-500"
                  }`
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/favoris"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-base font-medium ${
                    isActive
                      ? "text-gray-700 border-l-4 border-orange-500"
                      : "text-gray-500"
                  }`
                }
              >
                Favoris
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
