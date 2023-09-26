import React from 'react';
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from '../../utils/const';
import { deleteDevice, deleteAllDevices } from '../../http/basketAPI';
import "./BasketItem.css"

const BasketItem = ({ device, className }) => {
    const navigate = useNavigate()

    const reduceQuantity = () => {
        const response = deleteDevice(device.userId, device.id)
        console.log(response)
    }

    const removeDevice = () => {
        const response = deleteAllDevices(device.userId)
        console.log(response)
    }



    return (
        <div className={`basket-item ${className}`}>
            <div className='basket-item__content'>
                <image className="basket-item__img" src={process.env.REACT_APP_API_URL + device.img} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)} />
                <div className="basket-item__item">{device.name} /</div>
                <div className="basket-item__item">Price: {device.price} /</div>
                <div className="basket-item__item">Quantity: {device.quantity}</div>
            </div>
            <div className='basket-item__characteristics'>
                <button className='basket-item__button' onClick={reduceQuantity}>reduce quantity</button>
                <button className='basket-item__button' onClick={removeDevice}>remove product</button>
            </div>
        </div>

    );
};

export default BasketItem; 