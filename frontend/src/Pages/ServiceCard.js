import { Link } from 'react-router-dom'

function ServiceCard({ service, currentUser }) {


    
    return(
    <div className = "services-card">
            <h3>{service.title}</h3>
            <img src={service.image} alt="service"/>
            <p>{service.information}</p>
            <p>{service.service_mileage}</p>
            <p>{service.service_area}</p>
            <Link to ={'/appointments'}><button className='btn'>Schedule Appointment</button></Link>
            {currentUser ? <button> Test </button> : null}
    </div>
    )
}

export default ServiceCard