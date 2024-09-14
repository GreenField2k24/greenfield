import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    payload: products,
});

export const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    payload: product,
});

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});

