import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/stock/")({
  component: RouteComponent,
});

const articles = [
  { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
  { id: "a2", name: "Pelle", price: 23.99, qty: 6 },
];

function RouteComponent() {
  return (
    <>
      <h1>Liste des articles</h1>
      <div className="content">
        <div>
          <nav>
            <button title="Rafraîchir">
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
            <Link title="Rafraîchir" to="/stock/add" className="button">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
            <button title="Supprimer">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </nav>
          <div className="error"></div>
          <table>
            <thead>
              <tr>
                <th className="name">Nom</th>
                <th className="price">Prix</th>
                <th className="qty">Quantité</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id}>
                  <td className="name">{a.name}</td>
                  <td className="price number">{a.price} €</td>
                  <td className="qty number">{a.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
