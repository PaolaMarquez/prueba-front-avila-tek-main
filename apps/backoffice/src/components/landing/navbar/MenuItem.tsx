import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {} from "@heroicons/react/20/solid";
import {
  ChevronDownIcon,
  BookOpenIcon,
  SparklesIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Blog",
    description: "The latest industry news, updates and info.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Customer stories",
    description: "Learn how our customers are making big changes.",
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Video tutorials",
    description: "Get up and running on new features and techniques.",
    href: "#",
    icon: PlayCircleIcon,
  },
];

interface MenuItemProps {
  name: string;
}

export default function MenuItem({ name }: MenuItemProps) {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>{name}</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-28 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex w-screen max-w-[38rem] flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="py-6 px-4">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-4 rounded-lg p-2 hover:bg-gray-50"
              >
                <div className="mt-1 flex flex-none justify-center rounded-lg bg-white group-hover:bg-gray-50">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-purpleText"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-sm font-light leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 max-w-72">
            <div className="grid gap-y-2">
              <div className="pr-3 py-3">
                <img className="rounded-md" src="MenuItem.png" />
              </div>
              <p className="font-semibold text-base">
                We've just release an update!
              </p>
              <p className="font-light text-gray-700">
                Check out the all new dashboard view. Pages now load faster.
              </p>
              <div className="flex gap-x-3 font-semibold text-sm">
                <p className="text-gray-500">Dissmiss</p>
                <p className="text-purpleText">Changelog</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
