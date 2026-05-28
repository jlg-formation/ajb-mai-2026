import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Article } from "../../types/Article";
import { useState } from "react";

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

const deleteArticles = async (ids: Set<Article["id"]>) => {
  const body = JSON.stringify([...ids]);
  console.log("body: ", body);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return Promise.resolve();
};

function RouteComponent() {
  const [selectedArticleIds, setselectedArticleIds] = useState(
    new Set<Article["id"]>(),
  );

  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    retry: false,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteArticles,
    onSuccess: () => {
      // refresh automatique
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
      setselectedArticleIds(new Set());
    },
  });

  //////////////////

  const handleSelect = (id: Article["id"]) => {
    console.log("id: ", id);
    if (selectedArticleIds.has(id)) {
      selectedArticleIds.delete(id);
      setselectedArticleIds(new Set(selectedArticleIds));
      return;
    }
    selectedArticleIds.add(id);
    setselectedArticleIds(new Set(selectedArticleIds));
  };

  const handleDelete = () => {
    console.log("delete");
    mutation.mutate(selectedArticleIds);
  };

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
            {selectedArticleIds.size > 0 && (
              <button title="Supprimer" onClick={() => handleDelete()}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            )}
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
                  <tr
                    key={a.id}
                    onClick={() => handleSelect(a.id)}
                    className={selectedArticleIds.has(a.id) ? "selected" : ""}
                  >
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
