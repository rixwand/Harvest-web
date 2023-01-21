import Image from "next/image";
import undanganDigital from "../../public/undangan-digital.jpeg";
import undagan2 from "../../public/undangan2.jpeg";
import undagan1 from "../../public/undanga1.jpeg";
import sliderimage from "../../public/slider-image.jpg";
import { IoChevronBack, IoChevronForward, IoEllipse } from "react-icons/io5";
import { useState } from "react";

const ProdukBaru = () => {
  const slides = [
    {
      id: 1,
      image: undagan1,
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, hic.",
    },
    {
      id: 2,
      image: sliderimage,
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, hic.",
    },
    {
      id: 3,
      image: undagan2,
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, hic.",
    },
    {
      id: 4,
      image: undanganDigital,
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, hic.",
    },
  ];

  const [index, setIndex] = useState(0);
  const prevImage = () => {
    const isFirst = index == 0;
    const newIndex = isFirst ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextImage = () => {
    const isLast = index == slides.length - 1;
    const newIndex = isLast ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <section
      id="newProduct"
      data-nav="Terlaris"
      className="bg-white pt-8 md:pt-10 pb-16">
      <h2 className="text-center md:text-[24px] text-xl font-inter font-semibold text-heading">
        Apa Yang Baru ?
      </h2>
      <div className="md:w-[70px] md:h-2 w-14 h-1 rounded-full bg-darkBlue mx-auto md:mt-3 mt-1"></div>
      <div className="container px-8 flex justify-center">
        <div className="justify-center md:w-[950px] mt-9 flex shadow-lg">
          <div className="slider overflow-hidden flex flex-row rounded-lg aspect-[16/8] md:aspect-[16/5] ">
            <div className="outer-image group relative">
              <span
                className="absolute top-[43%] cursor-pointer duration-300 transition-all group-hover:block z-10 hidden text-white/40 text-xl md:text-4xl left-1 bg-black/40 p-1 rounded-full"
                onClick={prevImage}>
                <IoChevronBack />
              </span>
              <span
                className="absolute top-[43%] cursor-pointer duration-300 transition-all group-hover:block z-10 hidden text-white/40 text-xl md:text-4xl right-1 bg-black/40 p-1 rounded-full"
                onClick={nextImage}>
                <IoChevronForward />
              </span>
              <div
                className={`flex-auto h-full flex transition-all duration-300 relative`}
                style={{
                  transform: `translateX(-${index == 0 ? "" : index}00%)`,
                }}>
                {slides.map((slide) => {
                  return (
                    <div
                      className=" aspect-[16/8] md:aspect-[16/5]"
                      key={slide.id}>
                      <div className="absolute flex w-full h-full flex-col md:pt-32 pt-16 items-center bg-gradient-to-b from-transparent to-black/70">
                        <h2 className="text-white/75 md:text-xl text-sm tracking-wider font-inter font-semibold">
                          {slide.title}
                        </h2>
                        <p className="text-white/60 leading-[10px] pt-1 font-sourceSans tracking-wider md:text-sm text-[8px] px-12 text-center">
                          {slide.desc}
                        </p>
                      </div>
                      <Image
                        src={slide.image}
                        alt="newProduct"
                        className="object-cover w-full aspect-[16/8] md:aspect-[16/5]"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="absolute md:bottom-6 bottom-3 text-[6px] md:text-[8px] w-full justify-center flex gap-[2px]">
                {slides.map((slide) => {
                  return (
                    <IoEllipse
                      className={`${
                        index + 1 == slide.id ? "text-white" : "text-white/30"
                      }`}
                      key={slide.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukBaru;
