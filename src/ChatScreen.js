import React from 'react';
import {Form, ListGroup, Container, Button, Row, Col} from 'react-bootstrap'

class ChatScreen extends React.Component {

    lastMessage = null;

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            users: []
        };
    }

    ScrollToBottom() {

        if (this.lastMessage)
            this.lastMessage.scrollIntoView();

    }

    componentDidMount() {

        // Adding demo data, we'll make it dynamic later :)

        var users = ['Superman', 'Batman', 'Flash', 'Spoderman', 'Iron man 3', 'Wonder woman', 'Hulk', 'John Cena'];

        var messages = [
            {author: 'Superman', message: 'Hey, whats up?'},
            {author: 'me', message: 'Nothing, just writing my a react + asp.net chat tutorials'},
            {author: 'Superman', message: 'Wow!'},
            {author: 'Superman', message: 'Sounds great! When can I see?'},
            {author: 'me', message: 'Coming soon!'},
            {author: 'Superman', message: "Can't wait :o"},
        ];

        this.setState({
            messages: messages,
            users: users
        }, () => {
            this.ScrollToBottom();
        });

    }

    render() {
        return (
            <Container style={{marginTop: 30, backgroundColor: '#fff', padding: '1em',}}>
                <Row>
                    <Col>
                        <div className={'text-right'}>
                            <small>Logged in as Waleed. <a href="#">Logout</a></small>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="3">
                        <div style={{maxHeight: '500px',}}>
                            <ListGroup style={{cursor: 'pointer'}}>
                                {
                                    this.state.users.map((u, index) => {

                                            var bgColor = (index === 0) ? '#7187ee' : '';
                                            var textColor = (index === 0) ? '#fff' : '';

                                            return (
                                                <ListGroup.Item style={{'backgroundColor': bgColor, 'color': textColor}}
                                                                as={'li'}>{u}</ListGroup.Item>
                                            );

                                        }
                                    )
                                }
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Col lg={12}>
                                <div className={'message-author'}>
                                    <h3>Superman</h3>
                                </div>
                            </Col>
                        </Row>
                        <div style={{height: '450px', overflowY: 'scroll', overflowX: 'hidden'}}>
                            <Row>
                                <Col lg={12}>
                                    {
                                        this.state.messages.map((msg, index) => {

                                            var classNames = (msg.author === 'me') ? 'message-left' : 'message-right';

                                            return (
                                                <div key={'el' + index} className={'message'}
                                                     ref={(el) => this.lastMessage = el}>
                                                    <div
                                                        className={'message-body ' + classNames}>
                                                        {msg.message}
                                                    </div>
                                                </div>
                                            );

                                        })
                                    }
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}/>
                    <Col>
                        <div style={{marginTop: '1em'}}>
                            <Form.Control onKeyUp={(event) => {

                                if (event.keyCode === 13 && event.target.value.trim() !== '') {

                                    this.setState({
                                        messages: this.state.messages.concat({
                                            'author': 'me',
                                            'message': event.target.value
                                        }),
                                    }, () => {
                                        this.ScrollToBottom();
                                    });

                                    event.target.value = '';

                                }

                            }} type="text" placeholder="Type your message here"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChatScreen;