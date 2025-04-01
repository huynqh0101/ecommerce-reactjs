import React from 'react';
import { FireFilled } from '@ant-design/icons';
import './Sidebar.css'; // Import CSS file for styling
const Logo = () => {
    return (
        <div className='logo'>
            <div className='logo-icon'>
                <FireFilled />
            </div>
        </div>
    );
};

export default Logo;
