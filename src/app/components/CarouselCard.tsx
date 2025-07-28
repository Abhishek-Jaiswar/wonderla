import React from "react";

interface ICarouselData {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  city: string;
  category: string;
}

interface CarouselCardProps {
  carouselData: ICarouselData;
}

const CarouselCard = ({ carouselData }: CarouselCardProps) => {
  const { title, description, videoSrc, city, category } = carouselData;

  return (
    <div className="relative w-[260px] h-[380px] rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Background Video - Full card */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />

      {/* Content overlay */}
      <div className="relative z-20 p-6 text-white h-full flex flex-col justify-end">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="mb-2 text-sm opacity-90">
          <span className="font-medium">{city}</span> |{" "}
          <span className="font-medium">{category}</span>
        </div>
        <p className="text-sm opacity-90 mb-4 leading-relaxed">{description}</p>

        <button className="bg-[#FAD500] hover:bg-[#E6C200] text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm w-fit">
          RIDE DETAILS
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
