import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Áo Hoodie Nam Nữ 3',
            price: 199.99,
            description:
                'Áo hoodie unisex với chất liệu vải nỉ cao cấp, mềm mại, giữ ấm tốt.',
            type: 'Unisex',
            size: [
                { name: 'S', amount: 10 },
                { name: 'M', amount: 15 }
            ],
            material: 'Cotton',
            images: [
                'https://example.com/images/hoodie1.jpg',
                'https://example.com/images/hoodie2.jpg'
            ]
        }
    ]);
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
    const [isFormVisible, setIsFormVisible] = useState(false); // State để kiểm soát hiển thị form

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Xử lý thay đổi kích thước
    const handleSizeChange = (index, field, value) => {
        const updatedSizes = [...formData.size];
        updatedSizes[index][field] = value;
        setFormData({ ...formData, size: updatedSizes });
    };

    // Thêm sản phẩm mới
    const handleAddProduct = (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.price ||
            !formData.description ||
            !formData.type ||
            !formData.material
        ) {
            return alert('Vui lòng nhập đầy đủ thông tin!');
        }
        const newProduct = {
            ...formData,
            id: products.length + 1,
            price: parseFloat(formData.price)
        };
        setProducts([...products, newProduct]);
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
        setIsFormVisible(false); // Ẩn form sau khi thêm
    };

    // Sửa sản phẩm
    const handleEditProduct = (product) => {
        setIsEditing(true);
        setFormData(product);
        setIsFormVisible(true); // Hiển thị form khi sửa
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        setProducts(
            products.map((product) =>
                product.id === formData.id
                    ? { ...formData, price: parseFloat(formData.price) }
                    : product
            )
        );
        setIsEditing(false);
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
        setIsFormVisible(false); // Ẩn form sau khi cập nhật
    };

    // Xóa sản phẩm
    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    // Hiển thị form thêm sản phẩm mới
    const handleShowAddForm = () => {
        setIsEditing(false);
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
        setIsFormVisible(true); // Hiển thị form
    };

    // Hủy thêm/sửa sản phẩm
    const handleCancel = () => {
        setIsFormVisible(false); // Ẩn form
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
    };

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Quản lý sản phẩm</h1>

            {/* Nút thêm sản phẩm mới */}
            {!isFormVisible && (
                <div className='text-center mb-4'>
                    <button
                        className='btn btn-success'
                        onClick={handleShowAddForm}
                    >
                        Thêm sản phẩm mới
                    </button>
                </div>
            )}

            {/* Form thêm/sửa sản phẩm */}
            {isFormVisible && (
                <form
                    className='row g-3 mb-4'
                    onSubmit={
                        isEditing ? handleUpdateProduct : handleAddProduct
                    }
                >
                    <div className='col-md-6'>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Tên sản phẩm'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            type='number'
                            name='price'
                            className='form-control'
                            placeholder='Giá sản phẩm'
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-12'>
                        <textarea
                            name='description'
                            className='form-control'
                            placeholder='Mô tả sản phẩm'
                            rows='3'
                            value={formData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className='col-md-6'>
                        <input
                            type='text'
                            name='type'
                            className='form-control'
                            placeholder='Loại sản phẩm'
                            value={formData.type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            type='text'
                            name='material'
                            className='form-control'
                            placeholder='Chất liệu'
                            value={formData.material}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='col-md-12'>
                        <label>Kích thước:</label>
                        {formData.size.map((size, index) => (
                            <div key={index} className='d-flex mb-2'>
                                <input
                                    type='text'
                                    className='form-control me-2'
                                    placeholder='Tên kích thước (S, M, L)'
                                    value={size.name}
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'name',
                                            e.target.value
                                        )
                                    }
                                />
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Số lượng'
                                    value={size.amount}
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'amount',
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    <div className='col-md-12'>
                        <input
                            type='text'
                            name='images'
                            className='form-control'
                            placeholder='URL hình ảnh (ngăn cách bằng dấu phẩy)'
                            value={formData.images.join(', ')}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    images: e.target.value.split(', ')
                                })
                            }
                        />
                    </div>
                    <div className='col-md-12 text-center'>
                        <button type='submit' className='btn btn-primary me-2'>
                            {isEditing ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                        </button>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={handleCancel}
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            )}

            {/* Danh sách sản phẩm */}
            <table className='table table-bordered table-hover'>
                <thead className='table-light'>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Loại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price} VND</td>
                            <td>{product.type}</td>
                            <td>
                                <button
                                    className='btn btn-warning btn-sm me-2'
                                    onClick={() => handleEditProduct(product)}
                                >
                                    Sửa
                                </button>
                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() =>
                                        handleDeleteProduct(product.id)
                                    }
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
