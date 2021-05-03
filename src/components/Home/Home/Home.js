import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Contact from '../Contact/Contact';
import { FooterContainer } from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import LoadSpin from '../LoadSpin/LoadSpin';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {

    const { value, value1, value2 } = useContext(UserContext);
    const [load, setLoad] = useState(true);
    const [services, setServices] = value2;
    useEffect(() => {
        fetch('https://tranquil-thicket-03462.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoad(false)
            })

    }, [])

    return (
        <div>
            <Header></Header>
            {load?
            <div className="custom-spinner pt-4 mt-4 mx-auto">
                <LoadSpin />
            </div>
                
                :
                <div>
                    <Service></Service>
                    <Review></Review>
                    <Contact></Contact>
                    <FooterContainer />
                </div>
            }

        </div>
    );
};

export default Home;