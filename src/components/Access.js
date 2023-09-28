import '../CSS-files/Access.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import {FormattedMessage, useIntl} from 'react-intl';

const Access = (props) => {

    const nav = useNavigate();
    const intl = useIntl();

    const[formValues, setFormValues] = useState({email: "", password:"", role: props.userRole});
    const[validationStates, setValidationStates] = useState({emailState: true, passwordState: true});

    const [emailView, setEmailView] = useState(true);
    const [passWordView, setPasswordView] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

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

    const handleNextEmail = () => {
        if (formValues.email === ""){
            setValidationStates({ ...validationStates, emailState: false});
        }
        else {
            if (validationStates.emailState) {
                setEmailView(false);
                setPasswordView(true);
            }
        }
    };

    const handleNextPassword = () => {
        if (formValues.password === "") {
            setValidationStates({ ...validationStates, passwordState: false});
        }
        else {
            if (validationStates.passwordState) {
                handlePost();
                nav('/home');
            }
        }    
    };

    async function handlePost() {
        console.log(formValues);
      };

    return (
        <div className="A-container">
                
                {emailView && (
                <div>
                    <h1 style={{marginTop:"20vmin"}} className="A-header"> <FormattedMessage id="A-header"/> </h1>
                    <p className="A-message"> <FormattedMessage id="A-use-account"/> </p>
                    <Form style={{width:"60vmin", justifyContent:"center"}} className="mx-auto">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label style={{color:"gray"}}></Form.Label>
                            <Form.Control type="email" placeholder={intl.formatMessage({id:"A-email"})} onChange={handleEmailChange} value={formValues.email} 
                            className={validationStates.emailState ? null : 'A-invalid-input'}/>
                            { !validationStates.emailState && <Form.Text className="text-muted"> <FormattedMessage id="A-email-warning"/> </Form.Text>}
                            <p className="A-forgot"> <FormattedMessage id="A-forgot-email"/> </p>
                        </Form.Group>
                        <div className="A-create-next">
                            <p style={{color:"#2470e8", fontWeight:"bold"}}> <FormattedMessage id="A-create-account"/> </p>
                            <Button variant="primary" className="A-button" onClick={handleNextEmail}> <FormattedMessage id="A-next"/> </Button>
                        </div>
                    </Form>
                </div>)}

                {passWordView && (
                    <div>
                        <h1 style={{marginTop:"20vmin"}} className="A-header"> {formValues.email}</h1>
                        <Form style={{width:"60vmin", justifyContent:"center"}} className="mx-auto">
                            <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:"2vmin"}}>
                                <Form.Label style={{color:"gray"}}></Form.Label>
                                <Form.Control type={showPassword ? "text" : "password"} placeholder={intl.formatMessage({id:"A-enter-password"})} onChange={handlePasswordChange} value={formValues.password} 
                                className={validationStates.passwordState ? null : 'A-invalid-input'}/>
                                { !validationStates.passwordState && <Form.Text className="text-muted"> <FormattedMessage id="A-password-warning"/> </Form.Text> }
                                <Form.Check className="A-check" checked={showPassword} onChange={() => setShowPassword(!showPassword)} 
                                label={intl.formatMessage({id:"A-show-password"})} style={{marginTop:"1.5vmin"}}></Form.Check>
                            </Form.Group>
                        </Form>
                        <Button variant="primary" className="A-button" style={{textAlign:"center", marginTop:"5vmin"}} onClick={handleNextPassword}> <FormattedMessage id="A-next"/> </Button>
                    </div>)}
        </div>
    )
}

export default Access;