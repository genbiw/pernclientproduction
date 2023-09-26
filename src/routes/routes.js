import Admin from "../pages/admin/Admin" 
import Basket from "../pages/basket/Basket"
import Shop from "../pages/shop/Shop"
import Auth from "../pages/auth/Auth"
import Device from "../pages/device/DevicePage"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/const"

export const authAdminRoutes = [ 
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    }
]

export const authRoutes = [ 
    
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Component: <Device/>
    }
]