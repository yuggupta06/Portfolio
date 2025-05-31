// hooks/useIsMediumUp.ts
"use client"; // because you're using useEffect and window
import { useEffect, useState } from "react";

export function useIsMediumUp() {
  const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleChange = () => setIsMediumUp(mediaQuery.matches);

    handleChange(); // set initial value
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMediumUp;
}
