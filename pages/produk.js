import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Semua-produk";

export default function Home() {
  return (
    <>
      <Head>
        <title>Produk</title>
      </Head>
      <Navbar active="Produk" />
      <Products />
      <Footer />
    </>
  );
}
