"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./main3dcard";
import Image from "next/image";
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl  border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/profile-photo.jpg"
            width={1000}
            height={1000}
            className=" w-full md:h-full lg:w-[40vh] lg:h-[60vh] lg:self-start object-cover object-center rounded-4xl  group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}
