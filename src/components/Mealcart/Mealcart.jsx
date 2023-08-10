import React from 'react';

const Mealcart = (props) => {
    return (
        <div>
            <h2>Cart</h2>
            <h3>Item added:{props.cart.length}</h3>
            <h4>Added meal:</h4>
        </div>
    );
};

export default Mealcart;