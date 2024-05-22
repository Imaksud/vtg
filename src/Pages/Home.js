import React,{Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Card, Container,   CardGroup } from 'react-bootstrap';
import mundirpng from '../assets/ruka.jpg';
import sklad from '../assets/sklad.jpg';


export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container >
                    <h2 className='text-center m-4'> Наши люди </h2>
                    <CardGroup>
                        <Card text='danger' bg='dark'>
                            <Card.Img 
                            variant='top'
                            src={mundirpng}                           
                            />
                            <Card.Body>
                                <Card.Title>Клиенты</Card.Title>
                                <Card.Text>
                                    Уже много лет выбирают нас
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card text='danger' bg='dark'>
                            <Card.Img 
                            variant='top'
                            src={sklad}                           
                            />
                            <Card.Body>
                                <Card.Title>Поставщики</Card.Title>
                                <Card.Text>
                                    Ценят работу с нами
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card text='danger' bg='dark'>
                            <Card.Img 
                            variant='top'
                            src='https://oaovoentorg.ru/netcat_files/multifile/2372/26_10.jpg'                           
                            />
                            <Card.Body>
                                <Card.Title>Сотрудники</Card.Title>
                                <Card.Text>
                                    Растут вместе с компанией
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
}
