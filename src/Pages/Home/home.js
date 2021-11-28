import Banner from "../../components/CenterBanner/centerBanner";
import Feature from "../../components/Feature/feuture";
import Footer from "../../components/Footer/footer";
import Products from "../../components/Products/products";
import { productData, productDataTwo } from '../../components/Products/data';

import React from 'react';

function Home(props) {
    return (
        <div>
            <Banner />
            <Products heading='Choose your favorite' data={productData} />
            <Feature />
            <Products heading='Sweet Treats for You' data={productDataTwo} />
            <Footer />
        </div>
    );
}

export default Home;