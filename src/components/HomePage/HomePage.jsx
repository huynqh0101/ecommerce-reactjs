import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <div
                style={{
                    height: '200px'
                }}
            ></div>
        </>
    );
}

export default HomePage;