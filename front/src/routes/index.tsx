import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="home">
      <h1>Gérer efficacement votre stock</h1>
      <Link to="/stock" className="button primary">
        Voir le stock
      </Link>
    </div>
  );
}
