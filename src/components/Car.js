import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col } from "react-bootstrap";
import '../CSS-files/Car.css';

const Car = (props) => {
    const params = useParams();
    const [car, ] = useState(props.cars.find((car) => car.carModel === (params.carModel)));
    
    return (
        <div className="C-container">
            <Col>
                <img src={car.image} alt="carro"></img>
            </Col>
            <Col>
                <h1>{car.carModel}</h1>
                <hr></hr>
                <table>
                    <tr>
                        <th scope="col">Car Maker</th>
                        {!props.userRole && <p>{car.carMaker}</p>}
                        {props.userRole && <input placeholder="Car Maker" defaultValue={car.carMaker}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Car Model</th>
                        {!props.userRole && <p>{car.carModel}</p>}
                        {props.userRole && <input placeholder="Car Model" defaultValue={car.carModel}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Car Year</th>
                        {!props.userRole && <p>{car.carModel}</p>}
                        {props.userRole && <input placeholder="Car Year" defaultValue={car.carYear}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Available Online</th>
                        {!props.userRole && <p>{car.available ? "Yes" : "No"}</p>}
                        {props.userRole && <input placeholder="Available Online" defaultValue={car.available ? "Yes" : "No"}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Price</th>
                        {!props.userRole && <p>{car.carPrice}</p>}
                        {props.userRole && <input placeholder="Price" defaultValue={car.carPrice}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Description:</th>
                    </tr>
                </table>
                {!props.userRole && <p>{car.description}</p>}
                {props.userRole && <input placeholder="Description" defaultValue={car.description}></input>}
                
            </Col>
        </div>
    )
}

export default Car;