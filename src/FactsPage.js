import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class FactsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tagList: [],
            peopleList: [],
            selectedTag: '',
            selectedPerson: '',
            displayedFacts: [],
        }
    }

    async componentDidMount() {
        const config = {
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/tagslist'
        }

        const peopleConfig = {
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/peoplelist'
        }

        const tagsResponse = await axios(config);


        this.setState({ tagList: tagsResponse.data });
        console.log('The list of tags is here', this.state.tagList);

        const peopleResponse = await axios(peopleConfig);


        this.setState({ peopleList: peopleResponse.data });
        console.log('The list of people is here', this.state.peopleList);
    }

    handleTagChange = async (event) => {
        event.preventDefault();
        const tagSelection = event.target.value;
        await this.setState({ selectedTag: tagSelection });
        console.log(this.state.selectedTag)

        this.getFactByTags();

    }
    handlePeopleChange = async (event) => {
        event.preventDefault();
        const peopleSelection = event.target.value;
        await this.setState({ selectedPerson: peopleSelection });
        console.log(this.state.selectedPerson);

        this.getFactsByPerson();
    }

    async getFactByTags() {

        const queryObj = this.state.selectedTag;
        console.log(queryObj);
        const config = {
            params: { tags: queryObj },
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/fact'
        }

        const factTagResponse = await axios(config)
        this.setState({ displayedFacts: factTagResponse.data.Results })
        console.log(factTagResponse.data);
    }

    async getFactsByPerson() {

        const queryObj = this.state.selectedPerson;
        console.log(queryObj);
        const config = {
            params: { people: queryObj },
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/people'
        }
        console.log(this.state.displayedFacts)
        const factPersonResponse = await axios(config)
        this.setState({ displayedFacts: factPersonResponse.data.Results })
        console.log('This is a person', this.state.displayedFacts);
    }

    render() {
        return (
            <>
            <Container id="formContainer">
                <Form>
                    <Form.Label className="formLabel">Category Selection</Form.Label>
                    <Form.Select onChange={this.handleTagChange} >
                        <option value="none">Make a Selection</option>
                        {this.state.tagList.map((tag, idx) => (

                            <option value={tag.name} className="selectPad">{this.state.tagList[idx].name}</option>

                        ))}
                    </Form.Select>
                </Form>
                <Form>
                    <Form.Label className="formLabel">Person Selection</Form.Label>
                    <Form.Select onChange={this.handlePeopleChange} >
                        <option value="none">Make a Selection</option>
                        {this.state.peopleList.map((person, idx) => (

                            <option value={person.name} className="selectPad">{this.state.peopleList[idx].name}</option>

                        ))}
                    </Form.Select>
                </Form>
                </Container>
                <Container id="factContainer">
                <Row sm={2} md={6} lg={10} className="g-4">
                {this.state.displayedFacts.map((fact, idx) => (
                    
                    <Card style={{ width: '18rem', paddingBottom: '1rem', height: '22rem', overflow: 'auto' }} key={idx} id="factCard">
                        <Card.Img src="https://www.liberty.edu/champion/wp-content/uploads/2014/02/Untitled-151.jpg" alt="placeholder image" />
                        <Card.Body>
                            <Card.Title>
                                <h3>{fact.people ? fact.people[0] : this.state.selectedTag}</h3>
                            </Card.Title>
                            <Card.Text id="factCardText">
                                {fact.text}
                            </Card.Text>
                        </Card.Body>
                        <Button className="cardButton" onClick={() => this.props.createFactFromFavorite(fact)}>Add to Favorites!</Button>
                    </Card>
                    
                ))}
                </Row>
                </Container>
                {
                //this.state.displayedFacts.map((tagName, idx) => (



                //     <Card style={{ width: '18rem' }} key={idx}>
                //         <Card.Body>
                //             <Card.Title>
                //                 <h3>{this.state.selectedTag}</h3>
                //             </Card.Title>
                //             <Card.Text>
                //                 {tagName.text}
                //             </Card.Text>
                //         </Card.Body>
                //         <Button>Add to Favorites!</Button>
                //     </Card>
                // ))
                }

            </>

        );
    }
};

export default withAuth0(FactsPage);