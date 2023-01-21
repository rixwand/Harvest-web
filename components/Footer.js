import Link from "next/link";
import React from "react";
import {
  IoLocationOutline,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <section id="footer" data-nav="Contact Us" className="bg-[#A8D5FF]">
      <div className="container mt-36 flex flex-wrap gap-8 justify-between text-[#8f8f8f] py-10 md:py-14">
        <div className="w-full md:w-fit text-center md:text-start">
          <h5 className="font-semibold font-sourceSans text-base">
            Harvest Grafika
          </h5>
          <p className=" text-xs font-sourceSans">
            Digital Printing & Merchendise
          </p>
        </div>
        <div className="text-[15px] font-sourceSans flex flex-col gap-1">
          <p>Undangan</p>
          <p>Spanduk</p>
          <p>Blangko</p>
          <p>Kartu Nama</p>
          <p>Kalender</p>
          <p>Stiker</p>
          <p>Pin / Bros</p>
          <p>Papan Nama</p>
        </div>
        <div className="text-[15px] font-sourceSans text-end md:text-start flex flex-col gap-2">
          <h6 className="font-semibold">Temukan Kami di :</h6>
          <Link target="_blank" href="https://instagram.com/harvestgrafika">
            <IoLogoInstagram className="text-xl inline-block mr-2" />
            {"@harvestgrafika"}
          </Link>
          <Link target="_blank" href="mailto:harvestgrafika@gmail.com">
            <IoMailOutline className="text-xl inline-block mr-2" />
            {"harvestgrafika@gmail.com"}
          </Link>
          <Link target="_blank" href="https://wa.me/+6282311900400">
            <IoLogoWhatsapp className="text-xl inline-block mr-2" />
            {"+6282311900400"}
          </Link>
          <Link target="_blank" href="https://goo.gl/maps/7Peq3WuctiqwQsMdA">
            <IoLocationOutline className="text-xl inline-block mr-2" />
            {"Jl. Sukawati No.18"}
          </Link>
        </div>
      </div>
      <div className="bg-[#196CB9] py-5 text-sm font-sourceSans font-semibold text-white text-center">
        <p className="inline-block">Harvest Grafika - 2022</p>
      </div>
    </section>
  );
};

export default Footer;
