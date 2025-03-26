import { useContext, useState, useRef } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
    const { menu, subMenu, dropdownMenu, dropdownItem } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    // Danh sách submenu cho "Elements"
    const productsSubMenu = [
        { label: 'All Products', link: '/shop/all' }, // Tất cả sản phẩm
        { label: '🔥 Best Sellers', link: '/shop/best-sellers' }, // Hàng bán chạy
        { label: 'Tops', link: '/shop/tops' }, // Áo
        { label: 'Bottoms', link: '/shop/bottoms' }, // Quần
        { label: 'Sets', link: '/shop/sets' }, // Set quần áo
        { label: 'Underwear - Boxer', link: '/shop/underwear' }, // Đồ lót
        { label: 'Accessories', link: '/shop/accessories' } // Phụ kiện
    ];
    
    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
        if (content === 'Our Shop') {
            navigate('/shop');
        }
    };

    const handleRenderText = (content) => {
        if (content === 'Sign in' && userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }
    };

    const handleMouseEnter = () => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        } else if (content === 'Collections') {
            setIsShowDropdown(true);
        }
    };

    const handleMouseLeave = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
            setIsShowSubMenu(false);
            setIsShowDropdown(false);
        }
    };

    return (
        <div 
            className={menu} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            ref={menuRef}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}

            {/* Dropdown Menu cho "Elements" */}
            {isShowDropdown && content === 'Collections' && (
                <div className={dropdownMenu}>
                    {productsSubMenu.map((item, index) => (
                        <a key={index} href={item.link} className={dropdownItem}>
                            {item.label}
                        </a>
                    ))}
                </div>
            )}

            {/* Submenu cho "Sign in" */}
            {isShowSubMenu && content === 'Sign in' && (
                <div className={subMenu} onClick={handleLogOut}>
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
