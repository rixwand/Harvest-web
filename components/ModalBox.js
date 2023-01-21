import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoAdd, IoClose, IoRemoveOutline } from "react-icons/io5";
import Button from "./Button";
const ModalBox = ({ data = {}, showModal, setShowModal }) => {
  const produk = data;
  const [jumlah, setJumlah] = useState(1);
  const tambah = () => {
    setJumlah(jumlah + 1);
  };
  const kurang = () => {
    jumlah <= 1 ? jumlah : setJumlah(jumlah - 1);
  };
  const setValue = (e) => {
    setJumlah(parseInt(e.target.value));
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center md:px-0 px-8 items-center shadow-md flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="flex flex-wrap  md:w-[570px] md:h-[347px] rounded-md overflow-hidden">
                <div className="md:w-1/2 md:h-full h-64  w-full bg-[#E6E6E6] md:p-8">
                  <Image
                    src={produk.image}
                    className="w-full h-full object-cover"
                    alt={"undangan"}
                  />
                </div>
                <div className="md:w-1/2 w-full md:h-full h-64 bg-white flex flex-col">
                  <h1 className=" md:mt-8 ml-7 mt-2 text-2xl font-sourceSans font-semibold text-[#626262]">
                    {produk.title}
                  </h1>
                  <p className="mt-2 md:mt-9 ml-7 md:text-sm font-sourceSans font-semibold text-[#626262]">
                    Kategori : {produk.category}
                  </p>
                  <div className="mt-2 md:mt-3 ml-7 flex gap-2 items-center md:text-sm font-sourceSans font-semibold text-[#626262]">
                    <p>Tags :</p>
                    <p className=" text-xs flex gap-1 italic text-[#56AEFF] underline font-sourceSans">
                      {produk.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/produk?filter=${tag.toLowerCase()}`}>
                          {tag}
                        </Link>
                      ))}
                    </p>
                  </div>

                  <p className="mt-2 md:mt-3 ml-7 md:text-sm font-sourceSans font-semibold text-[#626262]">
                    Harga :
                    <span className="italic">{` Rp ${produk.price.toLocaleString(
                      "id-ID"
                    )}`}</span>
                  </p>
                  <div className="mt-1 md:mt-5 md:block items-center flex gap-4">
                    <p className="md:text-sm ml-7 font-sourceSans font-semibold text-[#626262]">
                      Jumlah
                    </p>
                    <div className="md:w-full flex justify-center mt-3">
                      <button
                        onClick={kurang}
                        className=" bg-gradient-to-br from-lightBlue to-darkBlue py-[6px] px-3 rounded-l-md">
                        <IoRemoveOutline className="[&>path]:stroke-[50px] [&>path]:stroke-white" />
                      </button>
                      <input
                        type="number"
                        name="jumlah"
                        id="jumlah"
                        value={jumlah}
                        onChange={setValue}
                        className="focus:outline-none text-center w-[70px] focus:border-darkBlue border-lightBlue focus:border-y-2 border-y-2"
                      />
                      <button
                        onClick={tambah}
                        className=" bg-gradient-to-tr from-lightBlue to-darkBlue py-[6px] px-3 rounded-r-md">
                        <IoAdd className="[&>path]:stroke-[50px] [&>path]:stroke-white" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-center gap-7 mt-5 md:mt-8 md:pb-0">
                    <button>
                      <Button.outline>Pesan Blanko</Button.outline>
                    </button>
                    <Button className="text-xs px-3">Pesan Sekarang</Button>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2  text-3xl md:bg-transparent bg-black/30 rounded-full text-white md:text-[#aeaeae]">
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalBox;
