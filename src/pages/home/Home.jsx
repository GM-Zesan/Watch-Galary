import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    //handleAddtoCart
    const handleAddtoCart = (id) => {
        if (cart.length) {
        if(cart.length === 4){
            toast.error('Overflow');
        }else{
            const isDublicate = cart.find((item) => item.id === id);
            if (isDublicate) {
                toast.error("Already Added!");
            } else {
                const cartItem = product.find((item) => item.id === id);
                const newCart = [...cart, cartItem];
                toast.success("Add to cart");
                setCart(newCart);
            }
        } 
        } else {
            const cartItem = product.find((item) => item.id === id);
            const newCart = [...cart, cartItem];
            toast.success("Add to cart");
            setCart(newCart);
        }
    };


    //useEffect
    useEffect(() => {
        fetch("product.JSON")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {product.map((item, index) => (
                                    <Card
                                        key={index}
                                        item={item}
                                        handleAddtoCart={handleAddtoCart}
                                    ></Card>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-md-4"></div>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default Home;
