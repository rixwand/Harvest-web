import Hero from "../components/Hero";
import ProdukPopuler from "../components/Products/Produk-Populer";
import ProdukBaru from "../components/Products/Produk-baru";
import CategoryProduk from "../components/Products/Category-produk";
import Produk from "../components/Products/Produk";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harvest Grafika</title>
      </Head>
      <Navbar />
      <Hero />
      <ProdukPopuler />
      <ProdukBaru />
      <CategoryProduk />
      <Produk />
      <Footer />
    </>
  );
}
