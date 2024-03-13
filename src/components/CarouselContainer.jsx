import React from "react";
import { Col, Space, Button } from "antd";
import NavigationBar from "./navigationBar";

const CarouselContainer = () => {
    const imageStyles = {
        width: '100%',
        height: '100%', // Specify a fixed height for the container
        backgroundSize: 'cover', // Cover the entire container
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        backgroundImage: `url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')`,
    };

    return (
        <Col align={"center"} justify={'center'} style={{ width: '100%', height: "100vh", }}>
            <NavigationBar />
            <div style={imageStyles}>
                <h1 style={{ width: '95%', height: "20%", paddingTop: "10%" }}>Unlock EndLess Driving With Drivee</h1>
                <Space size={"large"}>
                    <p>To contribute to positive change and achieve our susutainability goal with many ectraordinary</p>
                    <Space>
                        <Button className="RentButton" size='large' type='text'>Rent Car</Button>
                        <Button className="RentButton" color="black" size="large" type='text'>Rent Bike</Button>
                    </Space>
                </Space>
            </div>

        </Col>
    );
};

export default CarouselContainer;
