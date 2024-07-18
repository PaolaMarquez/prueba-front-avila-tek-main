import ItemGrid from "./ItemGrid";
import TitleDescription from "@/components/landing/general/TitleDescription";

interface featureProps {
  img: string | JSX.Element;
  name: string;
  description: string;
  href: string;
}

interface cardProps {
  features: featureProps[];
  info: string;
  title: string;
  description: string;
  arrow: string;
}

export default function GridCard({
  features,
  info,
  title,
  description,
  arrow,
}: cardProps) {
  return (
    <div className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mx-auto max-w-3xl text-center px-1">
          <div className="max-w-28 mb-3 text-sm font-medium leading-7 text-purpleText bg-slate-50 border rounded-2xl text-center px-2">
            {info}
          </div>
          <TitleDescription
            title={title}
            description={description}
            classNameDesc="lg:text-center"
          />
        </div>
        {/* Iteración */}
        <div className="grid mx-auto mt-12 max-w-full sm:mt-14 lg:mt-16 place-items-center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:max-w-none md:grid-cols-3 md:gap-y-16 place-items-center">
            {features.map((feature, i) => (
              <ItemGrid
                key={i}
                img={feature.img}
                name={feature.name}
                description={feature.description}
                href={feature.href}
                arrow={arrow}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
