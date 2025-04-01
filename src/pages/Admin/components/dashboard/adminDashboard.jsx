import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import Sidebar from './components/Sidebar';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AdminDashboard = () => {
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
    const [isEditing, setIsEditing] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [collapsed, setCollapsed] = useState(false); // Trạng thái thu gọn sidebar

    // Lấy danh sách sản phẩm từ API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/products'
                );
                setProducts(response.data); // Cập nhật danh sách sản phẩm
                console.log('Danh sách sản phẩm:', response.data); // Log kiểm tra
            } catch (error) {
                console.error('Lỗi khi lấy danh sách sản phẩm:', error);
            }
        };
        fetchProducts();
    }, []); // Gọi API khi component được mount

    // Thêm size mới
    const handleAddSize = () => {
        setFormData({
            ...formData,
            size: [...formData.size, { name: '', amount: '' }]
        });
    };

    // Xóa size
    const handleRemoveSize = (index) => {
        const updatedSizes = formData.size.filter((_, i) => i !== index);
        setFormData({ ...formData, size: updatedSizes });
    };

    // Thay đổi hình ảnh
    const handleImageChange = (index, value) => {
        const updatedImages = [...formData.images];
        updatedImages[index] = value;
        setFormData({ ...formData, images: updatedImages });
    };

    // Thêm hình ảnh mới
    const handleAddImage = () => {
        setFormData({
            ...formData,
            images: [...formData.images, '']
        });
    };

    // Xóa hình ảnh
    const handleRemoveImage = (index) => {
        const updatedImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: updatedImages });
    };

    // Thêm sản phẩm
    const handleAddProduct = async (e) => {
        e.preventDefault(); // Ngăn chặn reload trang
        try {
            const response = await axios.post(
                'http://localhost:3000/products/create',
                {
                    name: formData.name,
                    description: formData.description,
                    price: parseFloat(formData.price), // Chuyển giá thành số
                    type: formData.type,
                    size: formData.size,
                    material: formData.material,
                    images: formData.images
                }
            );

            // Cập nhật danh sách sản phẩm với sản phẩm mới từ response
            setProducts([...products, response.data]);
            setIsFormVisible(false); // Ẩn form sau khi thêm
            alert('Sản phẩm đã được thêm thành công!');
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            alert('Đã xảy ra lỗi khi thêm sản phẩm.');
        }
    };

    // Xóa sản phẩm
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            setProducts(products.filter((product) => product.id !== id));
            alert('Sản phẩm đã được xóa thành công!');
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
            alert('Đã xảy ra lỗi khi xóa sản phẩm.');
        }
    };

    return (
        <div className='admin-dashboard d-flex'>
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Nội dung chính */}
            <div className='container-fluid mt-4'>
                <h1 className='text-center mb-4'>Quản lý sản phẩm</h1>
                {!isFormVisible && (
                    <button
                        className='btn btn-success mb-4'
                        onClick={() => {
                            setFormData({
                                id: null,
                                name: '',
                                price: '',
                                description: '',
                                type: '',
                                size: [{ name: '', amount: '' }],
                                material: '',
                                images: ['']
                            }); // Reset formData
                            setIsEditing(false); // Đảm bảo không ở chế độ chỉnh sửa
                            setIsFormVisible(true); // Hiển thị form
                        }}
                    >
                        Thêm sản phẩm mới
                    </button>
                )}
                {isFormVisible && (
                    <ProductForm
                        formData={formData}
                        isEditing={isEditing}
                        handleInputChange={(e) =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            })
                        }
                        handleSizeChange={(index, field, value) => {
                            const updatedSizes = [...formData.size];
                            updatedSizes[index][field] = value;
                            setFormData({ ...formData, size: updatedSizes });
                        }}
                        handleAddSize={handleAddSize}
                        handleRemoveSize={handleRemoveSize}
                        handleImageChange={handleImageChange}
                        handleAddImage={handleAddImage}
                        handleRemoveImage={handleRemoveImage}
                        handleAddProduct={handleAddProduct}
                        handleUpdateProduct={(e) => {
                            e.preventDefault();
                            setProducts(
                                products.map((product) =>
                                    product.id === formData.id
                                        ? {
                                              ...formData,
                                              price: parseFloat(formData.price)
                                          }
                                        : product
                                )
                            );
                            setIsFormVisible(false);
                        }}
                        handleCancel={() => setIsFormVisible(false)}
                    />
                )}
                <ProductTable
                    products={products}
                    handleEditProduct={(product) => {
                        setIsEditing(true);
                        setFormData(product);
                        setIsFormVisible(true);
                    }}
                    handleDeleteProduct={handleDeleteProduct}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
