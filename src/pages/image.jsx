import React from 'react';
import { Card, Image } from 'antd';
import './images.css'

const ZoomedImage = () => {
    return (
        <Card className="zoom-container">
            <Image className="zoom-image" src=" https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/trims/trim-main/cbr1000rr/2024/2024-cbr1000rr-grand_prix_red-650x380.png" alt="Bike Image" />
        </Card>
    );
};

export default ZoomedImage;
