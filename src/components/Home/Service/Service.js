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
        <div className="mt-5 pt-5">
        {
            loader?
            <LoadSpin/>
            :
            <section className="container text-center my-5">
            <h2>Provide awesome services <span style={{ color: '#7AB259' }}> Click on your desired service to book</span></h2>
            
                    <div className="row mt-5">
                        {
                            services.map(service => <ServiceItem key={service._id} service={service}></ServiceItem>)
                        }
                    </div>
            

        </section>
        }
        </div>
        
    );
};

export default Service;