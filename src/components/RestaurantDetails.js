import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'


function RestaurantDetails({ match }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then(res => res.json())
                .then(data => {
                    setData(data.restaurants)
                })
        }
        fetchData();
    }, [])
    const details = data.find((i) => i.id == match.params.id)
    return (
       <>
            {details ? (
                <Row className="my-3">
                    <Col md={3}>
                        <Image className="img" src={details.photograph} alt={details.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h2> {details.name}</h2>
                            <p>{details.neighborhood}</p>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p> <strong>Cuisine:</strong>{details.cuisine_type}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p><strong>Address:</strong>{details.address}</p>
                        </ListGroup.Item>
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h4>Operating Hours:</h4>
                            <p>Monday: {details.operating_hours.Monday}</p>
                            <p>Tuesday: {details.operating_hours.Tuesday}</p>
                            <p>Wednesday: {details.operating_hours.Wednesday}</p>
                            <p>Thursday: {details.operating_hours.Thursday}</p>
                            <p>Friday: {details.operating_hours.Friday}</p>
                            <p>Saturday: {details.operating_hours.Saturday}</p>
                            <p>Sunday: {details.operating_hours.Sunday}</p>
                        </ListGroup.Item> 
                    </Col>
                    <Row className="my-3" >
                        <Col md={6}>
                            </Col>
                           
                        
                    </Row>
                </Row>
            ) : null}
            {/* </> */}
            
             {/* {data ?
                data.map(item =>(
                    <Row>
                        <ListGroup.Item>
                    <p>
                    <h4>Reviews</h4>
                    </p>
                        
                        <p>Name: {item["name"]}</p>
                        <p>Date: {item["date"]}</p>
                        <p>Rating: {item["rating"]}</p>
                        <p>Comments: {item["comments"]}</p>
                    </ListGroup.Item>
                    </Row>
                    
                    
                )):"error"
                } */}
                 </>

            )
}

            export default RestaurantDetails
