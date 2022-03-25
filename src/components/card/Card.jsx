import React from 'react';
import "./Card.css"
const Card = (props) => {
    const { id, name, image, price } = props.item;
    return (
        <div className="col">
            <div className="card h-100">
                <div>
                    <img
                        src={image}
                        className="card-img-top img-fluid image"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Tk {price}</p>
                    <hr />
                    <button onClick={() => props.handleAddtoCart(id)}>
                        Add to card <i className="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;