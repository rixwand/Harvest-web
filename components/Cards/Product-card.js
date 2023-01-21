import Image from "next/image";
import React from "react";
import Button from "../Button";

const ProductCard = (props) => {
  const { children, className } = props;
  return (
    <div className={`${className} bg-white shadow-md  rounded-md relative`}>
      {children}
      <div className="absolute bottom-3 right-3">
        <Button {...props} className="py-[7px] px-3 text-[9px] md:text-[10px]">
          Lihat Lebih...
        </Button>
      </div>
    </div>
  );
};

const image = ({ src, alt, height = "h-[70%]" }) => {
  return (
    <div className={`${height} flex`}>
      <Image src={src} alt={alt} className="h-full object-cover" />
    </div>
  );
};

const Category = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 font-sourceSans text-xs font-light tracking-wider  text-white bg-black/60 py-2 px-3">
      {children}
    </div>
  );
};

const Title = ({ children, className }) => (
  <h2
    className={`${className} mt-3 md:text-[20px] ml-3 font-sourceSans font-semibold text-[#626262]`}>
    {children}
  </h2>
);
const Price = ({ children }) => (
  <p className="font-semibold font-sourceSans text-xs md:text-sm ml-3 mt-2 italic text-slate-700">
    {children}
  </p>
);

const Tags = ({ children }) => (
  <p className=" text-xs flex flex-wrap  gap-1 ml-3 italic mt-1 text-[#56AEFF] underline font-sourceSans">
    {children}
  </p>
);

ProductCard.Category = Category;
ProductCard.Image = image;
ProductCard.Title = Title;
ProductCard.Price = Price;
ProductCard.Tags = Tags;

export default ProductCard;
