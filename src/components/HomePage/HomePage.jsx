import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Banner from '@components/Banner/Banner';
function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
            </div>
        </div>
    );
}

export default HomePage;
