import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon
                                    key={item.id}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu
                                    key={item.id}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    key={item.id}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>

                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={reLoadIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cartIcon}
                            alt='reLoadIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
