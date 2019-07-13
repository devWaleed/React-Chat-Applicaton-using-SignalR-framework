import React from 'react';

import Logo from './logo.png';

import {Container, Row, Col, Form, Button} from "react-bootstrap";

class LoginScreen extends React.Component {

    render() {
        return (
            <Container>
                <Row className={'justify-content-md-center'} style={{marginTop: '7em'}}>
                    <Col lg={4} className={'login-box'}>
                        <div>
                            <img src={Logo} alt="" className={'logo-login'}/>
                            <h3 className={'text-center'}>Chat App</h3>
                        </div>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Type your name here"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Your password"/>
                        </Form.Group>
                        <Form.Group>
                            <Row className={'justify-content-md-center'} style={{marginTop: '2em'}}>
                                <Col lg={4}>
                                    <Button variant={'primary'} type={'submit'} size={'md'} block>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default LoginScreen;