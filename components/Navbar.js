import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ active }) {
  const navLink = [
    { name: "Beranda", active: true, link: "/", scroll: false },
    { name: "Terlaris", active: false, link: "/#populer", scroll: false },
    { name: "Kategori", active: false, link: "/#category", scroll: false },
    { name: "Produk", active: false, link: "/produk", scroll: true },
    { name: "Contact Us", active: false, link: "#footer", scroll: false },
  ];
  const checkbox = useRef();
  const [navItem, setNavItem] = useState(navLink);
  const [checked, setChecked] = useState(false);
  const [sections, setSections] = useState([]);
  const [{ winHeight, docHeight }, setWinDoc] = useState({});

  useEffect(() => {}, []);
  const setActive = (e) => {
    const element = e;
    const newNavItem = navItem.map((link) => {
      if (link.name == element) return { ...link, active: true };
      return { ...link, active: false };
    });
    setNavItem(newNavItem);
  };

  const showNavbar = (e) => {
    checkbox.current.click();
    setChecked(checkbox.current.checked);
  };

  const navbar = useRef();
  useEffect(() => {
    window.onscroll = () => {
      const top = window.scrollY;
      navbar.current.offsetTop < top
        ? navbar.current.classList.add("shadow-md")
        : navbar.current.classList.remove("shadow-md");
      sections.forEach((section) => {
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
          if (top + winHeight + 200 > docHeight) return setActive("Contact Us");
          setActive(section.dataset.nav);
        }
      });
    };
  });

  useEffect(() => {
    if (active) setActive(active);
    const section = document.querySelectorAll("section");
    setSections(section);
    setWinDoc({
      winHeight: window.innerHeight,
      docHeight: document.body.scrollHeight,
    });
  }, []);

  return (
    <nav id="navbar" ref={navbar} className=" bg-white w-full top-0 fixed z-50">
      <div className="flex justify-between py-[20px] container ">
        <h1 className="font-sourceSans mt-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-lightBlue to-darkBlue">
          Harvest Grafika
        </h1>

        <div className="nav font-sourceSans lg:mt-1 font-semibold">
          <div
            className="lg:hidden cursor-pointer overflow-hidden p-2 -mt-1"
            onClick={showNavbar}>
            <input
              type={"checkbox"}
              id="navcheckbox"
              ref={checkbox}
              className="hidden peer/navcheckbox"
            />
            <span
              className={`border-b-[3px] rounded-md w-7 mt-2 transition-all duration-300 border-on block ${
                checked ? "translate-y-[7px] -rotate-45" : ""
              }`}></span>
            <span
              className={`border-b-[3px] rounded-md w-7 mt-1 transition-all duration-300 border-on block ${
                checked ? "-translate-x-10 opacity-0" : ""
              }`}></span>
            <span
              className={`border-b-[3px] rounded-md w-7 mt-1 transition-all duration-300 border-on block ${
                checked ? "-translate-y-[7px] rotate-45" : ""
              }`}></span>
          </div>

          <ul
            className={`absolute bg-white/30 border-1 lg:border-none lg:bg-transparent border-white/50 lg:p-0 p-8 grid transition-all rounded-md backdrop-blur-sm lg:overflow-visible overflow-hidden md:visible md:w-fit duration-500 lg:flex lg:gap-7 gap-5 lg:h-fit lg:opacity-100 ${
              checked ? "h-64 opacity-100 " : "h-0 invisible p-0 opacity-0"
            } lg:static right-[70px] justify-between mt-1 z-50`}>
            {navItem.map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.link}
                  scroll={nav.scroll}
                  onClick={(e) => {
                    if (e.target.text == "Beranda")
                      window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`tracking-wider relative ${
                    nav.active ? "active text-on" : "text-off"
                  } `}>
                  {nav.name}
                </Link>
              </li>
            ))}

            <li className="hidden lg:inline order-button">
              <Link
                href={"#"}
                className=" rounded-full drop-shadow-md bg-gradient-to-br from-darkBlue to-lightBlue bg-clip-text text-transparent">
                Pesan Disini
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
