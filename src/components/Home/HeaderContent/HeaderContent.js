import React from 'react';
import brandPic from '../../../resources/images/mainpic.png'
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h1 className="mb-5">A clean House <br/>A good Day</h1>
                    <p style={{marginBottom:"5px"}}>What are you waiting for. Click the book button now and get rid of your home grime</p>
                    <button className="btn btn-primary main-btn">Booking</button>
                </div>
                <div className="col-md-7 col-sm-12 offset-md-1">
                    <img className="img-fluid shadow customImage"  src={brandPic} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;