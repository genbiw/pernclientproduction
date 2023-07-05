import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import {SHOP_ROUTE} from "../utils/const"

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async () => {
        try {
            let data
            if (isLogin) {
                const data = await login(email, password)
            } else {
                const data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.respose.data.message)
        }

    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3' placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control className='mt-3' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} type='password' />
                </Form>
                {
                    isLogin ?
                        <div className='d-flex flex-column'>
                            <Button className='align-self-center mt-3' style={{ width: 200 }} variant='outline-success' onClick={click}>LOG IN</Button>
                            <NavLink className='align-self-center mt-3' to={REGISTRATION_ROUTE}>Don't have an account yet? Sign up here.</NavLink>
                        </div>
                        :
                        <div className='d-flex flex-column'>
                            <Button className='align-self-center mt-3' style={{ width: 200 }} variant='outline-success' onClick={click}>Registration</Button>
                            <NavLink className='align-self-center mt-3' to={LOGIN_ROUTE}>Have an account? Sign up here.</NavLink>
                        </div>
                }
            </Card>
        </Container>
    );
});

export default Auth;