import React, { useEffect, useState } from 'react'
import {
    Container, Row, Card, Col, CardImg, CardTitle, CardSubtitle,
    CardText, CardFooter, CardBody
} from 'reactstrap'
import StartRatingComponent from 'react-star-rating-component'
import './app.css'
import axios from 'axios'

const App = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)


    useEffect(async () => {
        try {
            const result = await axios.get('https://asm-dev-api.herokuapp.com/api/v1/food')

            console.log(result)
            setItems(result.data.data.meals)
        } catch (error) {
            console.log(error)
            setError('unable to fetch data')
        }
    }, [])

    return (
        <div className='app'>
            <header>
                <h2>React/NodeJs Test</h2>
                <p>by: Sanni AbdulQuadri Olayinka</p>
            </header>
            <Container>
                <Row>
                    {
                        items &&
                        items.map((item, key) => (
                            <Col lg='3' md='4' sm='6' key={key}>
                                <Card className='mt-2 mb-2'>
                                    <CardImg top width='100%' src={item.strMealThumb} alt={item.id} />
                                    <CardBody>
                                        <CardTitle tag='h4'><span>{item.title}</span><span>{item.price}</span></CardTitle>
                                        <CardSubtitle className='mb-2 text-muted' tag='h6'>{item.strMeal}</CardSubtitle>
                                        <CardText>{item.description.slice(0, 198)}</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <StartRatingComponent startCount={5} value={item.ratings} editing={false} />
                                        <a>+</a>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))
                    }
                    {
                        error &&
                        <p>{error}</p>
                    }
                </Row>
                <a href='#' className='learn mt-5'>Learn More</a>
            </Container>
        </div>
    )
}

export default App
