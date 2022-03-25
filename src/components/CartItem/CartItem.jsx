import React from 'react';
import "./CartItem.css"
const CartItem = (props) => {
    const { id, name, image, price } = props.cart;
    return (
        <div className="d-flex justify-content-between mb-2">
            <img src={image} className="icon mr-3 pr-3" alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartItem;