import React,{Component} from 'react';
import { Container, Nav, Row, Tab , Col} from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <Container style={{width:"500px"}}>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3} >
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first' >Новости </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second' >История </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third' >Вакансии </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth' >Партнеры </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth' >Карта </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey= 'first' >
                                    <img src='http://static.government.ru/media/photos/960x540/KK8xPOmepZ6oQlSwhNut8oZCDASkUkKg.jpeg'/>
                                    <h1>Андрей Рэмович Белоусов</h1>
                                    <p>
                                    Указом Президента Российской Федерации назначен Министром обороны Российской Федерации с 14 мая 2024.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src= 'https://ic.pics.livejournal.com/vladimirdar/64625554/3845177/3845177_original.png'/>
                                    <p>
                                    История военной торговли начинается с издания в 1918 году Декрета Совета Народных Комиссаров об организации на фронте и в прифронтовой полосе базисных складов, передвижных и стационарных лавок, хлебопекарен и других торговых структур, призванных обеспечить красноармейцев и командный состав товарами первой необходимости.
Созданное в 1918 году Центральное управление красноармейских лавок (ЦУКЛ) способствовало развитию этой формы военной торговли на фронтах через фронтовые управления и отделения красноармейских лавок.   
По окончании Гражданской войны в 1921 году ЦУКЛ реорганизуется во Всеармейское военно-кооперативное управление, в округах – военно-кооперативные управления, которые просуществовали до 1935 года, когда Постановлением (17 октября 1935 г.) Совета народных комиссаров внутренней торговли СССР было организовано Центральное государственное объединение военной торговли для обслуживания производственно-бытовых нужд Рабоче-крестьянской армии и флота – Центрвоенторг.
В апреле 1938 года Центрвоенторг реорганизован в Главное управление торговли (Главвоенторг). В свою очередь в военных округах  на флотах формируются окружные (флотские) военторги.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'> 
                                    <img src='https://klike.net/uploads/posts/2020-02/1582794229_5.jpg'/>
                                    <p>
                                    КАРЬЕРА (ВАКАНСИИ)
Карьера
Список вакансий
Основная ценность нашей компании – коллектив высококвалифицированных специалистов разного профиля, которые поддерживают высокие стандарты качества услуг, предоставляемых АО «Военторг».

Сегодня в нашей команде профессионалов работает более 1 000 сотрудников.

Нашими главными корпоративными ценностями являются профессионализм, командность и ответственность. 

Мы приветствуем появление в своих рядах специалистов, чьи профессиональные знания будут способствовать в достижении АО «Военторг» своих целей в сфере качественного оказания услуг.

Если вы хотите присоединиться к нашей команде единомышленников, предлагаем ознакомиться со списком открытых вакансий.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src='https://ic.pics.livejournal.com/vladimirdar/64625554/3837349/3837349_original.jpg'/>
                                    <p>
                                        Суть Военторга заключается в поддержании Армии РФ
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src='https://avatars.mds.yandex.net/get-altay/1359533/2a00000163cb59a6c58914f207ca4d4c8996/XXXL'/>
                                    <p>
                                        Суть Военторга заключается в поддержании Армии РФ
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )

    }
}

