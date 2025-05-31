"use client"
import React from "react"
import { FloatingNavDemo } from "./ui/Navbar/navbar"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Hero() {
  const [ref,inView]=  useInView({
      threshold: 0.3,    // fire when 30% is visible
      triggerOnce: false // we want to replay on every re‐entry
    });
      const [instanceKey, setInstanceKey] = useState(0);
    useEffect(() => {
      if (inView) {
        // bump the key so the child is recreated (and its useEffect / animate kicks off)
        setInstanceKey(k => k + 1);
      }
    }, [inView]);

  const intro="Turn ideas into interactive experiences. Building software that connects the world."
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <FloatingNavDemo />
      <div ref={ref} className="flex flex-row items-center justify-center w-full z-10">
        <TextGenerateEffect key={instanceKey}   words={intro} />
      </div>
    </div>
  )
}


