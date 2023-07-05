import React, { useContext } from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes"
import Shop from "../pages/Shop"
import { SHOP_ROUTE } from '../utils/const';
import { Context } from '../index';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <Routes>
                <Route>
                    {user.isAuth === true && authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={Component}/>
                    )}
                    {publicRoutes.map(({path, Element}) => 
                        <Route key={path} path={path} element={Element}/>
                    )}
                    <Route path="*" element={<Navigate to={SHOP_ROUTE}/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;