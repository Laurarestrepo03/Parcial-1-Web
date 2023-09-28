import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Card } from "react-bootstrap";

const Carro = (props) => {
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

export default Carro;


{/* <Col>
                <h1 style={{fontSize:"3vmin"}}>{bookDetail.title}</h1>
                <hr></hr>
                <table>
                    <tr>
                        <th scope="col">ISBN</th>
                        {!props.userRole && <p>{bookDetail.isbn}</p>}
                        {props.userRole && <input placeholder="ISBN" defaultValue={bookDetail.isbn}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Author</th>
                        {!props.userRole && <p>{bookDetail.author}</p>}
                        {props.userRole && <input placeholder="Author" defaultValue={bookDetail.author}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Publisher</th>
                        {!props.userRole && <p>{bookDetail.publisher}</p>}
                        {props.userRole && <input placeholder="Publisher" defaultValue={bookDetail.publisher}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Genre</th>
                        {!props.userRole && <p>{bookDetail.genre}</p>}
                        {props.userRole && <input placeholder="Genre" defaultValue={bookDetail.genre}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Year</th>
                        {!props.userRole && <p>{bookDetail.year}</p>}
                        {props.userRole && <input placeholder="Year" defaultValue={bookDetail.year}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Available Online</th>
                        {!props.userRole && <p>{bookDetail.availableOnline ? "Yes" : "No"}</p>}
                        {props.userRole && <input placeholder="Available Online" defaultValue={bookDetail.availableOnline ? "Yes" : "No"}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Price</th>
                        {!props.userRole && <p>{bookDetail.price}</p>}
                        {props.userRole && <input placeholder="Price" defaultValue={bookDetail.price}></input>}
                    </tr>
                    <tr>
                        <th scope="col">Summary:</th>
                    </tr>
                </table>
                {!props.userRole && <p>{bookDetail.summary}</p>}
                {props.userRole && <input placeholder="Summary" defaultValue={bookDetail.summary}></input>}
            </Col> */}