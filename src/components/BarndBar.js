import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BarndBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card key={brand.id} style={{width: "fit-content", cursor:"pointer"}} className='p-3' onClick={() => device.setSelectedBrand(brand)} border={brand.id === device.selectedBrand.id ? "danger" : "light"}>
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BarndBar;