import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import type { NewArticle } from "../../types/Article";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/stock/add")({
  component: RouteComponent,
});

const url = "http://localhost:3000/api/articles";

const addArticles = async (newArticle: NewArticle) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return Promise.resolve();
};

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: "Truc",
      price: 0,
      qty: 1,
    } satisfies NewArticle,
    onSubmit: async ({ value }) => {
      console.log(value);

      mutation.mutate(value);

      console.log("fini la soumission");
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addArticles,
    onSuccess: () => {
      // refresh automatique
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
      navigate({
        to: "/stock",
      });
    },
  });

  return (
    <>
      <h1>Ajouter un article</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) =>
              value.length < 3 ? "Minimum 3 caractères" : undefined,
          }}
        >
          {(field) => (
            <label>
              <span>Nom</span>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        </form.Field>
        <form.Field
          name="price"
          validators={{
            onChange: ({ value }) => (value < 0 ? "Prix positif" : undefined),
          }}
        >
          {(field) => (
            <label>
              <span>Price</span>
              <input
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(+e.target.value)}
                step="0.01"
              />
            </label>
          )}
        </form.Field>
        <form.Field
          name="qty"
          validators={{
            onChange: ({ value }) =>
              value % 1 !== 0 ? "Entier stp" : undefined,
          }}
        >
          {(field) => (
            <label>
              <span>Quantité</span>
              <input
                type="number"
                value={field.state.value}
                onChange={(e) => field.handleChange(+e.target.value)}
              />
            </label>
          )}
        </form.Field>

        <div className="error"></div>
        <button className="primary" disabled={!form.state.isValid}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </>
  );
}
