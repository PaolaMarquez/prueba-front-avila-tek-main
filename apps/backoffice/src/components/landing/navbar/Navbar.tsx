"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/landing/general/Button";
import MenuItem from "./MenuItem";
import Logo from "@/components/landing/general/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigation = [
    { name: "Home", href: "#" },
    {
      name: "Products",
      href: "#",
      icon: <ChevronDownIcon className="w-4" />,
    },
    { name: "Resources", href: "#", icon: <ChevronDownIcon className="w-4" /> },
    { name: "Pricing", href: "#" },
  ];

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-6 mx-2 sm:mx-4 lg:mx-28"
        >
          <div className={`w-full lg:w-fit flex justify-between items-center`}>
            <div className="flex lg:flex-1 ">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <Logo mobileMenuOpen={mobileMenuOpen} />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden px-12 lg:flex lg:gap-x-10">
              {navigation.map((item, i) => {
                return <MenuItem key={i} name={item.name} />;
              })}
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-2">
            <Button
              children={<span>Log in</span>}
              className="bg-white text-black focus-visible:outline-white min-w-min"
            />
            <Button
              children={<span>Sign up</span>}
              className="bg-purpleText text-white shadow-sm hover:bg-purple focus-visible:outline-purpleText min-w-min"
            />
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className={`h-6 w-6`} />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
