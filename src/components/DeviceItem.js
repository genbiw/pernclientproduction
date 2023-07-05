import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import start from "../assets/star.png"
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/const';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{ width: "150", height: "150", cursor: "pointer", border: "light" }}>
                <Image class="card-img-top" width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>Raiting...</div>
                    <div className='mt-1 d-flex align-items-center'>
                        <div>{device.raiting}</div>
                        <Image  width={15} height={15} src={start} />
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;