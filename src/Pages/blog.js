import React,{Component} from 'react';
import { Card, ClassName, Col, Container, ListGroup, Row  } from 'react-bootstrap';
import vtg1 from '../assets/vtg1.gif';


export default class blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div ClassName="media">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={vtg1} 
                            />
                        </div>
                            <div className="media-body">
                                <h5>Обновление</h5>
                                <p>
                                    Скоро появиться наш виртуальный помощник.
                                </p>
                            </div>
                            <div ClassName="media">
                            <img
                                width={200}
                                height={120}
                                className='mr-3'
                                src='https://storage.googleapis.com/moravio-web/media/2560px_Node_js_logo_svg_c816c99271/2560px_Node_js_logo_svg_c816c99271.png'  
                            />
                        </div>
                            <div className="media-body">
                                <h5>Мы перешли на node.js V17</h5>
                                <p>
                                +Поддержка OpenSSL 3
                                +Node.js версия в трассировках стека
                                +Движок JavaScript V8 версии 9.5
                                +Новые API промисов
                                +Обновленная поддержка платформ
                                </p>
                            </div>
                            <div ClassName="media">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='http://kog-chilschool.edu.tomsk.ru/wp-content/uploads/2023/01/feedback_icon1024x1024_1562140546-768x768.png'  
                            />
                        </div>
                            <div className="media-body">
                                <h5>Ваши пожелания</h5>
                                <p>
                                    Можете написать Ваши пожелания в блоке Контакты
                                </p>
                            </div>
                    </Col >
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Последние изменения</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Уже скоро</ListGroup.Item>
                                <ListGroup.Item>Послдение обновление</ListGroup.Item>
                                <ListGroup.Item>Ваши пожелания</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        )

    }
}
