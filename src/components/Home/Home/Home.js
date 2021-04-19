import React from 'react';
import Brands from '../Brands/Brands';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Contact from '../Contact/Contact';
import { FooterContainer } from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <CarouselSlider></CarouselSlider>
            <Review></Review>
            <Brands></Brands>
            <Contact></Contact>
            <FooterContainer/>
        </div>
    );
};

export default Home;