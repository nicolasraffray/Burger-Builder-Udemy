import React from 'react';
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map(ctrl => {
      return (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={ () => props.ingredientAdded(ctrl.type)} 
        removed={() => props.ingredientRemoved(ctrl.type)}
      />)
    })}
  </div>
)

export default buildControls;