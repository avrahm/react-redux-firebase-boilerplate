import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginFirebase } from "../firebase/functions/login";

import { Redirect } from 'react-router-dom';


export default function LoginPage() {

    const isLoggedIn = useSelector(state => state.userState.isLoggedIn);

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (event) => {
        dispatch(loginFirebase(email, password));
        // console.log('something', email, password);
        event.preventDefault();
    };

    return (
        <div>
            {!isLoggedIn ? (
                <>
                    <Form style={{ width: '400px', margin: 'auto' }} onSubmit={handleLoginSubmit}>
                        <Form.Group controlId="loginForm" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email"
                                onChange={e => setEmail(e.currentTarget.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password"
                                onChange={e => setPassword(e.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit</Button>
                    </Form>
                </>
            ) : (
                <>
                    <Redirect to={{ pathname: '/dashboard' }} />
                </>
            )
            }
        </div>
    );
}
