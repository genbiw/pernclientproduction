import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchOneDevices } from '../../http/deviceAPI';
import "./DevicePage.css"
import { addDevice } from '../../http/basketAPI';
import { Context } from '../../index';
import { Star } from "../../utils/elements"

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    const { user } = useContext(Context)
    const userId = user.user.id

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    const addDeviceToTheBasket = async () => {
        try {
            let data
            data = await addDevice(userId, id)
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='device-page'>
            <div className='device-page__main-row'>
                <div className='device-page__column'>
                    <h2>{device.name}</h2>
                    <img className="device-page__img" src={process.env.REACT_APP_API_URL + device.img} />
                    <div className='device-page__raiting'>
                        <div>
                            {device.raiting}
                        </div>
                        <Star />
                    </div>
                </div>

                <div className='device-page__column' >
                    <div className='device-page__price'>
                        <h3>{device.price} Eur</h3>
                        <button variant='outline-dark' onClick={addDeviceToTheBasket}>Add to the basket</button>
                    </div>
                </div>
            </div>
            <div className='device-page__characteristics'>
                <h1>Characteristics</h1>
                {device.info.map((info, index) =>
                    <div key={info.id} className={`${index % 2 === 0 ? "characteristics__lightgrey" : "characteristics__transparent"}`}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>

        </div>
    );
};

export default DevicePage; 