const items = [
  "TABELA FIPE ATUALIZADA",
  "30 MIL+ MODELOS",
  "DADOS REAIS DE MERCADO",
  "HISTÓRICO POR ANO",
];

export function SpecsMarquee() {
  return (
    <div className="border-y border-line bg-bg-alt overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] font-mono text-sm tracking-wide text-text-dim">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="px-8 relative after:content-['•'] after:absolute after:-right-1 after:text-accent">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}