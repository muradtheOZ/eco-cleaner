import React, { useEffect, useLayoutEffect, useState } from 'react';
import DeleteItem from './DeleteItem';

const DeleteService = () => {
    const [services, setService] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('https://eco-clean.onrender.com/services')
            const data = await response.json()
            setService(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <p>You have reached the deletion page successfully</p>
            {
                services.map(item => <DeleteItem key={item._id} item={item}></DeleteItem>)
            }
        </div>
    );
};

export default DeleteService;