"use client";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

interface questionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: questionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="border-b border-gray-200 pb-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <p color="blue-gray" className="text-lg font-medium">
          {question}
        </p>
        {isOpen ? (
          <MinusCircleIcon className="w-6 text-gray-400" />
        ) : (
          <PlusCircleIcon className="w-6 text-gray-400" />
        )}
      </div>
      {isOpen && <p className="pt-4 font-normal !text-gray-500">{answer}</p>}
    </div>
  );
}
