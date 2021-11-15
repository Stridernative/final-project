import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';


function Services() {
    const [theService, setTheService] = useState([])


    useEffect(() => {
        fetch('/services')
        .then(res => res.json())
        .then(setTheService)
    }, [])

    const eachService = theService.map(aService =>
    //    console.log(aService)
        <ServiceCard
        service={aService}
        />
        )

    return (
        <div>
           {eachService}
        </div>
    )
}

export default Services;