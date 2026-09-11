export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-bg/75 backdrop-blur-md border-b border-line">
      <div className="font-display font-extrabold text-xl tracking-wider text-blue-500">
        GARAGEM
      </div>
      <nav className="flex gap-9">
        <a href="#mais-vendidos" className="text-xs uppercase tracking-wide text-text-dim hover:text-text transition-colors">
          Mais Vendidos
        </a>
        <a href="#busca" className="text-xs uppercase tracking-wide text-text-dim hover:text-text transition-colors">
          Buscar Carro
        </a>
      </nav>
    </header>
  );
}