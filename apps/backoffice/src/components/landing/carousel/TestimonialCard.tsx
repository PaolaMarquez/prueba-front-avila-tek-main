import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialProps {
  name: string;
  company: string;
  position: string;
  stars: number;
  img: string;
}

interface Props {
  testimonial: TestimonialProps;
}

export default function TestimonialCard({ testimonial }: Props) {
  function showStars(stars: number) {
    const options = [1, 2, 3, 4, 5];

    return (
      <div className="flex gap-x-1 justify-start">
        {options.map((s, i) => {
          return (
            <StarIcon
              key={i}
              className={`w-4 ${s <= stars ? "text-white" : "text-transparent"}`}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="relative h-[28rem] w-80 flex justify-center">
      <img className="h-full w-full absolute" src={testimonial.img} />
      <div className="absolute w-64 max-h-max bottom-0 m-5 p-5 flex items-center border border-gray-200 backdrop-blur-md">
        <div className="">
          <h2 className="text-3xl font-[450] tracking-tight text-white sm:text-4xl">
            <div className="grid justify-start gap-y-6">
              {showStars(testimonial.stars)}
            </div>
          </h2>
          <p className="text-white text-2xl font-semibold py-3">
            {testimonial.name}
          </p>
          <p className="text-white text-sm font-semibold pb-0.5">
            {testimonial.company}
          </p>
          <p className="text-white text-xs">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
