import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global-styles";

import { HomePage } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { MyPage } from "./pages/my-page";
import { MyPageEdit } from "./pages/my-page-edit";
import { Toaster } from "sonner";
import { BuddyPage } from "./pages/buddy-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

export const App = () => {
  // useAuthCheck();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-center" richColors />
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};
