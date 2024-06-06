import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import RecommendationSystem from "../src/pages/RecommendationSystem";
import About from "../src/pages/About";
import Layouts from "../src/components/layouts/Layouts";
import { ProductList } from "../src/pages/Product/ProductList";
import { CreateProduct } from "../src/pages/Product/CreateProduct";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recommendation-system",
        element: <RecommendationSystem />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product-list",
        element: <ProductList/>
      },
      {
        path: "/create-product",
        element: <CreateProduct/>
      }
    ],
  },
  // {
  //     path: "/",
  //     element: <Home/>,
  // },
  // {
  //     path: "/recommendation-system",
  //     element: <RecommendationSystem/>,
  // },
  // {
  //     path: "/about",
  //     element: <About/>,
  // },
]);
