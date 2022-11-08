import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Header } from "components";
import { Exchanges, ExchangeDetails, NotFound } from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exchanges />,
    errorElement: <NotFound />,
  },
  {
    path: "exchanges",
    element: <Exchanges />,
    errorElement: <NotFound />,
  },
  {
    path: "exchanges/:exchangeId",
    element: <ExchangeDetails />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="app-container">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
