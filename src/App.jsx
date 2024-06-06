// App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RecommendationSystem from "./pages/RecommendationSystem";
import About from "./pages/About";
import { routes } from "../Router/router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <RouterProvider router={routes} />
    </>
  );
}

export default App;
