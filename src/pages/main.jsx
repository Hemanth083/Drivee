import React from "react";
import { Button, Flex, Row, Space } from "antd";
import CarouselContainer from "../components/CarouselContainer";
import UseWindowResize from "../components/WindowResize";
import Input from '../components/input';
import CarRentImage from '../assets/carRental.jpg'
import BikeRentImage from '../assets/Bike.avif'
import give from '../assets/give.jpg'


const Main = () => {
    const windowSize = UseWindowResize();
    const { width } = windowSize;
    const adjustedWidth = width - 17;
    console.log(adjustedWidth)
    return (
        <Row align={'center'} justify={'center'} style={{ width: adjustedWidth }}>
            <CarouselContainer />
            <Input />

            <Flex vertical gap={90} style={{ height: '210vh', marginTop: "13%" }}>
                <Flex style={{ width: "100%" }}>
                    <Flex gap={30} vertical align='center' style={{ width: "50%", paddingLeft: "8%" }}>
                        <h2>Rent A Car</h2>
                        <Flex style={{ width: "80%" }} align='flex-start' gap={10}><Button disabled>Luxury</Button>
                            <Button disabled>Comfory</Button>
                            <Button disabled>Sport</Button></Flex>
                        <p style={{ width: "80%" }}>Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. Our user-friendly platform allows you to manage your bookings and view your trip history with ease.</p>
                        <div className="start">
                            <Button className="RentButton" size='large' type='text'>Rent Car</Button>
                        </div>
                    </Flex>
                    <div className="ImageContainer">
                        <img src={CarRentImage}></img>
                    </div>
                </Flex>

                <Flex style={{ width: "100%" }}>
                    <div style={{ textAlign: "start" }} className="ImageContainer ">
                        <img src={BikeRentImage}></img>
                    </div>
                    <Flex gap={30} vertical align='center' style={{ width: "50%", paddingRight: "8%" }}>
                        <h2>Rent A Bike</h2>
                        <Flex style={{ width: "80%" }} align='flex-start' gap={10}><Button disabled>Luxury</Button>
                            <Button disabled>Comfory</Button>
                            <Button disabled>Sport</Button></Flex>
                        <p style={{ width: "80%" }}>Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. Our user-friendly platform allows you to manage your bookings and view your trip history with ease.</p>
                        <div className="start">
                            <Button className="RentButton" size='large' type='text'>Rent Bike</Button>
                        </div>
                    </Flex>

                </Flex>
                <Flex style={{ width: "100%" }}>
                    <Flex gap={30} vertical align='center' style={{ width: "50%", paddingLeft: "8%" }}>
                        <h2>Do You Want Top Share Your <br />Vehicle?</h2>
                        <p style={{ width: "80%" }}>The shared vehicle payment feature on our rental website ensures seamless and secure transactions for our users. With transparent pricing and flexible payment options, users can conveniently pay for their rentals using their preferred method. Our automated billing system provides detailed invoices and payment confirmations, enhancing clarity and accountability. Timely payment reminders and notifications keep users informed about upcoming payments, ensuring they never miss a deadline. Accessible transaction history allows users to track their rental expenses and manage their budgets effectively.</p>
                        <div className="start">
                            <Button className="RentButton" size='large' type='text'>Learn More</Button>
                        </div>
                    </Flex>
                    <div className="ImageContainer">
                        <img src={give}></img>
                    </div>
                </Flex>
            </Flex>
            <Flex>
                <Flex>
                    <h2>Why Choose Us</h2>
                    <p>Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice.</p>
                </Flex>
                <Flex>

                </Flex>
            </Flex>
        </Row >
    );
};

export default Main;
