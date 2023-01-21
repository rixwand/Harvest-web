import Button from "./Button";
import heroPictures from "../public/hero-pictures.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" data-nav="Beranda" className="bg-white mt-20 ">
      <div className="flex flex-wrap md:justify-between container justify-center">
        <div className="font-sourceSans text-center md:text-left lg:w-1/2">
          <h2 className="text-2xl font-semibold text-tint pt-10 md:pt-24 lg:pt-36">
            Bagikan Momen Terindahmu <br /> Dengan Undangan Digital
          </h2>
          <p className=" max-w-sm pr-1 md:mt-4 mt-[400px] leading-6 text-smoothTint text-[15px]">
            Kami adalah penyedia jasa pembuatan undangan pernikahan konvensional
            cetak dan digital berbasis website. Desain kekinian, Pernikahan
            makin berkesan dan tampil baik sangat responsive disemua perangkat
            digital
          </p>
          <Link
            href={"#newProduct"}
            scroll={false}
            className={`inline-block px-8 py-[10px] text-white font-sourceSans text-base drop-shadow-md tracking-wide mt-6 font-semibold rounded-full bg-gradient-to-r from-lightBlue to-darkBlue`}>
            What's New ?
          </Link>
        </div>
        <div className="">
          <div className="flex md:block justify-center lg:static absolute md:w-fit w-screen right-0 md:top-10 top-52">
            <Image
              alt={"hero banner.svg"}
              src={heroPictures}
              className={`md:pt-[104px] md:w-[350px] md:pr-5 p-0 w-[350px]`}
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pt-14 md:pt-20"
        viewBox="0 0 1440 180">
        <path
          d="M0 52.3607L34.3 47.0607C68.6 41.3607 137 31.3607 206 20.3607C274.3 9.36068 343 -0.639318 411 9.66068C480 20.3607 549 52.3607 617 52.3607C685.7 52.3607 754 20.3607 823 31.0607C891.4 41.3607 960 95.3607 1029 89.6607C1097.1 84.3607 1166 20.3607 1234 4.36068C1302.9 -11.6393 1371 20.3607 1406 36.3607L1440 52.3607V180.361H1405.7C1371.4 180.361 1303 180.361 1234 180.361C1165.7 180.361 1097 180.361 1029 180.361C960 180.361 891 180.361 823 180.361C754.3 180.361 686 180.361 617 180.361C548.6 180.361 480 180.361 411 180.361C342.9 180.361 274 180.361 206 180.361C137.1 180.361 69 180.361 34 180.361H0L0 52.3607Z"
          fill="#f8f8f8"
        />
      </svg>
    </section>
  );
};

export default Hero;
