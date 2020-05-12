import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../Burger/Burger'

class BurgerBuilder extends Component {
  state = {  }

  render() { 
    return ( 
      <Aux>
        <Burger />
        <div>Burger Controls</div>
      </Aux>
     );
  }
}
 
export default BurgerBuilder;