import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Banner from '@components/Banner/Banner';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts />
            </div>
        </div>
    );
}

export default HomePage;
