"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import CarouselCard from "./CarouselCard";
import items from "../data/data";

const CARD_WIDTH = 260;
const GAP = 16;
const VISIBLE_CARDS = 4;

interface CarouselProps {
  selectedCategory?: string;
}

const Carousel = ({ selectedCategory }: CarouselProps) => {
  const [index, setIndex] = useState(VISIBLE_CARDS);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  // Clone items for infinite scroll
  const extendedItems = [
    ...filteredItems.slice(-VISIBLE_CARDS),
    ...filteredItems,
    ...filteredItems.slice(0, VISIBLE_CARDS),
  ];
  const totalCards = extendedItems.length;
  const wrapperWidth = totalCards * CARD_WIDTH + (totalCards - 1) * GAP;

  // Reset index when category changes
  useEffect(() => {
    setIndex(VISIBLE_CARDS);
    controls.set({ x: -VISIBLE_CARDS * (CARD_WIDTH + GAP) });
  }, [selectedCategory, controls]);

  // Memoized scroll function
  const scroll = useCallback(
    async (toIndex: number) => {
      const distance = -toIndex * (CARD_WIDTH + GAP);
      await controls.start({
        x: distance,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    },
    [controls]
  );

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  // Scroll on index change
  useEffect(() => {
    scroll(index);
    // Infinite loop reset
    if (index >= filteredItems.length + VISIBLE_CARDS) {
      setTimeout(() => {
        controls.set({ x: -VISIBLE_CARDS * (CARD_WIDTH + GAP) });
        setIndex(VISIBLE_CARDS);
      }, 500);
    } else if (index <= 0) {
      setTimeout(() => {
        controls.set({ x: -filteredItems.length * (CARD_WIDTH + GAP) });
        setIndex(filteredItems.length);
      }, 500);
    }
  }, [index, controls, scroll, filteredItems.length]);

  // Get category display name
  const getCategoryDisplayName = () => {
    if (!selectedCategory) return "OUR ICONIC RIDES";
    return `${selectedCategory.toUpperCase()} RIDES`;
  };

  return (
    <div className="w-full overflow-hidden px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
          {getCategoryDisplayName()}
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIndex((prev) => prev - 1)}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg
              width="13"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 20"
            >
              <path
                fill="#334DCF"
                d="M11.4665 0.77376C11.7434 0.767671 12.0152 0.847924 12.2443 1.00348C12.4734 1.15904 12.6483 1.38222 12.7448 1.64179C12.8412 1.90136 12.8544 2.18449 12.7825 2.4519C12.7105 2.7193 12.5571 2.95754 12.3434 3.13369L4.19135 10.1174L12.3434 17.0987C12.4912 17.2074 12.615 17.3453 12.707 17.5039C12.799 17.6626 12.8572 17.8386 12.8781 18.0209C12.8989 18.2031 12.8819 18.3876 12.8281 18.563C12.7744 18.7383 12.6849 18.9007 12.5655 19.0399C12.4461 19.1791 12.2992 19.2921 12.134 19.3719C11.9689 19.4517 11.789 19.4965 11.6057 19.5035C11.4224 19.5106 11.2397 19.4799 11.0689 19.413C10.8981 19.3462 10.7429 19.2448 10.6131 19.1152L1.27971 11.1296C1.13314 11.0045 1.01545 10.8493 0.934743 10.6743C0.854038 10.4993 0.812246 10.3089 0.812246 10.1162C0.812246 9.92353 0.854038 9.73309 0.934743 9.55812C1.01545 9.38315 1.13314 9.22775 1.27971 9.10267L10.6131 1.10936C10.8489 0.899934 11.1513 0.78118 11.4665 0.77376Z"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => setIndex((prev) => prev + 1)}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg
              width="13"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 20"
            >
              <path
                fill="#334DCF"
                d="M1.98073 0.771807C1.70389 0.765718 1.43203 0.84597 1.20294 1.00153C0.973861 1.15709 0.798938 1.38027 0.702494 1.63984C0.606051 1.89941 0.592879 2.18254 0.66481 2.44994C0.736741 2.71734 0.8902 2.95558 1.10385 3.13174L9.25592 10.1155L1.10385 17.0968C0.956059 17.2054 0.832285 17.3433 0.740282 17.502C0.648279 17.6607 0.59003 17.8367 0.569182 18.0189C0.548334 18.2011 0.565336 18.3857 0.619123 18.561C0.67291 18.7364 0.762324 18.8988 0.881766 19.038C1.00121 19.1772 1.1481 19.2901 1.31325 19.3699C1.4784 19.4497 1.65825 19.4945 1.84154 19.5016C2.02482 19.5087 2.20759 19.4779 2.37839 19.4111C2.5492 19.3442 2.70437 19.2429 2.83418 19.1133L12.1676 11.1277C12.3141 11.0026 12.4318 10.8473 12.5125 10.6724C12.5932 10.4974 12.635 10.3069 12.635 10.1143C12.635 9.92158 12.5932 9.73113 12.5125 9.55616C12.4318 9.3812 12.3141 9.22579 12.1676 9.10071L2.83418 1.1074C2.59841 0.897981 2.29599 0.779226 1.98073 0.771807Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={controls}
          initial={{ x: -VISIBLE_CARDS * (CARD_WIDTH + GAP) }}
          style={{
            width: `${wrapperWidth}px`,
          }}
        >
          {extendedItems.map((item, i) => (
            <div
              key={i}
              style={{
                width: CARD_WIDTH,
                marginRight: i < extendedItems.length - 1 ? GAP : 0,
              }}
            >
              <CarouselCard carouselData={item} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Explore All Rides Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#FAD500] hover:bg-[#E6C200] text-gray-900 font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg">
          Explore All Rides!
        </button>
      </div>
    </div>
  );
};

export default Carousel;
