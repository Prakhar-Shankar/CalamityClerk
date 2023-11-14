import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/char2.svg"
              alt="Character"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features by clicking the cards provided below
          </p>
          <div>
            <ul>
              <div className="flex flex-row">
              <img src="https://st4.depositphotos.com/18270392/29056/v/450/depositphotos_290566006-stock-illustration-tick-icon-vector-symbol-checkmark.jpg" className="w-10" alt="" />
              <li className="mt-2 hover:text-lg duration-500">You can get alerts about weather conditions.</li>
              </div>
              <div className="flex flex-row">
              <img src="https://st4.depositphotos.com/18270392/29056/v/450/depositphotos_290566006-stock-illustration-tick-icon-vector-symbol-checkmark.jpg" className="w-10 h-10"  alt="" />
              <li className="mt-2 hover:text-lg duration-500">You can get current weather of any city in the world with graphical analytics.</li>
              </div>
              <div className="flex flex-row">
              <img src="https://st4.depositphotos.com/18270392/29056/v/450/depositphotos_290566006-stock-illustration-tick-icon-vector-symbol-checkmark.jpg" className="w-10" alt="" />
              <li className="mt-2 hover:text-lg duration-500">You can see future weather forecast.</li>
              </div>
              <div className="flex flex-row">
              <img src="https://st4.depositphotos.com/18270392/29056/v/450/depositphotos_290566006-stock-illustration-tick-icon-vector-symbol-checkmark.jpg" className="w-10" alt="" />
              <li className="mt-2 hover:text-lg duration-500">You can see past weather records.</li>
              </div>
            </ul>
          </div>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
