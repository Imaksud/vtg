import React,{Component} from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import mag1jpg from '../assets/mag1.jpg';
import mag2jpg from '../assets/mag2.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ mag1jpg }
                        alt='Voentorg'
                    />
                    <Carousel.Caption>
                        <h3> Наши магазины </h3>
                        <p> Военторг это основа военной торговли </p>    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ mag2jpg }
                        alt='Voentorg'
                    />
                    <Carousel.Caption>
                        <h3> Наши магазины </h3>
                        <p> Военторг это основа военной торговли </p>    
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        )

    }
}