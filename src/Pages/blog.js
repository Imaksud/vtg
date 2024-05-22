import React,{Component} from 'react';
import { Col, Container, Row , Responsive} from 'react-bootstrap';


export default class blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Responsive>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src=''  
                            />
                        </Responsive>
                    </Col>
                </Row>
            </Container>
        )

    }
}
