import React from 'react';

const CartItem = (props) => {
    const { id, name, image, price } = props.cart;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CartItem;