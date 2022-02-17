import React from "react";
import {Card, Container, Row} from "react-bootstrap";

class AboutPage extends React.Component {

  render() {
    return (
      <>
      <div >
      <h1>Meet the Creators!</h1>
      <Container className="aboutPage"  >
      
        <Row sm={2} md={6} lg={10} className="g-4">
        <Card style={{ width: '18rem' }} className="aboutCard">
          <Card.Img variant="top" src="https://i.ibb.co/D9TPBmX/aoife.jpg" alt="aoife" />
          <Card.Body>
            <Card.Title>Aoife Mulligan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="aboutCard">
          <Card.Img variant="top" src="https://i.ibb.co/rZCcLtn/tiara.jpg" alt="tiara"/>
          <Card.Body>
            <Card.Title>Tiara Brown</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>

          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="aboutCard">
          <Card.Img variant="top" src="https://i.ibb.co/FsHmsmY/ME.jpg" alt="brian" />
          <Card.Body>
            <Card.Title>Brian Tarte</Card.Title>
            <Card.Text>
            Hi! My name is Brian and I'm a supply chain professional who moonlights as a starving Software Developer. I enjoy working on teams and with Javascript to build front and back-end applications. So far, I thoroughly enjoy learning software languages and my dream is to bring my skillset to an organization that places an emphasis on environmental sustainability. To relax, I enjoy hitting the links, bladesmithing, and woodworking.
            </Card.Text>

          </Card.Body>
        </Card>
        </Row>
        </Container>
        </div>
        {/* TODO: add stuff from the wireframe, above is filler */}
      </>
    );
  }
};

export default AboutPage;