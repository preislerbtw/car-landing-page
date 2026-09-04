import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/modules/Hero";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
    console.log("Buscando por:", query);
    // aqui depois vai entrar a chamada pra API da FIPE
  }

  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch} />
    </div>
  );
}