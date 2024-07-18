import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface itemProps {
  key: number;
  img: string | JSX.Element;
  name: string;
  description: string;
  href: string;
  arrow: string;
}

export default function ItemGrid({
  img,
  name,
  description,
  href,
  arrow,
}: itemProps) {
  return (
    <div className="flex flex-col max-w-[340px] justify-center items-center gap-y-2">
      <div className="flex h-14 w-14 p-2 items-center justify-center rounded-lg bg-white border">
        {typeof img === "string" ? (
          <img src={img} aria-hidden="true" className="text-white" />
        ) : (
          img
        )}
      </div>
      <dt className="text-lg font-semibold leading-7 text-gray-900">{name}</dt>
      <dd className="text-sm text-center leading-7 text-gray-600">
        {description}
      </dd>
      <a
        href={href}
        className="flex gap-x-2 items-center font-semibold text-sm text-purpleText"
      >
        {arrow}
        <ArrowRightIcon className="w-4" />
      </a>
    </div>
  );
}
