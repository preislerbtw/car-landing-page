import "./SpecsMarquee.css";

const items = [
    "TABELA FIPE ATUALIZADA",
    "30 MIL+ MODELOS",
    "DADOS REAIS DE MERCADO",
    "HISTORICO POR ANO",
];

export function SpecsMarquee() {
    return(
        <div className="marquee-wrap">
            <div className="marquee">
                {[...items, ...items].map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        </div>
    );
}
