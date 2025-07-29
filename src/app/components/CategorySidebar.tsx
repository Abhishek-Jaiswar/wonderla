"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface CategorySidebarProps {
  onCategoryChange: (category: string) => void;
}

const CategorySidebar = ({ onCategoryChange }: CategorySidebarProps) => {
  const items = [
    {
      id: 1,
      name: "Land",
      content: "73 Rides",
      icon: "/land.svg",
      category: "Land",
    },
    {
      id: 2,
      name: "Water",
      content: "54 Rides",
      icon: "/water.svg",
      category: "Water",
    },
    {
      id: 3,
      name: "Kids",
      content: "35 Rides",
      icon: "/kids.svg",
      category: "Kids",
    },
  ];

  const radiusOuter = 340;
  const radiusInner = 250;
  const radiusPointer = 250;
  const angleStart = -50;
  const angleEnd = 50;

  const [selected, setSelected] = useState(0);

  const getAngle = (index: number, total: number) =>
    angleStart + ((angleEnd - angleStart) / (total - 1)) * index;

  const handleCategorySelect = (index: number) => {
    setSelected(index);
    onCategoryChange(items[index].category);
  };

  return (
    <div className="relative flex items-center justify-center w-[37.5rem] h-[37.5rem] -left-[20rem]">
      <motion.div className="absolute w-full h-full rounded-full bg-white z-0 overflow-hidden">
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full bg-[#FAD500] blur-3xl"
          style={{
            left: "20%",
            top: "7%",
          }}
          animate={{
            x:
              radiusInner *
              Math.cos((getAngle(selected, items.length) * Math.PI) / 149),
            y:
              radiusInner *
              Math.sin((getAngle(selected, items.length) * Math.PI) / 149),
          }}
          transition={{
            ease: "easeIn",
            duration: 0.5,
          }}
        />
      </motion.div>

      {/* Outer circle - Names */}
      {items.map((item, index) => {
        const angle = getAngle(index, items.length);
        const x = radiusOuter * Math.cos((angle * Math.PI) / 180);
        const y = radiusOuter * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={item.id}
            className="absolute z-30 flex flex-col items-center text-white text-center"
            style={{
              left: "50%",
              top: "45.2%",
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <span className="text-lg font-medium">{item.name}</span>
            <span className="px-3 py-0.5 mt-1 rounded-2xl bg-indigo-500 text-sm font-semibold">
              {item.content}
            </span>
          </div>
        );
      })}

      {/* Sliding circular pointer */}
      <motion.div
        className="absolute w-42 h-42 rounded-full z-10 bg-white border-8 border-[#FAD500]"
        animate={{
          x:
            radiusPointer *
            Math.cos((getAngle(selected, items.length) * Math.PI) / 150),
          y:
            radiusPointer *
            Math.sin((getAngle(selected, items.length) * Math.PI) / 150),
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        style={{
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {items.map((item, index) => {
        const angle = getAngle(index, items.length);
        const x = radiusInner * Math.cos((angle * Math.PI) / 149);
        const y = radiusInner * Math.sin((angle * Math.PI) / 149);

        return (
          <div
            key={item.id}
            onClick={() => handleCategorySelect(index)}
            className="absolute z-20"
            style={{
              left: "45%",
              top: "43.2%",
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className={`transition-transform duration-500 p-2 cursor-pointer rounded-full ${
                selected === index ? "scale-125" : "scale-100"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.name}
                height={60}
                width={60}
                className="w-[60px] h-[60px]"
              />
            </div>
          </div>
        );
      })}

      <div className="w-[26rem] h-[26rem] bg-[#22304A] rounded-full absolute z-5" />
    </div>
  );
};

export default CategorySidebar;
