import React from 'react';
import '../DashBoard.css';

const ProductTable = ({ products, handleEditProduct, handleDeleteProduct }) => {
    return (
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
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
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
                                onClick={() => handleDeleteProduct(product._id)}
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
