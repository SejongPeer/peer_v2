import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";

import { HomePage } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { MyPage } from "./pages/my-page";
import { MyPageEdit } from "./pages/my-page-edit";
import { Toaster } from "sonner";
import { BuddyPage } from "./pages/buddy-page";

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
  {
    path: "/buddy",
    element: <BuddyPage />,
  },
  {
    path: "/my-page",
    element: <MyPage />,
  },
  {
    path: "/my-page/edit",
    element: <MyPageEdit />,
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
