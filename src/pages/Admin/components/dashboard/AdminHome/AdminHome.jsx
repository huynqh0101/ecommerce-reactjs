import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Import Sidebar component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import useProducts from '../hooks/useProducts'; // Import hook useProducts
import './adminHome.css'; // Import CSS file for styling

const AdminHome = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { products, setProducts } = useProducts();

    const handleHover = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].isHovered = true;
        setProducts(updatedProducts);
    };

    const handleLeave = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].isHovered = false;
        setProducts(updatedProducts);
    };

    return (
        <div className='d-flex'>
            {/* Sidebar */}
            <div
                className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}
            >
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>

            {/* Nội dung chính */}
            <div
                className={`main-content container-fluid mt-4 px-0 ${
                    collapsed ? 'col-md-11' : 'col-md-10'
                }`}
            >
                <h1 className='text-center mb-4'>Admin Home</h1>
                <p>Chào mừng đến với trang chủ quản trị viên.</p>

                {/* Danh sách sản phẩm */}
                <div className='row'>
                    {products.map((product, index) => (
                        <div key={product._id} className='col-md-3 mb-4'>
                            <div className='card'>
                                {/* Hiển thị hình ảnh và áp dụng hiệu ứng hover */}
                                <img
                                    src={
                                        product.isHovered
                                            ? product.images[1]
                                            : product.images[0]
                                    } // Nếu hovered, dùng ảnh thứ 2, ngược lại dùng ảnh đầu tiên
                                    alt={product.name}
                                    className='card-img-top'
                                    onMouseEnter={() => handleHover(index)} // Khi hover
                                    onMouseLeave={() => handleLeave(index)} // Khi rời khỏi hover
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        {product.name}
                                    </h5>
                                    <p className='card-text'>
                                        {product.price} $
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
