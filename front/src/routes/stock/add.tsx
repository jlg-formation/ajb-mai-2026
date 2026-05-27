import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stock/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <span>Nom</span>
          <input type="text" />
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
        </label>
        <div className="error"></div>
        <button className="primary">
          <FontAwesomeIcon icon={faPlus} />
          <span>Ajouter</span>
        </button>
      </form>
    </>
  );
}
