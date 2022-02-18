import React from "react";
import { Card, Container} from "react-bootstrap";

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
                    <p id="pwidth">Welcome to the site that takes a holistic approach to educating users about Black History! Feel free to generate random facts to get a feel for the app, or sign up with us by clicking "Login" at the top of the page. Doing so allows you to access all features of this website and use Learn Black History as an educational resource.</p>
                </Container>
                
            </>
            
        );
    }
};

export default LandingPage;