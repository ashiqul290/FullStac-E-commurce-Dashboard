import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from '../Layout/Rootlayout';
import { Home } from '../page/Home';
import { Login } from "../page/Login";
import { AddProduct } from "../page/AddProduct";
import { AllProduct } from "../page/AllProduct";
import AddCategory from "../page/AddCategory";
import { AllCategory } from "../page/AllCategory";
import { AllUser } from "../page/AllUser";
import { AllMarchent } from "../page/AllMarchent";

export const App = () => {

  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "add-product", Component: AddProduct },
      { path: "all-product", Component: AllProduct },
      { path: "add-category", Component: AddCategory },
      { path: "all-category", Component: AllCategory },
      { path: "all-users", Component: AllUser },
      { path: "all-marchent", Component: AllMarchent },

    ],
  },
  {
    path: "/login" , Component : Login
  }
]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
