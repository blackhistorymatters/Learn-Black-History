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
            As a former broadcast journalist, I never imagined I would have transferrrable skills applicable to web development, but after studying for a year I can see how those two passions entertwine. I am given the opportunity to help others in a very creative way and use my communication skills to brainstorm ideas and bring them to life. I was very eager to work on this project especially when reflecting on my former education in middle and highschool. I did not get a full scope about the role my ancestors played in setting the stage for other people of color until I left the former educational systems and seeked a higher education and did research on my own. Black people have made just as big of a mark on America as any other race and deserve to be remembered as the spectacular individuals that they were and will continue to be.
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