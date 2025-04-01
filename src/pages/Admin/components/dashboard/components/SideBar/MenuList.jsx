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
    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode='inline'
            className='menu-bar'
        >
            <Menu.Item key='home' icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key='activity' icon={<AppstoreOutlined />}>
                Activity
            </Menu.Item>
            <SubMenu key='subtasks' icon={<BarsOutlined />} title='Tasks'>
                <Menu.Item key='task1'>Task1</Menu.Item>
                <Menu.Item key='task2'>Task2</Menu.Item>
            </SubMenu>
            <Menu.Item key='progress' icon={<AreaChartOutlined />}>
                Progress
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined />}>
                Payment
            </Menu.Item>
            <Menu.Item key='setting' icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
