import React from 'react';
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map(el => {
  return (
  <li key={el}>
    <span style={{textTransform: 'capitalize'}}>{el}</span>: {props.ingredients[el]}
  </li>
    )
  })
  return (
    <Aux>
      <h3>Your Order</h3>
        <p>Burger Contents: </p>
      <ul>
        {ingredients}
      </ul>
      <p>Continue to Checkout</p>
    </Aux>
  )
}

export default orderSummary