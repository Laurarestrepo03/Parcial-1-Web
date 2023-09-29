import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import '../CSS-files/Cars.css';

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Laurarestrepo03/Parcial-1-Web/main/datos.json")
        .then(response => response.json()).then(data => setCars(data));
      },[]);

    const nav = useNavigate();

    const renderCar = (index) => {
        nav('/home/'+ cars[index].carModel);
    }

    return (
        <div className="CS-container">
            
            {cars.map((car, index) => (
                <Card className="CS-card">
                    <Card.Body style={{textAlign:"left", cursor:"pointer"}} onClick={() => renderCar(index)}>
                        <Card.Img src={car.image} className="CS-img"></Card.Img>
                        <Card.Title style={{marginTop:"2vmin"}}>{car.carModel}</Card.Title>
                        <Card.Subtitle>{car.carMaker}</Card.Subtitle>
                        <Card.Text style={{marginTop:"1vmin"}}>{car.price + " - " + car.carYear}</Card.Text>
                    </Card.Body>
                </Card>
            ))}  
        </div>
    )
}

export default Cars;