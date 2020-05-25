import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuidControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.3,
  meat: 2.5,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0,
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
    };
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    console.log(sum > 0);
    this.setState({
      purchaseable: sum > 0,
    });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const newTotalPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] === 0) {
      return;
    }
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    // return alert("You've continued to order");
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Test Name",
        adress: {
          street: "testStreet",
          zip: "testZip",
        },
        email: "test@example.com",
      },
      deliveryMethod: "fast",
    };
    axios
      .post("/orders.json", order)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredient={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
