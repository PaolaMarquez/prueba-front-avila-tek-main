import React from "react";
import TitleDescription from "../general/TitleDescription";

const stats = [
  { id: 1, name: "Projects completed", value: "400+" },
  { id: 2, name: "Return on investment", value: "600%" },
  { id: 3, name: "Global downloads", value: "10k" },
];

export default function Stats() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto text-center lg:mt-32 px-2">
        <TitleDescription
          title={"Unleash the full power of data"}
          description={
            "Everything you need to convert, engage, and retain more users."
          }
        />
      </div>
      <div className="py-12 sm:pt-16">
        <div className="mx-8 max-w-7xl px-6 lg:mx-28 py-16 bg-slate-50 rounded-xl">
          <dl className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-5"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-700">
                  {stat.name}
                </dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-purpleText sm:text-[56px]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
