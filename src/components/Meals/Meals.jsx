import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Mealcart from '../Mealcart/Mealcart';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[]);

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);

    }

    return (
        <div className='meals-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal 
                        key ={meal.idMeal}
                        meal={meal}
                        handleAddToCart={handleAddToCart}>
                        </Meal>)
                       
                }
            </div>
            <div className='cart-container'>
                <Mealcart cart={cart}></Mealcart>
            </div>
        </div>
    );
};

export default Meals;