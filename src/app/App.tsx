import React from "react";
import "./App.css";

import { Header } from "components";
import { Exchanges } from "pages";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Exchanges />
    </div>
  );
}

export default App;
