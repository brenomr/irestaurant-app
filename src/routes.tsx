import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <h1>Space reserved for Products.</h1>,
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
