import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import './Sidebar.css'; // Import CSS file for styling

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
    return (
        <div className='toggle-theme-btn'>
            <Button onClick={toggleTheme}>
                {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
            </Button>
        </div>
    );
};

export default ToggleThemeButton;
