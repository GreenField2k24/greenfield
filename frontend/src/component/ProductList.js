import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getProducts } from '../redux/Action/productActions';
import './Card.css';
import Navbar from './Navbare';
import Footer from './Footer';
import { FaHeart } from 'react-icons/fa'

export default function ProductList() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/product/Products');
                dispatch(getProducts(response.data)); // Dispatch action
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            {/* Navbar */}
            <Navbar />
            <h1>Products</h1>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div className="container">
                    {products.map((product) => (
                        <div key={product.id} className="card">
                            <p className="heading">{product.name}</p>
                            <img src={product.imageUrl} alt={product.name} className="img" />
                            <p>
                            <span className="original-price">${product.originalPrice}</span>
                            <span className="discounted-price">${product.price}</span>
                            </p>
                            <span className="heart-icon">
                                <FaHeart />
                            </span>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
        
    );
}
