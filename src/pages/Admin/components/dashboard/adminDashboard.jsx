import React, { useState } from 'react';
import ProductForm from './Product/ProductForm';
import ProductTable from './Product/ProductTable';
import Sidebar from './Sidebar/Sidebar';
import useProducts from './hooks/useProducts';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
    const {
        products,
        formData,
        setFormData,
        addProduct,
        updateProduct,
        deleteProduct
    } = useProducts();
    const [isEditing, setIsEditing] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='admin-dashboard d-flex'>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
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
                            });
                            setIsEditing(false);
                            setIsFormVisible(true);
                        }}
                    >
                        Thêm sản phẩm mới
                    </button>
                )}
                {isFormVisible && (
                    <ProductForm
                        formData={formData}
                        isEditing={isEditing}
                        setFormData={setFormData}
                        handleSave={(productData) => {
                            isEditing
                                ? updateProduct(formData._id, productData)
                                : addProduct(productData);
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
                    handleDeleteProduct={deleteProduct}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
