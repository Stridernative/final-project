import { Link } from 'react-router-dom'
import { useState } from 'react'


function ServiceCard({ service, currentUser }) {

    const [editMode, setEditMode] = useState(false)

    function toggleEdit() {

        setEditMode(!editMode)
        console.log(editMode)
    }

    const [updatedService, setUpdatedService] = useState({
        title: service.title,
        image: service.image,
        information: service.information,
        service_mileage: service.service_mileage,
        service_area: service.service_area
    })

    
    function updateService(e) {
        e.preventDefault()
        fetch(`/services/${service.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedService)
        })
        toggleEdit()
    }

    function handleInput(e) {

        setUpdatedService({
            ...updatedService,
            [e.target.name]: e.target.value
        })
    }

    function handleForm() {

        if (editMode) {
            return (
                
                <div className="services-card">
                    <form onSubmit={updateService}>
                        <label> Title
                            <input name="title" value={updatedService.title} onChange={handleInput}></input>
                        </label>

                        <label> Information
                            <input name="information" value={updatedService.information} onChange={handleInput}></input>
                        </label>

                        <label> Service Mileage
                            <input name="service_mileage" value={updatedService.service_mileage} onChange={handleInput}></input>
                        </label>

                        <label> Service Area
                            <input name="service_area" value={updatedService.service_area} onChange={handleInput}></input>
                        </label>
                        <button> Submit </button>
                    </form>
                </div>
            )
        } else {

            return (
                <div className="services-card">
                    <form className="service-info">
                        <div>
                        <h3>{service.title} </h3>
                        </div>
                        <p>{service.information}</p>
                        <p>{service.service_mileage}</p>
                        <p>{service.service_area}</p>
                        <Link to={'/appointments'}><button className='btn'>Schedule Appointment</button></Link>
                        {currentUser ? <button className='btn-edit' onClick={toggleEdit}> Edit Service </button> : null}
                    </form>
                </div>
            )
        }
    }

    return(
        <div>
            {handleForm()}
        </div>
    )

}
    export default ServiceCard