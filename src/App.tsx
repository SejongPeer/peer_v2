import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";

import { HomePage } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Toaster position="bottom-center" richColors />
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
