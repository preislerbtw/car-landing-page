import { bestSellers } from "../../data/bestSellers";
import "./BestSellers.css";

export function BestSellers() {
    return (
        <section className="best-sellers">
            <div className="section-head">
                <div className="section-label">Mais Vendidos</div>
                <h1>O que o <span>Brasil</span> está comprando</h1>
            </div>

            <div className="best-sellers-grid">
                {bestSellers.map((car) => ( // iterates over an array and creates a new array of the same length
                    <div className="car-card" key={car.id}>
                        <div className="car-card-image" />
                        <div className="car-card-body">
                            <h3>{car.name}</h3>
                            <div className="car-card-tag">{car.category}</div>
                            <div className="price-row">
                                <span className="price-label">A partir de</span>
                                <span className="price">{car.priceFrom}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}