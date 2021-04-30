import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Contact from '../Contact/Contact';
import { FooterContainer } from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import LoadSpin from '../LoadSpin/LoadSpin'

const Home = () => {
    const { value, value1,value2 } = useContext(UserContext);
    const [loader, setLoader] = value1;
    const [services, setServices] = value2;
    

    return (
        <div>
            <Header></Header>
                <div>
                    <Service></Service>
                    <Review></Review>
                </div>


            

            <Contact></Contact>
            <FooterContainer />
        </div>
    );
};

export default Home;