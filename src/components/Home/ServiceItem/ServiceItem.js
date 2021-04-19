import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceItem.css'

const ServiceItem = ({service}) => {
    const history = useHistory();
    const handleBuyService = () => {
        history.push(`/order/${service.title}`)
    }
    
    return (
        <div className="col-md-4 col-sm-12">
            <div className="service-item my-4" onClick={handleBuyService}>
                {
                    service.image ? <img style={{width: '100%'}} src={`data:image/png;base64,${service.image.img}`}/>
                    :
                    <img style={{width: '100%'}} className="img-fluid mb-3" src={`https://tranquil-thicket-03462.herokuapp.com/${service.img}`} alt=""/>
                }
                <h5 className="my-4">{service.title}</h5>
                <p style={{color: '#707070'}}>{service.description}</p>
                <p style={{color: '#707070'}}> Starting BDT: {service.price}</p>
            </div>
        </div>
    );
};

export default ServiceItem;