import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";

import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
