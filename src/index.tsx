import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { NutritionProvider } from "../Context/NutritionContext";

const convex = new ConvexReactClient("https://cautious-ox-174.convex.cloud");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NutritionProvider>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </NutritionProvider>
  </React.StrictMode>
);
