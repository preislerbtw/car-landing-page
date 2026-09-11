import { bestSellers } from "../../data/bestSellers";

export function BestSellers() {
  return (
    <section className="px-10 py-24 max-w-[1200px] mx-auto" id="mais-vendidos">
      <div className="mb-12">
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
          Mais Vendidos
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,4vw,42px)] text-text">
          O que o Brasil está comprando.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bestSellers.map((car) => (
          <div key={car.id} className="bg-panel border border-line rounded-md overflow-hidden transition-transform hover:-translate-y-1.5 hover:border-accent">
            <div className="aspect-video bg-gradient-to-br from-[#232326] to-[#151517]" />
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-text mb-1.5">{car.name}</h3>
              <div className="font-mono text-[11px] text-text-dim uppercase tracking-wide mb-5">
                {car.category}
              </div>
              <div className="flex flex-col gap-1 border-t border-line pt-4">
                <span className="text-[11px] text-text-dim uppercase">A partir de</span>
                <span className="font-mono text-lg text-accent">{car.priceFrom}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}