import React,{Component} from 'react';
import { Button, Container, Form } from 'react-bootstrap';


export default class Contact extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className='text-center'> Обратная связь </h1>
                <Form>
                    
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label> Email </Form.Label>
                        <Form.Control type='email' placeholder='Введите Email'/>
                        <Form.Text>
                            Ваши данные конфидециальны
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label> Введите текст</Form.Label>
                        <Form.Control as='textarea' rows='3'/>
                    </Form.Group>

                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox'label='Подтвредите заполнение формы'/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>submit </Button>


                </Form>
            </Container>
        )

    }
}
