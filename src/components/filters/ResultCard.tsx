export function ResultCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 bg-panel border border-line rounded-md overflow-hidden max-w-[720px] mx-auto">
      <div className="aspect-video sm:aspect-auto bg-gradient-to-br from-[#232326] to-[#151517]" />
      <div className="p-5 sm:py-7 sm:pr-7 sm:pl-0 flex flex-col gap-2">
        <div className="font-mono text-[11px] text-blue-500 uppercase tracking-wide">
          Diesel · 4x4
        </div>
        <h3 className="font-display font-bold text-xl text-text mb-2">
          VW Amarok High.CD 2.0 16V TDI
        </h3>
        <div className="flex gap-6 border-y border-line py-3.5 my-2">
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Ano</span>
            2014
          </div>
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Combustível</span>
            Diesel
          </div>
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Cód. FIPE</span>
            005340-6
          </div>
        </div>
        <div className="font-mono text-[22px] text-blue-500">R$ 85.179,00</div>
      </div>
    </div>
  );
}