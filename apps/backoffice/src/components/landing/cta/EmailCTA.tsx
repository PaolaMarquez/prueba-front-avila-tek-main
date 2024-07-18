import Button from "@/components/landing/general/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Chart from "../charts/Chart";

export default function EmailCTA() {
  return (
    <div className="relative mb-20 lg:mb-10">
      <div className="flex flex-col mt-32 bg-purple w-4xl rounded-2xl mx-2 sm:mx-4 lg:mx-28 justify-center items-center text-center gap-y-5 px-5 lg:px-44 pt-20 pb-32 lg:pb-48">
        <p className="text-5xl lg:text-7xl text-white font-semibold">
          Grow your users.
        </p>
        <p className="text-5xl lg:text-7xl text-gray-300 font-semibold">
          Smarter.
        </p>
        <p className="text-md lg:text-xl text-gray-300 font-normal">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="w-full lg:w-7/12">
          <div className="flex mt-3 gap-x-2">
            <div className="relative w-full">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <QuestionMarkCircleIcon className="w-4 h-4 tooltip absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Button
              className="bg-purpleText text-white hover:bg-hoverPurple min-w-28"
              children={<p>Get started</p>}
            />
          </div>
          <a className="block text-sm font-normal leading-6 text-gray-300 text-left mt-1">
            We care about your data in our{" "}
            <span className="underline">privacy policy</span>
          </a>
        </div>
      </div>
      <div className="w-full top-4 right-4 z-50">
        <Chart />
      </div>
    </div>
  );
}
