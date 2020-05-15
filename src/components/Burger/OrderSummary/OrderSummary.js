import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could also be a functional component
  state = {};

  componentWillUpdate() {
    console.log("[OrderSummary], did  update");
  }
  render() {
    const ingredients = Object.keys(this.props.ingredients).map((el) => {
      return (
        <li key={el}>
          <span style={{ textTransform: "capitalize" }}>{el}</span>:{" "}
          {this.props.ingredients[el]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger Contents: </p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
