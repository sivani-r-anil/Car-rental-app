import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCars = () => {

    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response) => {
                changeData(response.data)
                setLoading(false);
            }
        ).catch(

            (error) => {
                console.log(error)
                setLoading(false);

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    if (loading) {
        return <h3>Loading...</h3>;
    }


    return (
        <div>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Reg No</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Type</th>
                        <th scope="col">Fuel</th>
                        <th scope="col">Date</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Seats</th>
                        <th scope="col">Rent per day</th>
                        <th scope="col">City</th>
                        <th scope="col">Status</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.registration_number}</td>
                                    <td>{data.brand}</td>
                                    <td>{data.model}</td>
                                    <td>{data.vehicle_type}</td>
                                    <td>{data.fuel_type}</td>
                                    <td>{data.transmission}</td>
                                    <td>{data.seating_capacity}</td>
                                    <td>{data.rent_per_day}</td>
                                    <td>{data.city}</td>
                                    <td>{data.availability_status}</td>

                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>
        </div>
    )
}

export default ViewCars