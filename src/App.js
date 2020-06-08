import React from "react";
import "./App.modules.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/containers/Checkout/Checkout";
function App() {
  return (
    <div className="main">
      Hello
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
