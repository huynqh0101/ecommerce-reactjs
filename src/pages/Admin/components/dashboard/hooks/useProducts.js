import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        price: '',
        description: '',
        type: '',
        size: [{ name: '', amount: '' }],
        material: '',
        images: ['']
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/products'
                );
                setProducts(response.data);
                console.log('Danh sách sản phẩm:', response.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            }
        };
        fetchProducts();
    }, []);

    const addProduct = async (productData) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/products/create',
                productData
            );
            setProducts([...products, response.data]);
            alert('Sản phẩm đã được thêm thành công!');
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        }
    };

    const updateProduct = async (id, updatedData) => {
        try {
            const response = await axios.put(
                `http://localhost:3000/products/update/${id}`,
                updatedData
            );
            setProducts(
                products.map((product) =>
                    product._id === id ? response.data : product
                )
            );
            alert('Sản phẩm đã được cập nhật thành công!');
        } catch (error) {
            console.error('Lỗi khi cập nhật sản phẩm:', error);
            alert('Đã xảy ra lỗi khi cập nhật sản phẩm.');
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/delete/${id}`);
            setProducts(products.filter((product) => product._id !== id));
            alert('Sản phẩm đã được xóa thành công!');
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
            alert('Đã xảy ra lỗi khi xóa sản phẩm.');
        }
    };

    return {
        products,
        setProducts,
        formData,
        setFormData,
        addProduct,
        updateProduct,
        deleteProduct
    };
};

export default useProducts;
