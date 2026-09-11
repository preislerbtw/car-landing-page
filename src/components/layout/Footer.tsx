export function Footer() {
  return (
    <footer className="border-t border-line px-10 py-10 flex flex-wrap justify-between items-center gap-4 text-text-dim text-sm">
      <div className="font-display font-extrabold tracking-wide text-text">GARAGEM.</div>
      <div className="flex gap-6">
        <a href="#mais-vendidos" className="hover:text-text">Mais Vendidos</a>
        <a href="#busca" className="hover:text-text">Buscar Carro</a>
        <a href="#sobre" className="hover:text-text">Sobre</a>
      </div>
      <div>© 2026 — Projeto de estudo</div>
    </footer>
  );
}