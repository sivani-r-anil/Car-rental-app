import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddCar = () => {

    const [input, changeInput] = useState(
        

        {

            registration_number: "",
            brand: "",
            model: "",
            vehicle_type: "",
            fuel_type: "",
            transmission: "",
            seating_capacity: "",
            rent_per_day: "",
            city: "",
            availability_status: "",
            status: ""

        }



    )
    const inputHandeler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-car", input).then(

            (response) => {

                console.log(response.data)
                alert("Car added suceessfully")
            }
        ).catch((error) => {
            console.log(error.response);
            console.log(error.response?.data);
            console.log(error.response?.status);
            alert("Failed to add Car");
        });


    }
  return (
    <div>
        <NavigationBar />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row g-3"></div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Registration Number</label>
                            <input type="text" className="form-control" name="registration_number" value={input.registration_number} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Brand</label>
                            <input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">model</label><br></br>
                            <input type="text" className="form-control" name="model" value={input.model} onChange={inputHandeler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Vehicle Type</label>
                            <select name="" id="" className="form-control" name="vehicle_type" value={input.vehicle_type} onChange={inputHandeler}>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="MUV">MUV</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Fuel Type</label>
                            <select name="" id="" className="form-control" name="fuel_type" value={input.fuel_type} onChange={inputHandeler}>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="CNG">CNG</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Transmission</label>
                            <select name="" id="" className="form-control" name="transmission" value={input.transmission} onChange={inputHandeler} >

                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Seating Capacity</label>
                            <input type="number" className="form-control " name="seating_capacity" value={input.seating_capacity} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Rent Per Day</label>
                            <input type="number" className="form-control" name="rent_per_day" value={input.rent_per_day} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Availability Status</label>
                            <select name="" id="" className="form-control" name="availability_status" value={input.availability_status} onChange={inputHandeler} >

                                <option value="Available">Available</option>
                                <option value="Booked">Booked</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                        </div>








                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    )


export default AddCar