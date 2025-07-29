"use client";
import React, { useState } from "react";
import CategorySidebar from "./components/CategorySidebar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen bg-[#22304A]">
      <header className=" sticky top-10 z-50">
        <Navbar />
      </header>
      <section className="flex flex-col lg:flex-row items-start mt-16 z-0 relative overflow-x-hidden">
        <div className="lg:w-[600px] flexjustify-center lg:flex-shrink-0">
          <CategorySidebar onCategoryChange={handleCategoryChange} />
        </div>
        <div className="flex-1 w-full  -ml-[12rem]">
          <Carousel selectedCategory={selectedCategory} />
        </div>
      </section>
    </main>
  );
};

export default Home;
