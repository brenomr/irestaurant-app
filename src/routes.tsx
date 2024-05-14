import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/orders",
    element: <h1>Space reserved for Orders.</h1>,
  },
  {
    path: "*",
    element: <h1>Space reserved for a Not Found Page.</h1>,
  },
];

export function MainRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <>
          <Route key={route.path} path={route.path} element={route.element} />
        </>
      ))}
    </Routes>
  );
}
