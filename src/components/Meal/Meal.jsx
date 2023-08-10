import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props);
    const {strMeal,strMealThumb,strCategory,strInstructions} = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h4>Category: {strCategory}</h4>
            <p>Description:<small>{strInstructions}</small></p>
            <button onClick={() => props.handleAddToCart(props.meal)}>add to list</button>

        </div>
    );
};

export default Meal;