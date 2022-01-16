import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import LoadSpin from '../LoadSpin/LoadSpin';

const Service = () => {
    const[loading,setLoad] = useState(true)
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://tranquil-thicket-03462.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>(
            setServices(data),
            console.log("What Data I am getting: ",data),
            setLoad(false)
        ) 
            
    )}, [services])
    console.log("What service I am getting: ",services)
    return (
        <div>
        {
            loading?
            <LoadSpin/>
            :
            <section className="container text-center my-5">
            <h2>Provide awesome <span><Link to="/order/:`${name}`" style={{ color: '#7AB259' }}>services</Link></span></h2>
            
                    <div className="row mt-5">
                        {
                            services.map(service => <ServiceItem service={service}></ServiceItem>)
                        }
                    </div>
            

        </section>
        }
        </div>
        
    );
};

export default Service;