import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import LoadSpin from '../LoadSpin/LoadSpin';

const Service = () => {
    const{value1,value2} = useContext(UserContext);
    const [services, setServices] = value2;
    const [loader, setLoader] = value1;
    return (
        <>
        {
            loader?
            <LoadSpin/>
            :
            <section className="container text-center my-5">
            <h2>Provide awesome <span style={{ color: '#7AB259' }}>  services</span></h2>
            
                    <div className="row mt-5">
                        {
                            services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                        }
                    </div>
            

        </section>
        }
        </>
        
    );
};

export default Service;