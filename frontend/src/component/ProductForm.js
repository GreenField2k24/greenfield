import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../redux/Action/productActions'

const ProductForm = ({ currentProduct, setEditing }) => {
  const [product, setProduct] = useState(currentProduct || { name: '', price: 0, stock: 0 });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
        dispatch(updateProduct(currentProduct.id, product));
        setEditing(false);
    } else {
        dispatch(createProduct(product));
    }
    setProduct({ name: '', price: 0, stock: 0 });
};

    return (
    <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" required />
        <button type="submit">{currentProduct ? 'Update' : 'Add'} Product</button>
    </form>
);
};

export default ProductForm;
