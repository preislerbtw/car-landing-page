import "./About.css";

export function About() {
    return (
        <section className="about" id="sobre">
            <div className="about-grid">
                <div className="about-visual">
                    <div className="about-text">
                        <div className="section-label">O Projeto</div>
                        <h2>Dados reais, direto da fonte.</h2>
                        <p>
                            Consultamos a Tabela FIPE em tempo real pra te mostrar preço, ano
                            de fabricação e histórico de valores de qualquer modelo vendido
                            no Brasil — sem estimativas, sem achismo.
                        </p>
                        <p>
                            Combine isso com um panorama dos carros mais vendidos do
                            momento e tenha uma visão completa do mercado antes de decidir.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}