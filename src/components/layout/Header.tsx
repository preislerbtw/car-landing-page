import "./Header.css"

export function Header() {
    return(
        <header className="header">
            <div className="logo">GARAGEM</div>
            <nav>
                <a href="#mais-vendidos">Mais Vendidos</a>
                <a href="#busca">Buscar Carro</a>
            </nav>
        </header>
    );
}