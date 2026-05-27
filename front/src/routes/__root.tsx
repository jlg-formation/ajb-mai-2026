import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
