import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/modules/Hero";
import { SpecsMarquee } from "../components/modules/SpecsMarquee";
import { BestSellers } from "../components/modules/BestSellers";
import { About } from "../components/modules/About";
import { Footer } from "../components/layout/Footer";
import { Newsletter } from "../components/modules/Newletter";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
    console.log("Buscando por:", query);
  }

  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch} />
      <SpecsMarquee/>
      <BestSellers />
      <About/>
      <Footer/>
      <Newsletter/>
    </div>
  );
}