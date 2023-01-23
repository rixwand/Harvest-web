import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IoChevronDown,
  IoChevronForwardOutline,
  IoChevronUp,
  IoFunnelOutline,
  IoPricetagsOutline,
  IoSearch,
} from "react-icons/io5";
import bgProduk from "../public/bg-search.jpg";
import Button from "./Button";
import undanganDigital from "../public/undangan-digital.jpeg";
import undagan2 from "../public/undangan2.jpeg";
import undagan1 from "../public/undanga1.jpeg";
import arrow from "../public/arrow.svg";
import ProductCard from "./Cards/Product-card";
import ModalBox from "./ModalBox";

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
    title: "HW21 1",
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
    tags: ["Putih", "Simple"],
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
    title: "HW21 2",
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
    tags: ["Putih", "Simple"],
  },
  {
    id: 7,
    title: "White Flower",
    category: "Undangan Digital",
    image: undanganDigital,
    price: 3000,
    tags: ["Putih", "Bunga", "Simple"],
  },
  {
    id: 8,
    title: "HW21 3",
    category: "Undangan",
    image: undagan1,
    price: 3000,
    tags: ["Putih", "Bunga", "Simple"],
  },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [produk, setProduk] = useState({});
  const [filters, setFilter] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState(data);
  const scrollYoff = useRef();
  const filterIcon = useRef();
  const scrollEnd = () => {
    scrollYoff.current.scrollLeft = 1000;
  };

  const categories = [
    "Undangan",
    "Spanduk",
    "Blangko",
    "Kartu Nama",
    "Kalender",
    "Stiker",
    "Pin / Bros",
    "Papan Nama",
    "Undangan Digital",
    "Mug / Cangkir",
  ];
  const filterItem = [
    { name: "Category", id: 1, fold: false, dropdown: categories },
    { name: "Tags", id: 2, fold: true, dropdown: ["Putih", "Simple", "Bunga"] },
  ];
  useEffect(() => {
    setFilter(filterItem);
  }, []);

  // useEffect(() => {
  //   scrollYoff.current.addEventListener("wheel", function (e) {
  //     const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  //     this.scrollLeft -= delta * 110;
  //     e.preventDefault();
  //   });
  // });

  const showModalBox = (e) => {
    const id = e.target.dataset.id;
    const [filtered] = data.filter((item) => id == item.id);
    setProduk(filtered);
    setShowModal(true);
  };

  const filterProducts = (json) => {
    let filteredProducts = [];
    if (json.hasOwnProperty("category")) {
      json.category.map((key) => {
        filteredProducts = [
          ...filteredProducts,
          ...data.filter((product) => product.category == key),
        ];
      });
    } else {
      filteredProducts = data;
    }
    let filteredTags = [];
    if (json.hasOwnProperty("tags")) {
      json.tags.map((tag) => {
        filteredProducts.forEach((product) => {
          if (filteredTags.includes(product)) return;
          if (product.tags.includes(tag)) {
            filteredTags.push(product);
          }
        });
        filteredProducts = filteredTags;
      });
    }
    return filteredProducts;
  };

  const handleFilter = (e) => {
    setShowFilter(false);
    e.preventDefault();
    const formData = new FormData(e.target);
    let keys = [];
    for (let key of formData.keys()) {
      if (keys.find((item) => item == key) == undefined) keys.push(key);
    }
    const json = {};
    keys.map((key) => {
      Object.assign(json, { [key.toLowerCase()]: formData.getAll(key) });
    });

    const filteredProducts = filterProducts(json);
    setProducts(filteredProducts.sort((a, b) => a + b));
  };

  const dropDownToggle = (e) => {
    const id = e.target.dataset.id;
    const newFilter = filters.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          fold: !item.fold,
        };
      }
      return item;
    });
    setFilter(newFilter);
  };

  return (
    <section id="products" data-nav="Produk" className="mt-20 bg-[#f8f8f8]">
      <div className="search-area md:h-fit h-52 block">
        <div className="relative h-full after:w-full after:backdrop-blur-sm after:top-0 after:h-full after:bg-[#9B9B9B]/60 after:block after:absolute">
          <div className="absolute z-10 w-full h-full justify-center flex items-center">
            <span>
              <form action="" className="justify-center flex">
                <input
                  type="text"
                  name="produk"
                  id="produk"
                  className="inline-block  h-fit md:w-[450px] py-[9px] px-7 rounded-l-full focus:outline-none focus:ring-2 focus:ring-lightBlue text-base font-sourceSans text-tint"
                  placeholder="Cari di Produk..."
                  autoComplete="off"
                />
                <Button className="py-2 md:py-[9px] md:pr-7 pr-5 pl-4 text-base font-sourceSans rounded-l-none rounded-r-full">
                  <IoSearch className="inline-block text-2xl md:text-xl md:mr-1" />
                  <span className="md:inline-block hidden">{" Cari"}</span>
                </Button>
              </form>
              <div className="mt-1 md:ml-7 text-white md:text-sm text-xs font-sourceSans font-semibold flex gap-1 md:gap-2">
                <p>Populer : </p>
                <Link href="?filter=undangan">Undangan</Link>
                <p>|</p>
                <Link href="?filter=kalender">Kalender</Link>
                <p>|</p>
                <Link href="?filter=pin/bros">Pin / Bros</Link>
                <p>|</p>
                <Link href="?filter=undanganDigital">Undangan Digital</Link>
              </div>
            </span>
          </div>
          <Image
            src={bgProduk}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:container mx-5">
        <div className="md:mx-3 md:p-3 items-center p-2 rounded font-sourceSans h-fit flex gap-2 mt-5 bg-white relative">
          <button
            onClick={() => {
              setShowFilter(!showFilter);
              filterIcon.current.classList.toggle("rotate-180");
            }}
            className="border-on border-2 flex items-center rounded px-3 py-1 ">
            <span className="text-on md:text-base text-sm font-semibold inline-block">
              {" Filter"}
            </span>
            <span ref={filterIcon}>
              <IoChevronDown className="stroke-on rounded-lg" />
            </span>
          </button>
          <span className="h-8 border-l-2 border-on"></span>
          <div
            className={` outer-category w-full md:h-9 h-8 relative scrollbar-hide overflow-x-scroll font-sourceSans scroll-smooth`}
            ref={scrollYoff}>
            <ul className="flex top-0 z-10 absolute w-max gap-2 left-0 ">
              <li className="border-2 border-on font-semibold bg-on md:text-base text-sm text-white rounded px-3 py-1">
                Terbaru
              </li>
              <li className="border-2 border-on font-semibold bg-white  md:text-base text-sm text-on rounded px-3 py-1">
                Populer
              </li>
              <li className="border-2 border-on font-semibold bg-white  md:text-base text-sm text-on rounded px-3 py-1">
                Custom
              </li>
            </ul>
          </div>
          <button className="text-on hidden font-semibold font-sourceSans md:text-base text-sm md:flex items-center rounded pr-4">
            <span className="mr-[2px]">Urutkan</span>
            <Image src={arrow} alt="arrowimg" />
          </button>
        </div>
      </div>
      <form onSubmit={handleFilter}>
        <div className={`relative container ${showFilter ? "" : "hidden"}`}>
          <div className="absolute pt-5  bg-white rounded-sm top-5 z-10 border-[1px] border-[#cacaca] ">
            <div className="flex px-6 items-center mb-5">
              <h3 className="text-[#262626] text-lg font-semibold font-sourceSans ">
                Filters
              </h3>
              <span className="ml-16">
                <button
                  type="reset"
                  className="text-sm font-sourceSans text-on">
                  Clear all
                </button>
                <span className="text-sm ml-2 font-sourceSans text-on">-</span>
                <button
                  type="submit"
                  className="text-sm ml-2 font-sourceSans text-on">
                  Save view
                </button>
              </span>
            </div>
            {filters.map((item, i) => (
              <span className="block mb-4" key={i}>
                <div
                  key={item.id}
                  className={` ${
                    item.fold && filters.length - 1 != i ? "border-b-[1px]" : ""
                  } cursor-pointer duration-300 transition-colors relative mx-6 group flex justify-between items-center  dropdown  border-[#cacaca]/50`}>
                  <span
                    className={`${
                      item.fold ? "text-[#b4b5b8]" : "text-[#262626]"
                    } text-base pb-2 flex justify-between items-center font-sourceSans w-full`}>
                    <p>{item.name}</p>
                    <span className="text-[#262626] text-base">
                      {item.fold ? <IoChevronDown /> : <IoChevronUp />}
                    </span>
                  </span>

                  <button
                    type="button"
                    data-id={item.id}
                    onClick={dropDownToggle}
                    className="absolute w-full h-full"></button>
                </div>
                <ul
                  className={`bg-[#f6f8fa] font-sourceSans py-1 flex flex-col gap-[2px] scrollbar-hide ${
                    item.fold ? " hidden" : ""
                  }`}>
                  {item.dropdown.map((x, i) => (
                    <li className="px-5 flex items-center gap-2" key={i}>
                      <input
                        type="checkbox"
                        name={item.name}
                        value={x}
                        id={x}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <label htmlFor={x}>{x}</label>
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </div>
        </div>
      </form>

      <div className=" container flex flex-wrap mt-2 justify-between md:justify-center md:gap-4 gap-1 md:mx-auto">
        {products.map((x) => (
          <ProductCard
            className={
              "md:w-[23%] w-[49%] h-[260px] md:h-[300px] shadow-md mt-2"
            }
            key={x.id}
            data-id={x.id}
            onClick={showModalBox}>
            <ProductCard.Image
              src={x.image}
              alt="undangan 1"
              height="md:h-[65%] h-[60%]"
            />
            <ProductCard.Category>{x.category}</ProductCard.Category>
            <ProductCard.Title>{x.title}</ProductCard.Title>
            <ProductCard.Tags>
              {x.tags.map((tag) => (
                <Link key={tag} href={`/produk?filter=${tag.toLowerCase()}`}>
                  {tag}
                </Link>
              ))}
            </ProductCard.Tags>
            <ProductCard.Price>
              {"Rp " + x.price.toLocaleString("id-ID")}
            </ProductCard.Price>
          </ProductCard>
        ))}
      </div>
      <ModalBox
        data={produk}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </section>
  );
};

export default Products;
