import "./Footer.css";

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer-logo">GARAGEM.</div>
            <div className="footer-nav">
                <div className="footer-links">
                    <a href="#maisvendidos">Mais Vendidos</a>
                    <a href="#busca">Buscar Carro</a>
                    <a href="#sobre">Sobre</a>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/preislerbtw" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
            </div>
            <div className="footer-copy">© 2026/06 — Projeto de Estudo</div>
        </footer>
    );
}