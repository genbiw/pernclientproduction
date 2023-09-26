import React, { useContext } from 'react';
import { Context } from '../../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../../utils/const';
import { observer } from "mobx-react-lite"
import "./NavBar.css"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    return (
        <div className='container'>
            <div className='header'>
                <NavLink className="link" to={SHOP_ROUTE}>Shop</NavLink>
                {user.user.role === "ADMIN" && user.isAuth === true &&
                    <div className="header__menu">
                        <button className="header__button" onClick={() => {
                            navigate(BASKET_ROUTE)
                        }}>Basket</button>
                        <button className="header__button" onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</button>
                        <button className="header__button" onClick={() => logOut()}>Logout</button>
                    </div>}

                {user.user.role === "USER" && user.isAuth === true &&
                    <div className="d-flex" style={{ color: "white" }}>
                        <button className="header__button" onClick={() => {
                            navigate(BASKET_ROUTE)
                        }}>Basket</button>
                        <button className="header__button" onClick={() => logOut()}>Logout</button>
                    </div>}
                {user.isAuth === false &&
                    <div className="ml-auto" style={{ color: "white" }}>
                        <button className="header__button" onClick={() => {
                            navigate(LOGIN_ROUTE)
                        }}>Authorization</button>
                    </div>
                }

            </div>
        </div>
    );
});

export default NavBar; 