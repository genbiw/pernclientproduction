import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>Shop</NavLink>
                {user.isAuth ?
                    <Nav className="d-flex" style={{ color: "white" }}>
                        <Button variant={"outline-light"} className="me-2" onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()}>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;