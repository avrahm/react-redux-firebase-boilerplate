import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { signUpFirebase } from '../firebase/functions/signup';

import { Redirect } from 'react-router-dom';


export default function SignupPage() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.userState.isLoggedIn);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signupDetails = {
        fullName,
        email,
        password,
    };

    const onSubmitRegister = (event) => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        const dispatchSignUp = dispatch(signUpFirebase(signupDetails));
        if (dispatchSignUp) {
            // handle successful signup
            console.log('SIGNED UP');
        } else {
            // handle failed signup
            console.log('FAILED');
        }
        event.preventDefault();
    };

    return (
        <div>
            {!isLoggedIn ? (
                <>
                    <Form style={{ width: '400px', margin: 'auto' }} onSubmit={onSubmitRegister}>
                        <Form.Group controlId="signupName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name"
                                onChange={e => setFullName(e.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="signupEmail" >
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
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="text" placeholder="Password"
                                onChange={e => setConfirmPassword(e.currentTarget.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up</Button>
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
