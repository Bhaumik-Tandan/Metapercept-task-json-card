import React from 'react'
import {Card,Button} from "react-bootstrap";
function Ind(p) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.img} />
            <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                
                <Card.Text>
                    {p.dec}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="dark">View</Button>
            </Card.Footer>
        </Card>
    )
}

export default Ind;
