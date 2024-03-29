import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceItem.css'

const ServiceItem = ({ service }) => {
    const history = useHistory();

    const maxLength = 30; // Maximum number of words to display

  // Split the content into words
  const words = service.description.split(' ');

  // Get the first 150 words or less
  let truncatedContent = words.slice(0, maxLength).join(' ');
  truncatedContent += '...';


    const { value3 } = useContext(UserContext);
    const[order,setOrder] = value3

    const handleBuyService = () => {
        history.push(`/order/${service.title}`)
        setOrder({
            name:service.title,
            price:service.price,
            status:"pending",
        })
    }

    return (

        <div className=" col-md-4 col-sm-12">

            <div className="service-item my-4" onClick={handleBuyService}>
            <p style={{ color: '#707070' }}> Starting BDT: {service.price}</p>
                {
                    service.image ? <img style={{ width: '100%' }} src={`data:image/png;base64,${service.image.img}`}alt=""  />
                        :
                        <img style={{ width: '100%' }} className="img-fluid mb-3" src={`https://via.placeholder.com/150`} alt="" />
                }
                <h5 className="my-4">{service.title}</h5>
                <p style={{ color: '#707070' }}>{truncatedContent}</p>
            </div>

        </div>


    );
};

export default ServiceItem;