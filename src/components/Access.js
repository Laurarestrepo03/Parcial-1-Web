import '../CSS-files/Access.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

const Access = (props) => {

    const[formValues, setFormValues] = useState({email: "", password:"", role: props.userRole});
    const[validationStates, setValidationStates] = useState({emailState: true, passwordState: true});
    
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,})$/;
    const passValidation = /^.{6,}$/;

    const handleEmailChange = ((e) => {
        const validEmail = emailValidation.test(formValues.email);
        setValidationStates({ ...validationStates, emailState: validEmail }); 
        setFormValues({...formValues, email: e.target.value})
    });

    const handlePasswordChange = ((e) => {
        const validPassword = passValidation.test(e.target.value);
        setFormValues({...formValues, password: e.target.value});
        setValidationStates({ ...validationStates, passwordState: validPassword });
    });

    
    const [emailView, setEmailView] = useState(1);
    const [passWordView, setPasswordView] = useState(0);

    const handleNextEmail = () => {
        if (validationStates.emailState) {
            setEmailView(0);
            setPasswordView(1);
        }
    }

    const nav = useNavigate();

    const handleNextPassword = () => {
        if (validationStates.passwordState) {
            handlePost();
            nav('/home');
        }
    }


    async function handlePost() {
        console.log(formValues);
      };

    return (
        <div className="A-container">
                
                {emailView && 
                <div>
                    <h1 style={{marginTop:"20vmin"}}>Acceder</h1>
                    <p style={{justifyContent:"center"}}>Usa tu cuenta de UniAlpes</p>
                    <Form style={{width:"60vmin", justifyContent:"center"}} className="mx-auto">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label style={{color:"gray"}}></Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" onChange={handleEmailChange} value={formValues.email} className={validationStates.emailState ? null : 'A-invalid-input'}/>
                            { !validationStates.emailState && <Form.Text className="text-muted">Tu correo debe seguir un formato establecido</Form.Text>}
                            <Form.Text style={{fontWeight:"bold", textAlign:"left", color:""}}>¿Olvidaste tu correo electrónico?</Form.Text>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" className="A-button" onClick={handleNextEmail}> Siguiente </Button>
                </div>}

                {passWordView &&
                    <div>
                        <h1>{formValues.email}</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:"2vmin"}}>
                                <Form.Label style={{color:"gray"}}></Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange} value={formValues.password} className={validationStates.passwordState ? null : 'A-invalid-input'}/>
                                { !validationStates.passwordState && <Form.Text className="text-muted">Tu contraseña debe tener la menos 6 caracteres</Form.Text> }
                            </Form.Group>
                        </Form>
                        <Button variant="primary" className="A-button" onClick={handleNextPassword}> Siguiente </Button>
                    </div>
                }
    
        </div>
    )
}

export default Access;