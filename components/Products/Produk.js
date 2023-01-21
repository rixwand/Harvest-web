import ProductCard from "../Cards/Product-card";
import undanganDigital from "../../public/undangan-digital.jpeg";
import undagan2 from "../../public/undangan2.jpeg";
import undagan1 from "../../public/undanga1.jpeg";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ModalBox from "../ModalBox";
import { useState } from "react";

const Produk = () => {
  const data = [
    {
      id: 1,
      title: "White Flower",
      category: "Undangan Digital",
      image: undanganDigital,
      price: 15000,
      tags: ["Putih", "Bunga", "Simple"],
    },
    {
      id: 2,
      title: "HW21",
      category: "Undangan",
      image: undagan1,
      price: 3000,
      tags: ["Putih", "Bunga", "Simple"],
    },
    {
      id: 3,
      title: "AK47",
      category: "Undangan",
      image: undagan2,
      price: 3000,
      tags: ["Putih", "Bunga", "Simple"],
    },
    {
      id: 4,
      title: "White Flower",
      category: "Undangan Digital",
      image: undanganDigital,
      price: 15000,
      tags: ["Putih", "Bunga", "Simple"],
    },
    {
      id: 5,
      title: "HW21",
      category: "Undangan",
      image: undagan1,
      price: 3000,
      tags: ["Putih", "Bunga", "Simple"],
    },
    {
      id: 6,
      title: "AK47",
      category: "Undangan",
      image: undagan2,
      price: 3000,
      tags: ["Putih", "Bunga", "Simple"],
    },
  ];
  const [produk, setProduk] = useState({});
  const [showModal, setShowModal] = useState(false);

  const showModalBox = (e) => {
    const id = e.target.dataset.id;
    const [filtered] = data.filter((item) => id == item.id);
    setProduk(filtered);
    setShowModal(true);
  };

  return (
    <>
      <section id="product" data-nav="Produk" className="mt-8 container">
        <h2 className="text-center md:text-[24px] text-xl pt-3 md:pt-0 font-inter font-semibold text-heading">
          Cek Semua Produk
        </h2>
        <div className="md:w-[70px] md:h-2 w-14 h-1 rounded-full bg-darkBlue mx-auto md:mt-3 mt-1"></div>
        <div className=" flex flex-wrap my-10 bg-gray shadow-md justify-around gap-7 md:mx-8 p-7">
          {data.map((x) => (
            <ProductCard
              className={"md:w-[31%] h-[340px]"}
              key={x.id}
              data-id={x.id}
              onClick={showModalBox}>
              <ProductCard.Image src={x.image} alt="undangan 1" />
              <ProductCard.Category>{x.category}</ProductCard.Category>
              <ProductCard.Title>{x.title}</ProductCard.Title>
              <ProductCard.Price>
                {"Rp " + x.price.toLocaleString("id-ID")}
              </ProductCard.Price>
              <ProductCard.Tags>
                {x.tags.map((tag) => (
                  <Link key={tag} href={`/produk?filter=${tag.toLowerCase()}`}>
                    {tag}
                  </Link>
                ))}
              </ProductCard.Tags>
            </ProductCard>
          ))}
          <Link
            href={"/produk"}
            className={`inline-block px-6 py-[10px] text-white font-sourceSans text-base drop-shadow-md tracking-wide mt-2 font-semibold rounded-full bg-gradient-to-r from-lightBlue to-darkBlue`}>
            Lihat Semua Produk
            <IoChevronForward className="inline-block text-xl mb-[2.5px]" />
          </Link>
        </div>
      </section>
      <ModalBox
        data={produk}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default Produk;
