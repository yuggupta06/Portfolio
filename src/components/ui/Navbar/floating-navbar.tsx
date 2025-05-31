"use client";
import { Menu, X } from "lucide-react";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      const scrollPosition = scrollY.get();
      if (scrollPosition < 100) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className={cn(
          "flex flex-col md:flex-row  fixed top-3 inset-x-0 border border-transparent rounded-xl items-center justify-between w-full z-[100] px-6 md:px-20 lg:px-40",
          className
        )}
      >
        {/* Top bar with brand + nav + hamburger */}
        <div className="flex w-full items-center justify-between border border-white rounded-full px-6 py-2 bg-black/30 backdrop-blur">
          <div className="text-2xl  text-white md:text-4xl">YUG</div>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-row space-x-4 md:space-x-9">
  {navItems.map((navItem, idx) => (
    <a
      key={`link=${idx}`}
      href={navItem.link}
      className="relative group flex items-center space-x-1 font-bold text-white dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
    >
      <span className="block sm:hidden">{navItem.icon}</span>

      {/* Default text */}
      <span className="hidden sm:block text-sm transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-4">
        {navItem.name}
      </span>

      {/* Hover text with padding + fixed sizing */}
      <span className="absolute hidden sm:inline-block px-2 py-1 text-sm whitespace-nowrap border border-white text-purple-300 rounded transition-all duration-500 ease-in-out opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
        {navItem.name}
      </span>
    </a>
  ))}
</div>



          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:hidden bg-black/60 mt-2 text-[10px]  rounded-lg px-4 py-4 space-y-3 text-white font-semibold"
            >
              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b  border-white/20 py-1 hover:bg-gray-500"
                >
                  {navItem.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
