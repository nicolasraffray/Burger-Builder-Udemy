import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../Burger/Burger'

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = { 
      ingredients: {
        cheese: 0,
        meat: 0,  
        salad: 0,
        bacon: 0
      }
    }
  }
  

  render() { 
    return ( 
      <Aux>
        <Burger ingredient={this.state.ingredients}/>
        <div>Burger Controls</div>
      </Aux>
     );
  }
}
 
export default BurgerBuilder;