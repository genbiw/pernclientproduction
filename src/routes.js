import Admin from "./pages/Admin" 
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Device from "./pages/DevicePage"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/const"

export const authRoutes = [ 
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Element: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth/>
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Element: <Device/>
    }
]