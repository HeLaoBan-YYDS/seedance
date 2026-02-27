"use client";
import React, { useState } from "react";
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



  return (
    <div className="mt-12 flex flex-col gap-8 px-4 lg:px-20">
      {content.map((item, index) => (
        <article 
          key={item.title + index}
          className="relative origin-top bg-card/70 rounded-[16px] lg:rounded-[32px] overflow-hidden border border-border/40 shadow-[0_-30px_90px_rgba(0,0,0,0.35)] lg:sticky lg:top-[60px] cursor-pointer"
          style={{ 
            transformOrigin: 'center top', 
            transformStyle: 'preserve-3d', 
            zIndex: 20,
            opacity: activeCard === index ? 1 : 0.7
          }}
          onMouseEnter={() => setActiveCard(index)}
        >
          <div className="flex flex-col gap-10 p-6 lg:flex-row lg:items-center lg:p-[120px] lg:gap-24 max-w-[1400px] mx-auto">
            <div className="flex flex-col items-start lg:flex-[2]">
              <h3 
                className="flex flex-col text-2xl mt-4 lg:text-3xl 2xl:text-4xl font-semibold text-foreground"
                style={{ opacity: activeCard === index ? 1 : 0.7 }}
              >
                {item.title}
              </h3>
              <p 
                className="text-lg text-muted-foreground mt-4 leading-relaxed"
                style={{ opacity: activeCard === index ? 1 : 0.7 }}
              >
                {item.description}
              </p>
            </div>
            <div className="lg:flex-[3] overflow-hidden">
              <div className="w-full flex justify-center">
                <div className="relative overflow-hidden rounded-[10px] lg:rounded-[16px] border border-border/50 bg-card/50 shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full max-w-[600px] aspect-[16/9]">
                  {item.content ?? null}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};