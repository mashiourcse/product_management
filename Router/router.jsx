import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";

import Layouts from "../src/components/layouts/Layouts";
import { ProductList } from "../src/pages/Product/ProductList";
import { CreateProduct } from "../src/pages/Product/CreateProduct";
import { EditProduct } from "../src/pages/Product/EditProduct";
import { ViewProduct } from "../src/pages/Product/ViewProduct";
import { OrderList } from "../src/pages/Order/OrderList";
import { CreateOrder } from "../src/pages/Order/CreateOrder";
import { CreateOrderVariant } from "../src/pages/Order/CreateOrderVariant";
import { CreateOrderFinal } from "../src/pages/Order/CreateOrderFinal";
import { EditOrder } from "../src/pages/Order/EditOrder";
import { ViewOrder } from "../src/pages/Order/ViewOrder";

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
        path: "/product-list",
        element: <ProductList/>
      },
      {
        path: "/create-product",
        element: <CreateProduct/>
      },
      {
        path: "/edit-product/:id",
        element: <EditProduct/>
      },
      {
        path: "/view-product/:id",
        element: <ViewProduct/>
      },

      {
        path: "/order-list",
        element: <OrderList/>
      },
      {
        path: "/create-order",
        element: < CreateOrder/>
      },
      {
        path: "/create-order-variant",
        element: < CreateOrderVariant/>
      },
      {
        path: "/create-order-final",
        element: < CreateOrderFinal/>
      },
      {
        path: "/edit-order/:id",
        element: <EditOrder />
      },
      {
        path: "/view-order/:id",
        element: <ViewOrder />
      }
    ],
  },
 
]);
