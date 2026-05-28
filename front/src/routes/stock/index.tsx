import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Article } from "../../types/Article";

export const Route = createFileRoute("/stock/")({
  component: RouteComponent,
});

const url = "http://localhost:3000/api/articles";

async function fetchArticles() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return response.json() as Promise<Article[]>;
}

function RouteComponent() {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    retry: false,
  });
  // const [articles, setArticles] = useState([
  //   { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
  //   { id: "a2", name: "Pelle", price: 23.99, qty: 6 },
  // ]);

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
          <div className="error">{error ? "Erreur Technique" : ""}</div>
          <table>
            <thead>
              <tr>
                <th className="name">Nom</th>
                <th className="price">Prix</th>
                <th className="qty">Quantité</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={3}>
                    <div className="loading">
                      <FontAwesomeIcon icon={faCircleNotch} spin={true} />
                      <span>Chargement...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                articles?.map((a) => (
                  <tr key={a.id}>
                    <td className="name">{a.name}</td>
                    <td className="price number">{a.price} €</td>
                    <td className="qty number">{a.qty}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
