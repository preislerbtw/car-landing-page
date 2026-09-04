import { useState } from "react";
import "./Hero.css";

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <section className="hero">
      <div className="hero-eyebrow">Dados reais da tabela FIPE</div>
      <h1>
        Pesquise qualquer <span>carro</span>.
      </h1>
      <p>Veja ano de fabricação, faixa de preço e histórico de valores de qualquer modelo vendido no Brasil.</p>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ex: Volkswagen Golf, Honda Civic..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
}