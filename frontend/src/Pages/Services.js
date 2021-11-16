import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';


function Services({currentUser}) {
    const [theService, setTheService] = useState([])


    useEffect(() => {
        fetch('/services')
        .then(res => res.json())
        .then(setTheService)
    }, [])

    const eachService = theService.map(aService =>
    //    console.log(aService)
        <ServiceCard currentUser={currentUser}
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