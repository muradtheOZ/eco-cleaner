import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Order.css'
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Order = () => {
    const { name} = useParams();
    const { value,value1,value2,value3} = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [services, setServices] = value2;
  const[order,setOrder] = value3;
  console.log("what you ordered",order);

    const { register, handleSubmit, errors } = useForm();
    const [infoData, setinfoData] = useState(null)
    const onSubmit = data => {
        setinfoData(data)
    };

    const handlePaymentSuccess = paymentId => {
        infoData.created = new Date();

        fetch('https://tranquil-thicket-03462.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(infoData)
        })
            .then(res => res.json())
            .then(success => {
                alert('Order Placed Successfully!')
            })
    }

    return (
        <section>
            <div style={containerStyle} className="row container-fluid">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <Topbar></Topbar>
                    <div style={{ width: '100%' }} className="col-md-6 mt-5">
                        <h5>Make a Order</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="name" value={loggedInUser.name} placeholder="Your name / company’s name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="email" placeholder="Your email address" value={loggedInUser.email} className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="service" value={name} placeholder="Service Name" className="form-control" />
                                {errors.service && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea type="text" ref={register({ required: false })} placeholder="Your Home Address and Phone No" className="form-control" name="description" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <input ref={register({ required: true })}  style={{ width: '48%' }} className="form-control" name="price" value={order.price}id="" />
                            </div>

                            <div className="form-group text-left">
                                <button type="submit" className="btn main-btn" style={{ textTransform: 'uppercase' }}>Submit Info</button>
                            </div>

                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;