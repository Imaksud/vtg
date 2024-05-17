import React,{Component} from 'react';
import { Container, Nav, Row, Tab , Col} from 'react-bootstrap';



export default class About extends Component {
    render() {
        return (
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3} >
                        <Nav variant='pills' className='flex-column' mt-2>
                            <Nav.Item>
                                <Nav.Link eventKey='first' >Design </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second' >Team </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third' >Programming </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth' >Fraemworks </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth' >Libraries </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane> eventKey='first'
                                <img src='vtg1.gif'/>
                                <p>
                                    Суть Военторга заключается в поддержании Армии РФ
                                </p>
                            </Tab.Pane>
                            <Tab.Pane> eventKey='second'
                                <img src='https://oaovoentorg.ru/netcat_files/multifile/2372/4_45.jpg'/>
                                <p>
                                    Суть Военторга заключается в поддержании Армии РФ
                                </p>
                            </Tab.Pane>
                            <Tab.Pane> eventKey='third'
                                <img src='https://oaovoentorg.ru/netcat_files/multifile/2372/387/DU7I8543.JPG'/>
                                <p>
                                    Суть Военторга заключается в поддержании Армии РФ
                                </p>
                            </Tab.Pane>
                            <Tab.Pane> eventKey='fourth'
                                <img src='https://oaovoentorg.ru/netcat_files/multifile/2372/1__2__1.jpg'/>
                                <p>
                                    Суть Военторга заключается в поддержании Армии РФ
                                </p>
                            </Tab.Pane>
                            <Tab.Pane> eventKey='fifth'
                                <img src='https://avatars.dzeninfra.ru/get-zen_doc/3415135/pub_612627bae3fa04199b9e278a_612627e758c2c11c057fd12a/scale_1200'/>
                                <p>
                                    Суть Военторга заключается в поддержании Армии РФ
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            
            </Tab.Container>
        )

    }
}

