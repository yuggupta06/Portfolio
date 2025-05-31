"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";
import AnimatedTypewriterButton from "../ui/Buttons/TypeWriterButton";
export const TextGenerateEffect = ({
  words,
  className="",
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold w-1/2 flex flex-col  items-center space-y-4 sm:pb-20 md:pb-0 xl:pb-20 pl-3 ", className)}>
        <div className="text-gray-300 text-4xl sm:text-6xl md:text-5xl xl:text-7xl xl:w-1/2 flex flex-col items-center  text-center  leading-snug tracking-wide"><span >Hii,</span><span>I&rsquo;m Yug Gupta</span></div>
        <div className=" dark:text-white text-black montserrat-regular whitespace-normal w-full text-[12px] sm:text-lg md:text-sm text-center leading-snug tracking-wide">
          {renderWords()}
      </div>
      <div className="flex flex-row items-start justify-center   md:text-5xl  space-x-4  space-y-0">
                <AnimatedTypewriterButton href="https://github.com/yuggupta06" text="Github" />
                <AnimatedTypewriterButton href="" text="Resume" />
      </div>
    </div>
  );
};
