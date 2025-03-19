import axiosClient from "./axiosClient";

const addProductToCart = async (data) => {
    return await axiosClient.post('/cart', data);
};
const getCart = async (userId) => {
    return await axiosClient.get('/cart/${userId}');
};
export { addProductToCart, getCart };
// Compare this snippet from src/apis/productService.js:       