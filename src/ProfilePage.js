import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import CreateData from './RenderData';
import { Modal, Form, Button, Carousel } from "react-bootstrap";


class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      createModalShow: false,
      updateModalShow: false,
      factToUpdate: { people: 'default', text: 'text', source: 'source' }
    }
  }

  handleCreateSubmit = (event) => {
    event.preventDefault();
    this.props.createFact(event.target.people.value, event.target.text.value, event.target.source.value);
    this.setState({ createModalShow: false });
  }

  handleCreateClose = () => {
    this.setState({ createModalShow: false })
  }

  handleCreateOpen = () => {
    this.setState({ createModalShow: true })
  }

  componentDidMount = async () => {
    this.props.getUserFacts();
  }

  handleUpdate = (fact) => {
    this.setState({ factToUpdate: fact, updateModalShow: true });
  }

  handleUpdateClose = () => {
    this.setState({ updateModalShow: false })
  }

  handleUpdateSubmit = (event) => {
    event.preventDefault();
    this.props.updateFact(event.target.people.value, event.target.text.value, event.target.source.value, this.state.factToUpdate);
    this.setState({ updateModalShow: false });
  }

  handlePeopleChange = (event) => {
    let newObj = this.state.factToUpdate;
    newObj.people = event.target.value;
    this.setState({ factToUpdate: newObj })
  }

  handleTextChange = (event) => {
    let newObj = this.state.factToUpdate;
    newObj.text = event.target.value;
    this.setState({ factToUpdate: newObj })
  }

  handleSourceChange = (event) => {
    let newObj = this.state.factToUpdate;
    newObj.source = event.target.value;
    this.setState({ factToUpdate: newObj })
  }



  render() {

    if (this.props.auth0.user) {
      return (
        <>
          <h2>Welcome, {this.props.auth0.user.name}!</h2>
          {/* <p>
                This is the profile page!
          </p> */}
          {/* <CreateData /> */}
          {/* TODO: add stuff from the wireframe, above is filler */}
          <div id="profilePageC1">
          <h2>Random facts:</h2>
          <Carousel id="carouselColor" style={{ width: '30rem' }}>
            {this.props.randomFactsArray.map((fact, idx) => (
              <Carousel.Item key={idx}>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://www.liberty.edu/champion/wp-content/uploads/2014/02/Untitled-151.jpg"
                  alt="Placeholder"
                />
                <Carousel.Caption>

             

                  <h3 id="cardText">{fact.people ? fact.people[0] : ''}</h3>
                  <p id="cardText">{fact.text}</p>

                  <p><a href={fact.source}>Source</a></p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
            }
          </Carousel>
          
          <h2>Your favorited facts:</h2>
          <Carousel id="carouselColor" style={{ width: '30rem' }}>
            {console.log('User facts array: ', this.props.userFactsArray)}
            {this.props.userFactsArray.map((fact, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src="https://www.liberty.edu/champion/wp-content/uploads/2014/02/Untitled-151.jpg"
                  alt="Placeholder"
                />
                <Carousel.Caption>

                  <h3 id="cardText">{fact.people ? fact.people : ''}</h3>
                  <p id="cardText">{fact.text}</p>

                  <p><a href={fact.source}>Source</a></p>
                  <Button id="button" onClick={() => this.props.removeFact(fact)}>
                    Delete fact
                  </Button>
                  <Button id="button" onClick={() => this.handleUpdate(fact)}>
                    Update button
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))
            }
          </Carousel>
         
          <Button id="profileButton" onClick={this.handleCreateOpen}>Create a new Fact</Button>
          </div>
          
          {/* UPDATE MODAL */}
          <Modal show={this.state.updateModalShow} onHide={this.handleUpdateClose}>
            <Modal.Header closeButton>
              <Modal.Body>
                <Form onSubmit={this.handleUpdateSubmit}>
                  <Form.Group className="mb-3" controlId="people">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="name" placeholder="Enter a fact title" value={this.state.factToUpdate.people} onChange={this.handlePeopleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="name" placeholder="Enter the fact" value={this.state.factToUpdate.text} onChange={this.handleTextChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="source">
                    <Form.Label>Source</Form.Label>
                    <Form.Control type="name" placeholder="Enter your source" value={this.state.factToUpdate.source} onChange={this.handleSourceChange} />
                  </Form.Group>
                  <Button id="button" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal.Header>
            <Modal.Footer>
              <Button id="button" variant="info" onClick={this.handleUpdateClose}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* CREATE NEW MODAL */}
          <Modal show={this.state.createModalShow} onHide={this.handleCreateClose}>
            <Modal.Header closeButton>
              <Modal.Body>
                <Form onSubmit={this.handleCreateSubmit}>
                  <Form.Group className="mb-3" controlId="people">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="name" placeholder="Enter a fact title" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="name" placeholder="Enter the fact" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="source">
                    <Form.Label>Source</Form.Label>
                    <Form.Control type="name" placeholder="Enter your source" />
                  </Form.Group>
                  <Button  id="button" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="info" onClick={this.handleCreateClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </>
      );

    } else {
      console.log("Profile page was redirected due to user not logged in. Uh-oh!");
      return <Redirect to="/" />
    }
  }
};

export default withAuth0(ProfilePage);