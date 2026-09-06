import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/modules/Hero";
import { SpecsMarquee } from "../components/modules/SpecsMarquee";

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
      <SpecsMarquee />
    </div>
  );
}