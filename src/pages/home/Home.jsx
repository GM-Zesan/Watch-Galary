import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../../components/CartItem/CartItem";
import { Modal,Button } from "react-bootstrap";
const Home = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const [randomProduct,setRandomProduct] = useState(null);
    const handleClose = () =>{
        setRandomProduct(null);
        setShow(false);
    };
    
    //handleAddtoCart
    const handleAddtoCart = (id) => {
        if (cart.length) {
            if (cart.length === 4) {
                toast.error("Overflow", {
                    position: "bottom-left",
                });
            } else {
                const isDublicate = cart.find((item) => item.id === id);
                if (isDublicate) {
                    toast.error("Already Added!", {
                    position: "bottom-left",
                    });
                } else {
                    const cartItem = product.find((item) => item.id === id);
                    const newCart = [...cart, cartItem];
                    toast.success("Add to cart", {
                        position: "bottom-left",
                    });
                    setCart(newCart);
                }
            }
        } else {
            const cartItem = product.find((item) => item.id === id);
            const newCart = [...cart, cartItem];
            toast.success("Add to cart", {
                position: "bottom-left",
            });
            setCart(newCart);
            
        }
    };

    //handdleRandom
    const handdleRandom = () => {
        if (cart.length) {
            // get random index value
            const randomIndex = Math.floor(Math.random() * cart.length);
            // get random item
            const item = cart[randomIndex];
            setRandomProduct(item);
            // console.log(item);
            setShow(true);
        }
    };
    //useEffect
    useEffect(() => {
        fetch("product.JSON")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    },[]);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 col-md-9">
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
                        <div className="col-12 col-md-3 px-5 cart-item py-5">
                            <h5 className="text-center mb-4">
                                Selected Item !
                            </h5>
                            {cart.map((cart, index) => (
                                <CartItem key={index} cart={cart}></CartItem>
                            ))}

                            <div>
                                {cart.length > 0 && (
                                    <>
                                        <hr />
                                        <button
                                            className="btn btn-primary mt-2"
                                            onClick={handdleRandom}
                                        >
                                            Choose 1 Randomly
                                        </button>
                                        <button
                                            className="btn btn-danger d-block mt-3"
                                            onClick={() => setCart([])}
                                        >
                                            Clear Cart
                                        </button>
                                    </>
                                )}
                                {/* modal area start */}
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    dialogClassName="my-modal"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {randomProduct?.name}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <img
                                                src={randomProduct?.image}
                                                className="img-fluid"
                                                style={{ width: "300px" }}
                                                alt="..."
                                            />
                                        </div>
                                        <h5>Tk {randomProduct?.price}</h5>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* modal area end */}
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h4>
                            1. What are the differences between props and state ?
                        </h4>
                        <p>
                            <strong>Props : </strong>
                            Props are used to pass data. By Props Data is passed
                            from one component to another.Data from props is
                            read-only, and cannot be modified. <br />
                            <strong>State : </strong>
                            By State Data is passed within the component only.
                            State can be managed or modified data.
                        </p>
                        <h4>2. How does useState works?</h4>
                        <p>
                            <strong>useState </strong> function is a built in
                            hook that can be imported from the react package. It
                            allows us to add state to our functional components.
                            It also allows us to perform side effects in your components. We can pass here the initial state to this function. And it returns a variable with the current state value.
                        </p>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default Home;
