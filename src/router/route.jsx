import { createBrowserRouter, Outlet } from "react-router-dom";

import MainContainer from "../layout/mainContainer";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import EmployeesPage from "../pages/employeesPage";
import HomePage from "../pages/homePage";
import ErrorPage from "../pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/employee-list",
        element: <EmployeesPage />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
