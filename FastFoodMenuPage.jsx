// src/Components/Pages/FastFoodMenuPage.jsx
import React from 'react';
import fastFoodMenu from '../../../data/fastFoodMenu';
import { useCart } from '../../../context/CartContext';

const FastFoodMenuPage = () => {
    const { addToCart } = useCart();

    return (
        <div className="container">
            <h1 className="text-center my-4">Fast Food Menu</h1>
            <div className="row">
                {fastFoodMenu.map(item => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={item.image} alt={item.name} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                                <button 
                                    className="btn btn-primary w-100" 
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FastFoodMenuPage;
