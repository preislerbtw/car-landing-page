import { useState } from "react";

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
    <section className="hero-bg min-h-[60vh] flex flex-col justify-center items-start px-10 pt-32 pb-10">
      <div className="max-w-[720px] mx-auto text-left">
        <div className="font-mono text-xs text-blue-500 tracking-widest uppercase mb-5">
          Dados reais da tabela FIPE
        </div>
        <h1 className="font-display font-extrabold text-[clamp(40px,6vw,72px)] leading-[0.95] text-text mb-5">
          Pesquise qualquer <span className="text-blue-500">carro</span>.
        </h1>
        <p className="text-base text-text-dim max-w-[460px] mb-8">
          Veja ano de fabricação, faixa de preço e histórico de valores de
          qualquer modelo vendido no Brasil.
        </p>

        <form className="flex gap-2.5 w-full max-w-[480px]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ex: Volkswagen Golf, Honda Civic..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex-1 bg-panel border border-line text-text px-4 py-3.5 rounded font-body text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-bg border-none px-6 py-3.5 rounded font-semibold text-sm uppercase tracking-wide cursor-pointer"
          >
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}