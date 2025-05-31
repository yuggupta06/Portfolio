"use client"
import { useEffect, useRef, useState } from "react";

type CardProps = {
  text: string;
  index: number;
};

function Card({ text, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(90); // unfold rotation
  const [offsetY, setOffsetY] = useState(0);    // parallax
  const [xShift] = useState(() => Math.random() * 300 - 150); // horizontal spread
  const [zShift] = useState(() => Math.random() * 400 - 200); // z-depth

  // Rotate when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRotation(entry.isIntersecting ? 0 : 90);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const speed = 0.2 + index * 0.08;
      setOffsetY(scrollTop * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="w-64 h-40 bg-gradient-to-r from-rose-600 to-purple-600 text-white text-xl font-bold flex items-center justify-center rounded-xl shadow-2xl absolute transition-transform duration-500"
      style={{
        transform: `
          translateX(${xShift}px)
          translateY(${offsetY}px)
          translateZ(${zShift}px)
          rotateX(${rotation}deg)
        `,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        left: "50%",
        top: `${index * 400}px`, // stack cards in 3D flow
      }}
    >
      {text}
    </div>
  );
}

export default function Cards3DPage() {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

  return (
    <div className="min-h-[500vh] w-full bg-gray-900 relative overflow-hidden">
      <h1 className="text-white text-4xl font-bold text-center py-32">
        3D Parallax Scroll Cards
      </h1>
      <div className="relative perspective-1000">
        {cards.map((card, i) => (
          <Card key={i} text={card} index={i} />
        ))}
      </div>
    </div>
  );
}
