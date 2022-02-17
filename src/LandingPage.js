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
                <Container id="landingcontainer" >
                    <h1 id="landingHeader">Learn Black History</h1>
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
                    <button className="defaultButton" onClick={this.props.generateRandomFact}><p id="landingPad">Generate New Fact</p></button>
                    <p id="pwidth">Welcome to Learn Black History, an app you can use to learn more about Black History! Feel free to generate random facts to get a feel for the app, or if you choose to do so, sign up with us by clicking "Login" at the top of the page. Doing so will allow you to access our entire fact database, save your favorite facts to your profile, update facts in our database, or even contribute to the database!</p>
                </Container>
                
            </>
            
        );
    }
};

export default LandingPage;