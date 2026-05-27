import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="Gestion Stock Logo" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  );
}
