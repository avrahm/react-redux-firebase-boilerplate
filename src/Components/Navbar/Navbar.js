import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { logoutFirebase } from '../../firebase/functions/logoutFirebase';


export default function NavBar() {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.userState.isLoggedIn);

    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
            >
                <NavHashLink to={!isLoggedIn ? "/" : "/dashboard"} className="navbar-brand">
                    {/* <img src={logo} alt="Logo" />  */}
                     App
                </NavHashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {!isLoggedIn ? (
                            <div>
                                <NavHashLink
                                    className="nav-link"
                                    activeStyle={{ color: "green" }}
                                    to="/"
                                >
                                    Home
                                    </NavHashLink>
                            </div>
                        ) : (
                            <div style={{ flexDirection: 'row', margin: 5 }}>

                            </div>
                        )}
                    </Nav>
                    <Nav>
                        {!isLoggedIn ? (
                            <>
                            <Link className="nav-link" eventkey={2} to="/login">
                                <Button variant="outline-success" size="sm">
                                    Login</Button>
                            </Link>
                            <Link className="nav-link" eventkey={2} to="/signup">
                                <Button variant="outline-success" size="sm">
                                    Signup</Button>
                            </Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" eventkey={2} to="/dashboard">
                                    <Button variant="outline-success" size="sm">
                                        Dashboard</Button>
                                </Link>
                                <Link className="nav-link">
                                    <Button variant="outline-danger" size="sm" onClick={() => dispatch(logoutFirebase())}>
                                        Sign Out</Button>
                                </Link>
                            </>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
