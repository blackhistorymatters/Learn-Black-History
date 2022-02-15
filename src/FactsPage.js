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
      factByTag: [],
      factByPerson: []
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
    this.setState({ factByTag: factTagResponse.data.Results })
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
    console.log(this.state.factByPerson)
    const factPersonResponse = await axios(config)
    this.setState({ factByPerson: factPersonResponse.data.Results })
    console.log('This is a person', this.state.factByPerson);
  }

    

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
      
      {this.state.factByPerson.map((person, idx) => (
          
         
          
          <Card style={{ width: '18rem' }} key={idx}>
              <Card.Body>
                <Card.Title>
                <h3>{person.people[0]}</h3>
                </Card.Title>
                <Card.Text>
                {person.text}
                </Card.Text>
              </Card.Body>
              <Button>Add to Favorites!</Button>
              </Card>
     ))}

{this.state.factByTag.map((tagName, idx) => (
          
         
          
          <Card style={{ width: '18rem' }} key={idx}>
              <Card.Body>
                <Card.Title>
                <h3>{this.state.selectedTag}</h3>
                </Card.Title>
                <Card.Text>
                {tagName.text}
                </Card.Text>
              </Card.Body>
              <Button>Add to Favorites!</Button>
              </Card>
     ))}

      </>
      
    );
  }
};

export default FactsPage;