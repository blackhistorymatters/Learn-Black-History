import React from "react";
import { Card, Container, Button } from "react-bootstrap";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                {console.log('random fact logged from landingpage: ', this.props.randomFact)}
                <Container>
                    <Card style={{ width: '18rem' }} key={"key"}>
                        <Card.Img src="https://via.placeholder.com/150" alt="placeholder image" />
                        <Card.Body>
                            <Card.Title>
                                {this.props.randomFact.people[0]}
                            </Card.Title>
                            <Card.Text>
                                {this.props.randomFact.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button onClick={this.props.generateRandomFact}>Generate New Fact</Button>
                </Container>
                {/* TODO: add stuff from the wireframe, above is filler */}
            </>
        );
    }
};

export default LandingPage;