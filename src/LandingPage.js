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
                    <Card id="landingCard" style={{ width: '18rem' }} key={"key"}>
                        <Card.Img src="https://www.liberty.edu/champion/wp-content/uploads/2014/02/Untitled-151.jpg" alt="placeholder image" />
                        <Card.Body id="cardBackground">
                            <Card.Title>
                                {this.props.randomFact.people[0]}
                            </Card.Title>
                            <Card.Text>
                                {this.props.randomFact.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button id="defaultButton" onClick={this.props.generateRandomFact}>Generate New Fact</Button>
                </Container>
                {/* TODO: add stuff from the wireframe, above is filler */}
            </>
        );
    }
};

export default LandingPage;