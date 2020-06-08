import React from "react";
import "./App.modules.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      Hello
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
