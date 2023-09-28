import { useNavigate } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import '../CSS-files/Cars.css';

const Cars = (props) => {

    const nav = useNavigate();

    const renderCar = (index) => {
        nav('/home/'+ props.cars[index].carModel);
    }

    return (
        <div className="C-container">
            
            {props.cars.map((car, index) => (
            <Col>
                <Card sx={{ maxWidth: 200 } }>
                    <Card.Body style={{textAlign:"left", cursor:"pointer"}} onClick={() => renderCar(index)}>
                        <Card.Img src={car.image} style={{height:"10vmin"}}></Card.Img>
                        <Card.Title>{car.carModel}</Card.Title>
                        <Card.Text>{car.carMaker}</Card.Text>
                        <Card.Text>{car.price + " - " + car.carYear}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
            
            
        </div>
    )
}

export default Cars;