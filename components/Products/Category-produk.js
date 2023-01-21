import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import CategoryCard from "../Cards/Category-card";
import undanganDigital from "../../public/undangan-digital.jpeg";
import undagan2 from "../../public/undangan2.jpeg";
import undagan1 from "../../public/undanga1.jpeg";

const CategoryProduk = () => {
  return (
    <section
      id="category"
      data-nav="Kategori"
      className="bg-gray py-8 md:py-12">
      <h2 className="text-center md:text-[24px] text-xl font-inter font-semibold text-heading">
        Cek Semua Kategori
      </h2>
      <div className="md:w-[70px] md:h-2 w-14 h-1 rounded-full bg-darkBlue mx-auto md:mt-3 mt-1"></div>
      <div className="flex flex-wrap gap-1 justify-between container mt-6 ">
        <CategoryCard image={undagan1} title="Undangan" alt="Undangan" />
        <CategoryCard image={undagan2} title="Undangan" alt="Undangan" />
        <CategoryCard image={undanganDigital} title="Undangan" alt="Undangan" />
        <CategoryCard image={undagan2} title="Undangan" alt="Undangan" />
        <CategoryCard image={undagan1} title="Undangan" alt="Undangan" />
        <CategoryCard image={undagan2} title="Undangan" alt="Undangan" />
        <CategoryCard image={undagan1} title="Undangan" alt="Undangan" />
        <CategoryCard image={undanganDigital} title="Undangan" alt="Undangan" />
      </div>
      <div className="flex container justify-center mt-4">
        <button className="justify-center text-center flex flex-col font-sourceSans font-semibold text-off">
          <p>Lihat Lebih Banyak</p>
          <span className="mx-auto">
            <IoChevronDownOutline className="text-3xl font-light" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CategoryProduk;
