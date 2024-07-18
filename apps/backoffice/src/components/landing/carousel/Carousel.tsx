"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import { createRef, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import data from "./data.json";
import TwoButtons from "../general/TwoButtons";
import TitleDescription from "../general/TitleDescription";

interface CustomArrowProps {
  onClick: () => void;
  position: string;
}

export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomArrow = ({ onClick, position }: CustomArrowProps) => (
    <button
      onClick={() => onClick()}
      className={`bg-white hover:bg-gray-200 rounded-full absolute bottom-0 left-0 transform -translate-y-full border p-4 text-lg cursor-pointer ${position === "right" ? "ml-20" : ""}`}
    >
      {position === "left" ? (
        <ArrowLeftIcon className="text-gray-600 w-5 h-5 rounded-full" />
      ) : (
        <ArrowRightIcon className="text-gray-600 w-5 h-5 rounded-full" />
      )}
    </button>
  );
  return (
    <div className="mx-10 lg:ml-28 mt-24">
      <div className="mb-14 text-center grid lg:flex lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <TitleDescription
            title={"Don't just take our word for it"}
            description={
              "Hear from some of our amazing customers who are automating their finances."
            }
            classNameDesc="text-center lg:text-left"
            classNameTitle="text-center lg:text-left"
          />
        </div>
        <div className="lg:mr-24 lg:flex lg:items-start -mt-8">
          <TwoButtons text1={"Our Customers"} text2={"Create account"} />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        className="pb-32"
        infinite={true}
        customLeftArrow={
          <CustomArrow
            onClick={() => (Carousel as any).goToPrev()}
            position={"left"}
          />
        }
        customRightArrow={
          <CustomArrow
            onClick={() => (Carousel as any).goToNext()}
            position={"right"}
          />
        }
      >
        {data.map((testimonial, index) => {
          return <TestimonialCard key={index} testimonial={testimonial} />;
        })}
      </Carousel>
    </div>
  );
}
