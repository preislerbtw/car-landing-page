export function About() {
  return (
    <section className="bg-bg-alt border-y border-line px-10 py-24" id="sobre">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <div className="aspect-square bg-gradient-to-br from-panel to-bg border border-line rounded-md" />
        <div>
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            O Projeto
          </div>
          <h2 className="font-display font-extrabold text-[clamp(28px,4vw,36px)] text-text mb-6">
            Dados reais, direto da fonte.
          </h2>
          <p className="text-text-dim leading-relaxed mb-4 max-w-[520px]">
            Consultamos a Tabela FIPE em tempo real pra te mostrar preço, ano
            de fabricação e histórico de valores de qualquer modelo vendido
            no Brasil — sem estimativas, sem achismo.
          </p>
          <p className="text-text-dim leading-relaxed max-w-[520px]">
            Combine isso com um panorama dos carros mais vendidos do
            momento e tenha uma visão completa do mercado antes de decidir.
          </p>
        </div>
      </div>
    </section>
  );
}