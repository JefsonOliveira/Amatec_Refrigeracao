import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  {
    basename: "/Amatec-Refrigeracao",
  }
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
