import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ image, title, alt }) => {
  return (
    <div className=" p-[5px] md:w-[23.5%] w-[48%] mt-3 rounded-md shadow-md relative bg-white">
      <span className="absolute flex w-full h-full items-center top-0 left-0 p-[5px] rounded">
        <Link
          href={"#"}
          className="bg-black/20 flex w-full h-full rounded-md justify-center items-center font-sourceSans text-white backdrop-blur-sm font-semibold text-lg">
          {title}
        </Link>
      </span>
      <Image
        src={image}
        className="rounded-md h-[55px] object-cover"
        alt={alt}
      />
    </div>
  );
};

export default CategoryCard;
