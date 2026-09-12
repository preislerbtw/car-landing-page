export function Newsletter() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    alert("Inscrição simulada — ainda sem backend.");
  }

  return (
    <section className="text-center px-10 py-24" id="newsletter">
      <h2 className="font-display font-extrabold text-[clamp(28px,4vw,40px)] text-text mb-4">
        Fique de olho no mercado.
      </h2>
      <p className="text-text-dim mb-8">
        Receba atualizações sobre os mais vendidos e novidades da FIPE.
      </p>
      <form className="flex justify-center gap-2.5 max-w-[420px] mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="seu@email.com"
          required
          className="flex-1 bg-panel border border-line text-text px-4 py-3.5 rounded font-body text-sm focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 text-bg border-none px-6 py-3.5 rounded font-semibold text-sm uppercase tracking-wide cursor-pointer">
          Inscrever
        </button>
      </form>
    </section>
  );
}