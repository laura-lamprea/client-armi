import axios from 'axios';

const URL = process.env.API_BASE_URL || 'http://localhost:3001';

export const fetchProducts = async () => {
    const response = await axios.get(`${URL}/products`);
    return response.data.data;
};

export const fetchCart = async () => {
    const response = await axios.get(`${URL}/cart`);
    return response.data.data;
};

export const addProductToCart = async (productId, quantity) => {
    await axios.post(`${URL}/cart`, { productId, quantity });
};

export const updateProductQuantity = async (productId, quantity) => {
    await axios.put(`${URL}/cart`, { productId, quantity });
};

export const removeProductFromCart = async (productId) => {
    await axios.delete(`${URL}/cart`, { data: { productId } });
};