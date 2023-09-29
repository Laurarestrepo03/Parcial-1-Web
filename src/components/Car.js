import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col } from "react-bootstrap";
import {FormattedMessage, useIntl} from 'react-intl';
import '../CSS-files/Car.css';

const Car = (props) => {
    const intl = useIntl();
    const params = useParams();

    const [car, setCar] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Laurarestrepo03/Parcial-1-Web/main/datos.json")
        .then(response => response.json()).then(data => {
            setCar(data.find((car) => car.carModel === params.carModel));
          });
      }, [params.carModel]);
    
    return (
        <div className="C-container">
            <Col>
                <img src={car.image} alt={intl.formatMessage({id:"C-alt"})}></img>
            </Col>
            <Col className="C-details">
                <h1>{car.carModel}</h1>
                <hr></hr>
                <table>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-maker"/> </label>
                        <td>
                            {!props.userRole && <p>{car.carMaker}</p>}
                            {props.userRole && <input placeholder={intl.formatMessage({id:"C-maker"})} defaultValue={car.carMaker}></input>}
                        </td>
                    </tr>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-model"/> </label>
                        <td>
                            {!props.userRole && <p>{car.carModel}</p>}
                            {props.userRole && <input placeholder={intl.formatMessage({id:"C-model"})} defaultValue={car.carModel}></input>}
                        </td>
                    </tr>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-year"/> </label>
                        <td>
                            {!props.userRole && <p>{car.carYear}</p>}
                            {props.userRole && <input placeholder={intl.formatMessage({id:"C-year"})} defaultValue={car.carYear}></input>}
                        </td>
                    </tr>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-available"/> </label>
                        <td>
                            {!props.userRole && <p>{car.available ? intl.formatMessage({id:"C-available-yes"}) : intl.formatMessage({id:"C-available-no"})}</p>}
                            {props.userRole && <input placeholder={intl.formatMessage({id:"C-available"})} 
                            defaultValue={car.available ? intl.formatMessage({id:"C-available-yes"}) : intl.formatMessage({id:"C-available-no"})}></input>}
                        </td>
                    </tr>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-price"/> </label>
                        <td>
                            {!props.userRole && <p>{car.price}</p>}
                            {props.userRole && <input placeholder={intl.formatMessage({id:"C-price"})} defaultValue={car.price}></input>}
                        </td>
                    </tr>
                    <tr>
                        <label className="C-label"> <FormattedMessage id="C-description"/>: </label>
                    </tr>
                </table>
                {!props.userRole && <p>{car.description}</p>}
                {props.userRole && <input placeholder={intl.formatMessage({id:"C-description"})} 
                                    className="C-description-input"
                                    defaultValue={car.description}></input>}
                
            </Col>
        </div>
    )
}

export default Car;
