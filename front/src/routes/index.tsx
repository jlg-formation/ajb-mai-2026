import { createFileRoute, Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="home">
      <h1>Gérer efficacement votre stock</h1>
      <Link to="/stock" className="button primary">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </div>
  );
}
