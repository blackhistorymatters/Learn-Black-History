import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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

    // createFact = async (factPeople, factText, factSource) => {
    //   if (this.props.auth0.isAuthenticated) {
    //     const res = await this.props.auth0.getIdTokenClaims();
    //     const jwt = res.__raw;
    //     console.log("jwt: ", jwt);
    //     let newFact = {
    //       people: factPeople,
    //       text: factText,
    //       source: factSource,
    //     }
    //     console.log('New fact being created (location factspage.js) FROM FORM unless otherwise specified', newFact);
    //     const config = {
    //       headers: { "Authorization": `Bearer ${jwt}` },
    //       params: { email: this.props.auth0.user.email },
    //       method: 'post',
    //       baseURL: process.env.REACT_APP_SERVER,
    //       url: `/userfacts`,
    //       data: newFact
    //     }
    //     const createResponse = await axios(config);
    //     console.log(createResponse.data);
    //     let newFavArr = this.state.userFavArr;
    //     newFavArr.push(newFact);
    //     this.setState({ userFavArr: newFavArr })
    //   } else {
    //     console.error("Invalid authentification.")
    //   }
    // }

    // personFactFavorite = async (fact) => {
    //   console.log('New fact being created by FAVORITING', fact);
    //   await this.createFact(fact.people, fact.text, fact.source);
    // }

    render() {
        return (
            <>
                <Form>
                    <Form.Label>Category Selection</Form.Label>
                    <Form.Select onChange={this.handleTagChange} >
                        <option value="none">Make a Selection</option>
                        {this.state.tagList.map((tag, idx) => (

                            <option value={tag.name}>{this.state.tagList[idx].name}</option>

                        ))}
                    </Form.Select>
                </Form>
                <Form>
                    <Form.Label>Person Selection</Form.Label>
                    <Form.Select onChange={this.handlePeopleChange}>
                        <option value="none">Make a Selection</option>
                        {this.state.peopleList.map((person, idx) => (

                            <option value={person.name}>{this.state.peopleList[idx].name}</option>

                        ))}
                    </Form.Select>
                </Form>

                {this.state.displayedFacts.map((fact, idx) => (

                    <Card style={{ width: '18rem' }} key={idx}>
                        <Card.Body>
                            <Card.Title>
                                <h3>{fact.people ? fact.people[0] : this.state.selectedTag}</h3>
                            </Card.Title>
                            <Card.Text>
                                {fact.text}
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={() => this.props.createFactFromFavorite(fact)}>Add to Favorites!</Button>
                    </Card>
                ))}

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