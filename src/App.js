import React from "react";
import "./App.modules.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder";

function App() {
  return (
    <div className="main">
      Hello
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
