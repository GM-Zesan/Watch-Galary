import React from 'react';

const Card = (props) => {
    const { id, name, image, price } = props.item;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <button onClick={() => props.handleAddtoCart(id)}>
                        Add to card <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;