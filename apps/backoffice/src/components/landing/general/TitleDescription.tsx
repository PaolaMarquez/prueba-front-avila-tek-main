import React from "react";

interface Props {
  title: string | JSX.Element;
  description: string;
  classNameTitle?: string;
  classNameDesc?: string;
}

export default function TitleDescription({
  title,
  description,
  classNameTitle,
  classNameDesc,
}: Props) {
  return (
    <div>
      <p
        className={`mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl ${classNameTitle}`}
      >
        {title}
      </p>
      <p className={`mt-6 text-lg leading-8 text-gray-600 ${classNameDesc}`}>
        {description}
      </p>
    </div>
  );
}
