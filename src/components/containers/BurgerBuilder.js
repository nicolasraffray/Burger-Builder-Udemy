import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuidControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.3,
  meat: 2.5,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = { 
      ingredients: {
        cheese: 0,
        meat: 0,  
        salad: 0,
        bacon: 0
      },
      totalPrice: 4
    }
  }
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1 
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const newTotalPrice = INGREDIENT_PRICES[type] + this.state.totalPrice
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    })
  }

  removeIngredient = (type) => {

  } 

  render() { 
    return ( 
      <Aux>
        <Burger ingredient={this.state.ingredients}/>
        <BuildControls ingredientAdded={this.addIngredientHandler}/>
      </Aux>
     );
  }
}
 
export default BurgerBuilder;