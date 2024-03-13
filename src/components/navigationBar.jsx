import React from "react";
import { Row, Col, Select, Dropdown, Button, Space, Menu } from "antd";
import './navigation.css';
import '../App.css'; // Import your global styles


const NavigationBar = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
    );

    return (
        <Row className="custom-navigation" align='middle' justify="space-between" style={{ marginLeft: "5%" }}>
            <Col className="headerFont">DRIVEE</Col>
            <Space size={30}>
                <Col>
                    <Dropdown overlay={menu} className="headerFont ant-select">
                        <Button className="ant-dropdown-link" type="text">
                            Hosting
                        </Button>
                    </Dropdown>
                </Col>
                <Col className="headerFont">Contact Us</Col>
                <Col>
                    <Dropdown overlay={menu} className="headerFont ant-select">
                        <Button className="ant-dropdown-link" type="text">
                            Account
                        </Button>
                    </Dropdown>
                </Col>
            </Space>
            <Space size={20}>
                <Button type='primary' color="white" size='large' className="headerFont ">Sign In</Button>
                <Button type="text" color='Black' size="large" className="headerFont ">Sign Up</Button>
            </Space>
        </Row >
    );
}

export default NavigationBar;
