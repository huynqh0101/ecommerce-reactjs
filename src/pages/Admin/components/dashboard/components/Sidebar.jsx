import React, { useState } from 'react';
import './SideBar/Sidebar.css'; // Tạo file CSS riêng để định dạng sidebar
import { Button, Layout, theme } from 'antd';
import Logo from './SideBar/Logo';
import MenuList from './SideBar/MenuList';
import ToggleThemeButton from './SideBar/ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;

const Sidebar = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false); // Sửa từ collappsed thành collapsed

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const {
        token: { colorBgContainer }
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                collapsed={collapsed} // Sửa từ collappsed thành collapsed
                collapsible
                trigger={null}
                theme={darkTheme ? 'dark' : 'light'}
                className='sidebar'
            >
                <Logo />
                <MenuList darkTheme={darkTheme} />
                <ToggleThemeButton
                    darkTheme={darkTheme}
                    toggleTheme={toggleTheme}
                />
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        className='toggle'
                        onClick={() => setCollapsed(!collapsed)} // Sửa từ collappsed thành collapsed
                        type='text'
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                    />
                </Header>
            </Layout>
        </Layout>
    );
};

export default Sidebar;
