import React from 'react';
import Aux from '../../hoc/Aux'

const layout = (props) => {
  return(
    <Aux>
      <div>
        ToolBar, Sidedrawer, Backdrop
      </div>
      <main>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;