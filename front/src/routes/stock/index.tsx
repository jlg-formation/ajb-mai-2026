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

function RouteComponent() {
  return (
    <>
      <h1>Liste des articles</h1>
      <div className="content">
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
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">1.23 €</td>
              <td className="qty">345</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">1.23 €</td>
              <td className="qty">345</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">1.23 €</td>
              <td className="qty">345</td>
            </tr>
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">1.23 €</td>
              <td className="qty">345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
