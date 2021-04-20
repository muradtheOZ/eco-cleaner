import React from 'react';
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
            <Review></Review>
            <Contact></Contact>
            <FooterContainer/>
        </div>
    );
};

export default Home;