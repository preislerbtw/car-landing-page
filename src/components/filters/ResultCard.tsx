export function ResultCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 bg-panel border border-line rounded-md overflow-hidden max-w-[720px] mx-auto">
      <div className="aspect-video sm:aspect-auto bg-gradient-to-br from-[#232326] to-[#151517]" />
      <div className="p-5 sm:py-7 sm:pr-7 sm:pl-0 flex flex-col gap-2">
        <div className="font-mono text-[11px] text-blue-500 uppercase tracking-wide">
          GASOLINA · 4X2
        </div>
        <h3 className="font-display font-bold text-xl text-text mb-2">
          Toyota Supra 3.0 Turbo
        </h3>
        <div className="flex justify-center gap-10 border-y border-line py-3.5 my-2">
          {/* change position of all items to center */}
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Ano</span>
            1998
          </div>
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Combustível</span>
            Gasolina
          </div>
          <div className="font-mono text-sm text-text">
            <span className="block text-[10px] text-text-dim uppercase mb-1">Cód. FIPE</span>
            005340-6
          </div>
        </div>
        <div className="font-mono text-[22px] text-blue-500">R$ 450.000,00</div>
      </div>
    </div>
  );
}