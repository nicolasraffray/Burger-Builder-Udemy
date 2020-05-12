import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingredients = Object.keys(props.ingredient).map(ingredientKey => {
    return [...Array(props.ingredient[ingredientKey])].map((_, i) => {
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
    })
  }).reduce((prevEl, nextEl) => {
    return prevEl.concat(nextEl)
  }, [])

  if(ingredients.length === 0){
    ingredients = <p>Please Add Food</p>
  }
  
  return(
    <div className={styles.Burger}>
      <BurgerIngredient type={"bread-top"}/>  
      {ingredients}
      <BurgerIngredient type={"bread-bottom"}/>  
    </div>
  )
}

export default burger; 