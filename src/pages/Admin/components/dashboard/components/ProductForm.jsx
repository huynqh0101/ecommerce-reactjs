import React from 'react';
import '../DashBoard.css';

const ProductForm = ({
    formData,
    isEditing,
    handleInputChange,
    handleSizeChange,
    handleAddSize,
    handleRemoveSize,
    handleImageChange,
    handleAddImage,
    handleRemoveImage,
    handleAddProduct,
    handleUpdateProduct,
    handleCancel
}) => {
    return (
        <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct}>
            <div className='form-group'>
                <label>Tên sản phẩm</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Nhập tên sản phẩm'
                    required
                />
            </div>
            <div className='form-group'>
                <label>Giá</label>
                <input
                    type='number'
                    name='price'
                    value={formData.price}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Nhập giá sản phẩm'
                    min='0'
                    required
                />
            </div>
            <div className='form-group'>
                <label>Mô tả</label>
                <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Nhập mô tả sản phẩm'
                    rows='3'
                    required
                />
            </div>
            <div className='form-group'>
                <label>Loại</label>
                <input
                    type='text'
                    name='type'
                    value={formData.type}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Nhập loại sản phẩm'
                    required
                />
            </div>
            <div className='form-group'>
                <label>Chất liệu</label>
                <input
                    type='text'
                    name='material'
                    value={formData.material}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Nhập chất liệu sản phẩm'
                    required
                />
            </div>
            <div className='form-group'>
                <label>Size</label>
                {formData.size.map((size, index) => (
                    <div key={index} className='d-flex align-items-center mb-2'>
                        <input
                            type='text'
                            placeholder='Tên size'
                            value={size.name}
                            onChange={(e) =>
                                handleSizeChange(index, 'name', e.target.value)
                            }
                            className='form-control me-2'
                            required
                        />
                        <input
                            type='number'
                            placeholder='Số lượng'
                            value={size.amount}
                            onChange={(e) =>
                                handleSizeChange(
                                    index,
                                    'amount',
                                    parseInt(e.target.value) || 0
                                )
                            }
                            className='form-control me-2'
                            min='0'
                            required
                        />
                        <button
                            type='button'
                            onClick={() => handleRemoveSize(index)}
                            className='btn btn-danger'
                        >
                            Xóa
                        </button>
                    </div>
                ))}
                <button
                    type='button'
                    onClick={handleAddSize}
                    className='btn btn-primary mt-2'
                >
                    Thêm size
                </button>
            </div>
            <div className='form-group'>
                <label>Hình ảnh</label>
                {formData.images.map((image, index) => (
                    <div key={index} className='d-flex align-items-center mb-2'>
                        <input
                            type='text'
                            placeholder='URL hình ảnh'
                            value={image}
                            onChange={(e) =>
                                handleImageChange(index, e.target.value)
                            }
                            className='form-control me-2'
                            required
                        />
                        <button
                            type='button'
                            onClick={() => handleRemoveImage(index)}
                            className='btn btn-danger'
                        >
                            Xóa
                        </button>
                    </div>
                ))}
                <button
                    type='button'
                    onClick={handleAddImage}
                    className='btn btn-primary mt-2'
                >
                    Thêm hình ảnh
                </button>
            </div>
            <div className='form-group mt-4 d-flex justify-content-between'>
                <button type='submit' className='btn btn-success me-2'>
                    {isEditing ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                </button>

                <button
                    type='button'
                    onClick={() => {
                        handleCancel();
                    }}
                    className='btn btn-secondary'
                >
                    Hủy
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
