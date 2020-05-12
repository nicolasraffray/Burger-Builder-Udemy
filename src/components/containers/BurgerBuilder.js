import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../Burger/Burger'

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = { 
      ingredients: {
        cheese: 2,
        meat: 1,  
        salad: 2,
        bacon: 1
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