import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import LoadSpin from '../LoadSpin/LoadSpin';

const Service = () => {
    const { value, value1, value2 } = useContext(UserContext);
    const [loader, setLoader] = value1;
    const [services, setServices] = value2;

    useEffect(() => {
        fetch('https://tranquil-thicket-03462.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            setLoader(false);

    }, [])
    return (
        <section className="container text-center my-5">
            <h2>Provide awesome <span><Link to="/order/:`${name}`" style={{ color: '#7AB259' }}>services</Link></span></h2>
            {
                loader ?
                    <div className="center center-text">
                        <LoadSpin/>
                    </div>
                    :
                    <div className="row mt-5">
                        {
                            services.map(service => <ServiceItem service={service}></ServiceItem>)
                        }
                    </div>
            }

        </section>
    );
};

export default Service;