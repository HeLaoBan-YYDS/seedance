"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.scrollTop;
      const containerHeight = container.scrollHeight - container.clientHeight;
      const cardLength = content.length;

      if (containerHeight <= 0) return;

      const progress = containerTop / containerHeight;
      const cardIndex = Math.min(
        Math.floor(progress * cardLength),
        cardLength - 1
      );

      setActiveCard(cardIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  const backgroundColors = [
    "hsl(var(--background))",
    "hsl(28 25% 12%)",
    "hsl(28 20% 15%)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, hsl(28 52% 35%), hsl(28 52% 58%))",
    "linear-gradient(to bottom right, hsl(28 52% 58%), hsl(48 30% 90%))",
    "linear-gradient(to bottom right, hsl(28 52% 35%), hsl(28 25% 10%))",
  ];

  const backgroundGradient = linearGradients[activeCard % linearGradients.length];
  const backgroundColor = backgroundColors[activeCard % backgroundColors.length];

  return (
    <div
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition-colors duration-500 scrollbar-hide"
      ref={ref}
      style={{ backgroundColor }}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2
                className="text-2xl font-bold text-foreground transition-opacity duration-300"
                style={{ opacity: activeCard === index ? 1 : 0.3 }}
              >
                {item.title}
              </h2>
              <p
                className="text-lg mt-10 max-w-sm text-muted-foreground transition-opacity duration-300"
                style={{ opacity: activeCard === index ? 1 : 0.3 }}
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-card lg:block transition-all duration-500",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
