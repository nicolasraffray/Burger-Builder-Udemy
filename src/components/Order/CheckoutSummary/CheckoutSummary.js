import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.modules.css";

const checkoutSummary = (props) => {
  return (
    <div style={classes.checkoutSummary}>
      <h1>Hope it tastes Good!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredient={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
