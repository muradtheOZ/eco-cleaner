import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import LoadSpin from '../LoadSpin/LoadSpin';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';

const Review = () => {
    const { value, value1, value2 } = useContext(UserContext);
    const [loader,setLoader] = value1;
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch('https://eco-clean.onrender.com/reviews')
        .then(res => res.json())
        .then(data =>(
            setLoader(false),
            setReviews(data)
        )


        )}, [])

    return (

        <section className="container my-5">
                    <h2 className="text-center">Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
                <div className="row mt-5">
                        {
                            reviews.map(review =><ReviewCard review={review}></ReviewCard>)
                        }
                </div>


        </section>
    );
};

export default Review;