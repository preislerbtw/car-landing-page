import "./Newsletter.css";

export function Newsletter() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    alert("Inscrição simulada — ainda sem backend.");
  }

  return (
    <section className="newsletter" id="newsletter">
      <h2>Fique de olho no mercado.</h2>
      <p>Receba atualizações sobre os mais vendidos e novidades da FIPE.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder="seu@email.com" required />
        <button type="submit">Inscrever</button>
      </form>
    </section>
  );
}