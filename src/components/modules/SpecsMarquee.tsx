const items = [
  "PREÇOS ATUALIZADOS",
  "MILHARES DE MODELOS",
  "DADOS DO MERCADO",
  "HISTÓRICO DE VALORES",
  "AVALIAÇÃO DE MERCADO",
  "DETALHES DO VEÍCULO",
  "COMPARATIVO DE PREÇOS",
  "VALOR MÉDIO NACIONAL",
  "ANÁLISE POR MODELO",
  "INFORMAÇÕES COMPLETAS",
];


export function SpecsMarquee() {
  return (
    <div className="border-y border-line bg-bg-alt overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] font-mono text-sm tracking-wide text-text-dim">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="px-8 relative after:content-['•'] after:absolute after:-right-1 after:text-blue-500">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}