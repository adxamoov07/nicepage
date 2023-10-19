import React from 'react'
import Footer from '../components/Footer/Footer';
import Banner from '../components/banner/Banner';
import Cards from '../components/cards/Cards';
import Efficent from '../components/effisent/Efficent';
import Galery from '../components/galery/Galery';
import Header from '../components/header/Header';
import Ideas from '../components/ideas/Ideas';
import Images from '../components/images1/Images';
import Text from '../components/text/Text';
import Tips from '../components/tips/Tips';

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Text />
            <Cards />
            <Galery />
            <Efficent />
            <Images />
            <Tips />
            <Ideas />
            <Footer />
        </div>
    )
}

export default Home