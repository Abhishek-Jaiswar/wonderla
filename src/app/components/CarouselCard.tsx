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
    <div className="relative w-[260px] h-[380px] rounded-2xl overflow-hidden flex-shrink-0 bg-white transition-shadow duration-300">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(34,48,74,0.95) 90%)",
        }}
      />

      <div className="relative z-20 p-6 text-white h-full flex flex-col justify-end">
        <h2 className="text-xl font-bold mb-2 drop-shadow-lg">{title}</h2>
        <div className="mb-2 text-sm opacity-90 drop-shadow">
          <span className="font-medium">{city}</span> |{" "}
          <span className="font-medium">{category}</span>
        </div>
        <p className="text-sm opacity-90 mb-4 leading-relaxed drop-shadow">
          {description}
        </p>
        <button className="bg-[#FAD500] text-blue-600 font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-xs w-fit shadow-md">
          RIDE DETAILS
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
