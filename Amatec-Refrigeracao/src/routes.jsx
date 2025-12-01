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
    basename: "/Amatec_Refrigeracao",
  }
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
