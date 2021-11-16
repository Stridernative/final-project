import React from 'react'
import ServiceCard from './ServiceCard';
import { useState } from 'react'
const EditForm = ({ service }) => {

const  [updatedService, setUpdatedService] = useState ({
    title: service.title,
    image: service.image,
    information: service.information,
    service_mileage: service.service_mileage,
    service_area: service.service_area
})

//Patch request
function updateService () {
fetch('/services', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(updateService)
  })
}

function handleInput(e) {

    setUpdatedService({
        ...updatedService, 
        [e.target.name]: e.target.value
    })
} 



    return (
        <div>
            <form onSubmit={updateService}>
            <label> Title
            <input name="title" value={service.title} onChange={handleInput}></input>
            </label>

            <label> Image
            <input name="image" value={service.image} onChange={handleInput}></input>
            </label>

            <label> Information
            <input name="information" value ={service.information} onChange={handleInput}></input>
            </label>

            <label> Service Mileage
            <input name="service_mileage" value ={service.service_mileage} onChange={handleInput}></input>
            </label>

            <label> Service Area
            <input name="service_area" value ={service.service_area} onChange={handleInput}></input>
            </label>

            </form>
        </div>
    )
}



export default EditForm;