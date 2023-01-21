import Hero from "./Hero";
import ProdukPopuler from "./Products/Produk-Populer";
import ProdukBaru from "./Products/Produk-baru";
import CategoryProduk from "./Products/Category-produk";
import Produk from "./Products/Produk";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Hero />
      <ProdukPopuler />
      <ProdukBaru />
      <CategoryProduk />
      <Produk />
      <Footer />
    </>
  );
};

export default Main;
