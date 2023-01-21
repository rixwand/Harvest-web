import React from "react";
import undanganDigital from "../../public/undangan-digital.jpeg";
import undagan2 from "../../public/undangan2.jpeg";
import undagan1 from "../../public/undanga1.jpeg";
import PopularCard from "../Cards/Popular-card";

const ProdukPopuler = () => {
  return (
    <section id="populer" data-nav="Terlaris" className="bg-gray pt-4 pb-16">
      <h2 className="text-center md:text-[24px] text-xl pt-3 md:pt-0 font-inter font-semibold text-heading">
        Yang Sedang Populer
      </h2>
      <div className="md:w-[70px] md:h-2 w-14 h-1 rounded-full bg-darkBlue mx-auto md:mt-3 mt-1"></div>
      <div className="flex flex-wrap  justify-between container mt-6 ">
        <PopularCard image={undanganDigital} title={"Undangan Digital"} />
        <PopularCard image={undagan1} title={"Undangan"} />
        <PopularCard image={undanganDigital} title={"Undangan Digital"} />
        <PopularCard image={undagan2} title={"Undangan"} />
      </div>
    </section>
  );
};

export default ProdukPopuler;
