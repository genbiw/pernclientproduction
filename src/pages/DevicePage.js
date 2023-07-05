import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row, Card } from 'react-bootstrap';
import bigStar from "../assets/bigStar.png"
import { useParams } from 'react-router-dom'
import { fetchOneDevices } from '../http/deviceAPI';
import "./DevicePage.css"

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <div className='main'>
            <div className='main-row'>
                <div md={4}>
                    <h2>{device.name}</h2>
                    <Image class="img-fluid img-thumbnail" width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                    <div className='d-flex jalign-items-center justify-content-center' style={{ background: `url(${bigStar}) no-repeat center center`, width: 50, height: 50, backgroundSize: "cover", fontSize: 20 }}>
                            {device.raiting}
                        </div>
                </div>
                <div md={4}>
                    <Row className='d-flex flex-column align-items-center'>

                        
                    </Row>
                </div>
                <div md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around' style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}>
                        <h3>{device.price} Eur</h3>
                        <Button variant='outline-dark'>Add to basket</Button>
                    </Card>
                </div>
            </div>
            <div className='main-row'>
                <h1>Characteristics</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? "lightgrey" : "transparent", padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default DevicePage;