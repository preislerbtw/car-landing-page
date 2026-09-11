import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar">
      <select defaultValue="">
        <option value="" disabled>
          Marca
        </option>
        <option>Volkswagen</option>
        <option>Chevrolet</option>
        <option>Honda</option>
      </select>

      <select defaultValue="">
        <option value="" disabled>
          Modelo
        </option>
        <option>Amarok</option>
        <option>Onix</option>
        <option>Civic</option>
      </select>

      <select defaultValue="">
        <option value="" disabled>
          Ano
        </option>
        <option>2024</option>
        <option>2020</option>
        <option>2014</option>
      </select>

      <button>Consultar</button>
    </div>
  );
}