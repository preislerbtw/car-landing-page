import { SearchBar } from "./SearchBar";
import { ResultCard } from "./ResultCard";
import "./SearchSection.css";

export function SearchSection() {
  return (
    <section className="search-section" id="busca">
      <div className="section-head">
        <div className="section-label">Consulta FIPE</div>
        <h2>Pesquise qualquer carro antigo.</h2>
      </div>
      <SearchBar />
      <ResultCard />
    </section>
  );
}