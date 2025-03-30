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
    const menuRef = useRef(null); // Ref để bao bọc toàn bộ menu

    const productsSubMenu = [
        { label: 'All Products', link: '/shop/all' },
        { label: '🔥 Best Sellers', link: '/shop/best-sellers' },
        { label: 'Tops', link: '/shop/tops' },
        { label: 'Bottoms', link: '/shop/bottoms' },
        { label: 'Sets', link: '/shop/sets' },
        { label: 'Underwear - Boxer', link: '/shop/underwear' },
        { label: 'Accessories', link: '/shop/accessories' }
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

    let hideTimeout;

    const handleMouseEnter = () => {
        // Hủy bỏ timeout nếu chuột quay lại
        clearTimeout(hideTimeout);

        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        } else if (content === 'Collections') {
            setIsShowDropdown(true);
        }
    };

    const handleMouseLeave = (event) => {
        // Đặt timeout để ẩn menu sau một khoảng thời gian
        hideTimeout = setTimeout(() => {
            if (
                !menuRef.current ||
                (menuRef.current &&
                    !menuRef.current.contains(event.relatedTarget))
            ) {
                setIsShowSubMenu(false);
                setIsShowDropdown(false);
            }
        }, 100); // Thời gian trễ 200ms
    };
    return (
        <div
            className={menu}
            ref={menuRef} // Gắn ref vào toàn bộ khu vực menu
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} // Áp dụng sự kiện onMouseLeave cho toàn bộ menu
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}

            {/* Dropdown Menu cho "Collections" */}
            {isShowDropdown && content === 'Collections' && (
                <div className={dropdownMenu}>
                    {productsSubMenu.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className={dropdownItem}
                        >
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
