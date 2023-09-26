import React, { useContext, useEffect } from 'react';
import { Context } from '../../index';
import BasketItem from '../../components/basket/BasketItem';
import { observer } from 'mobx-react-lite';
import { getBasket } from '../../http/basketAPI';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import "./Basket.css"

const Basket = observer(() => {
    const {basket, user, device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 30).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        getBasket(user.user.id).then(data => basket.setItems(data))
    }, [])

   const basketDevices = basket.items.map(data => {
        const deviceData = device.devices.find(d => d.id === data.deviceId)
        if (deviceData) {
            return {
                ...deviceData,
                quantity: data.quantity,
                userId: user.user.id
            };
        }
        return null;
    }).filter(Boolean)
   
    
    return (
        <div className='container'>
            <div className='basket-page'>
            {basketDevices.length !== 0 ?
                basketDevices.map((device, index) => 
                    <BasketItem className={`${index % 2 === 0 ? "basket-item--lightgrey" : "basket-item--transparent"}`} key={device.id} device={device}/>)
                : <div>Basket is empty</div>
            }
        </div>
        </div>
    );
});

export default Basket;