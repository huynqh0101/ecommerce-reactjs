import { App, Menu } from 'antd';
import React from 'react';
import {
    AppstoreOutlined,
    AreaChartOutlined,
    BarsOutlined,
    HomeOutlined,
    PayCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
import './Sidebar.css'; // Import CSS file for styling

const { SubMenu } = Menu; // Import SubMenu riêng biệt

const MenuList = ({ darkTheme }) => {
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home'
        },
        {
            key: 'activity',
            icon: <AppstoreOutlined />,
            label: 'Activity'
        },
        {
            key: 'subtasks',
            icon: <BarsOutlined />,
            label: 'Tasks',
            children: [
                {
                    key: 'task1',
                    label: 'Task1'
                },
                {
                    key: 'task2',
                    label: 'Task2'
                }
            ]
        },
        {
            key: 'progress',
            icon: <AreaChartOutlined />,
            label: 'Progress'
        },
        {
            key: 'payment',
            icon: <PayCircleOutlined />,
            label: 'Payment'
        },
        {
            key: 'setting',
            icon: <SettingOutlined />,
            label: 'Settings'
        }
    ];

    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode='inline'
            className='menu-bar'
            items={menuItems}
        />
    );
};

export default MenuList;
