import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/modules/Hero";
import { SpecsMarquee } from "../components/modules/SpecsMarquee";
import { BestSellers } from "../components/modules/BestSellers";
import { About } from "../components/modules/About";
import { Newsletter } from "../components/modules/Newsletter";
import { Footer } from "../components/layout/Footer";
import { ResultCard } from "../components/filters/ResultCard";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
    console.log("Buscando por:", query);
  }

  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch}/>
      <section className="px-10 py-16 text-center">
        {/* <div className="font-mono text-xs text-blue-500 tracking-widest uppercase mb-8">
          Exemplo
        </div> */}
        <ResultCard/>
      </section>
      <SpecsMarquee />
      <BestSellers />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}