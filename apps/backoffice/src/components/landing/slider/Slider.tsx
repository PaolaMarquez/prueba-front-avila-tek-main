"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface CommentProps {
  stars: number;
  comment: string;
  name: string;
  position: string;
  img: string;
}

const slides: CommentProps[] = [
  {
    stars: 3,
    comment:
      "Good overall experience. Some minor improvements could enhance the user interface.",
    name: "Michael Chang",
    position: "Software Developer, CodeCrafters Ltd.",
    img: "https://i.pinimg.com/564x/34/91/36/349136075087de85e93f5a0f137d1a7e.jpg",
  },
  {
    stars: 5,
    comment:
      "Absolutely love the product! It has revolutionized our workflow and increased productivity.",
    name: "Sophie Williams",
    position: "CEO, TechGenius Solutions",
    img: "https://i.pinimg.com/564x/69/85/86/69858644c3dc340c75af540b1b2ed3b8.jpg",
  },
  {
    stars: 4,
    comment:
      "Very satisfied with the service. It has been a valuable addition to our toolkit. The best in the market.",
    name: "David Lee",
    position: "Lead Developer, NovaTech Solutions",
    img: "https://i.pinimg.com/564x/0d/e0/b5/0de0b585f1c78f7bb219080be08b357d.jpg",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slide, setSlide] = useState<CommentProps>(slides[currentIndex]!);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setSlide(slides[slideIndex]!);
  };

  function showStars(stars: number) {
    const options = [1, 2, 3, 4, 5];

    return (
      <div className="flex gap-x-1 justify-center lg:justify-start">
        {options.map((s, i) => {
          return (
            <StarIcon
              key={i}
              className={`w-5 ${s <= stars ? "text-[#fdb022]" : "bg-transparent text-purpleText"}`}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[76rem] py-24 sm:px-6 sm:py-16 lg:px-8 relative group mt-16 mb-8">
        <div
          className={
            "bg-purple lg:h-[24rem] mx-2 sm:mx-6 md:mx-16 lg:mx-0 pt-0 rounded-xl sm:rounded-3xl sm:pr-0 md:pt-0 lg:flex lg:gap-x-12 lg:pt-0"
          }
        >
          <img
            alt="App screenshot"
            src={slide.img}
            className="h-auto sm:h-full sm:w-full lg:w-[29rem] rounded-t-xl lg:rounded-r-none lg:rounded-l-3xl bg-white/5 ring-1 ring-white/10"
          />
          <div className="py-10 px-3 lg:px-3 lg:pr-28 flex flex-col items-center mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:items-start lg:py-14 lg:text-left">
            <h2 className="text-2xl font-[450] tracking-tight text-white sm:text-3xl">
              <div className="grid justify-center gap-y-6">
                {showStars(slide.stars)}
                <p>{slide.comment}</p>
              </div>
            </h2>
            <div className="mt-6 text-lg leading-8 text-gray-300">
              <div className="font-bold text-white gap-x-2 flex">
                <p>
                  {"— "}
                  {slide.name}
                </p>
              </div>
              <p className="text-sm">{slide.position}</p>
            </div>
            <div className="flex top-4 justify-start pt-8 gap-x-4">
              {slides.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <div
                    className={`${slideIndex === currentIndex ? "bg-white" : "bg-purpleText"} rounded-full w-2 h-2 hover:bg-white`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
