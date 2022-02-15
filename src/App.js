import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import LandingPage from './LandingPage';
import LoginButton from './LoginButton';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FactsPage from './FactsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      randomFactsArray: [{ people: ['Something broke'], text: 'Escape!' }],
      randomFact: { people: ['Fact is loading'], text: 'Please wait...' },
      userFactsArray: [{ people: 'Something is wrong', text: 'with userFactsArray...' }],
    }
  }

  getUserFacts = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("jwt: ", jwt);
      console.log('Facts being rendered (location app.js)',);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        params: { email: this.props.auth0.user.email },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/userfacts`
      }
      let newFactsArray = await axios(config);
      newFactsArray = newFactsArray.data;
      // if(!Array.isArray(newFactsArray)){
      //   newFactsArray = [newFactsArray];
      // }
      console.log('Got user facts: facts array: ', newFactsArray);
      await this.setState({userFactsArray: newFactsArray});
    } else {
      console.error("Invalid authentification.")
    }

  }

  removeFact = async (fact) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("jwt: ", jwt);
      console.log('Fact being removed (location app.js)', fact);
      const id = fact._id;
      let factsArray = this.state.userFactsArray;
      factsArray = this.state.userFactsArray.filter(f => f._id !== id);
      this.setState({ userFactsArray: factsArray });
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        params: { email: this.props.auth0.user.email },
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/userfacts/${id}`
      }
      const removeResponse = await axios(config);
      console.log(removeResponse.data);
    } else {
      console.error("Invalid authentification.")
    }
  }

  createFact = async (factPeople, factText, factSource) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("jwt: ", jwt);
      let newFact = {
        people: factPeople,
        text: factText,
        source: factSource,
      }
      console.log('New fact being created (location app.js) FROM FORM unless otherwise specified', newFact);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        params: { email: this.props.auth0.user.email },
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/userfacts`,
        data: newFact
      }
      const createResponse = await axios(config);
      console.log(createResponse.data);
      let newArr = this.state.userFactsArray;
      newArr.push(newFact);
      this.setState({ userFactsArray: newArr })
    } else {
      console.error("Invalid authentification.")
    }
  }

  updateFact = async (factPeople, factText, factSource, fact) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("jwt: ", jwt);
      let updatedFact = {
        people: factPeople,
        text: factText,
        source: factSource,
        _id: fact._id
      }
      console.log('New fact being updated (location app.js)', updatedFact, fact);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        params: { email: this.props.auth0.user.email },
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/userfacts/${fact._id}`,
        data: updatedFact
      }
      const updateResponse = await axios(config);
      console.log('updateResponse: ', updateResponse);
      let updatedUserFacts = this.state.userFactsArray.map(f => f._id === fact._id ? updatedFact : f)
      this.setState({ userFactsArray: updatedUserFacts });
    } else {
      console.error("Invalid authentification.")
    }
  }

  personFactFavorite = async (fact) => {
    console.log('New fact being created by FAVORITING', fact);
    await this.createFact(fact.people, fact.text, fact.source);
  }

  async componentDidMount() {
    console.log(this.props);
    console.log("APP.js component did mount");

    const config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/facts'
    };

    const factsResponse = await axios(config);
    console.log(factsResponse.data);

    await this.setState({ randomFactsArray: factsResponse.data.Results });

    console.log('App.js RandomFactsArray', this.state.randomFactsArray);

    this.generateRandomFact();

    this.getUserFacts();

  }

  generateRandomFact = async () => {
    console.log('Generate random fact was hit on app.js');
    console.log('randomFactsArray: ', this.state.randomFactsArray)
    this.setState({ randomFact: this.state.randomFactsArray[Math.floor(Math.random() * this.state.randomFactsArray.length)] })

    // if (this.props.auth0.isAuthenticated) {

    //   const res = await this.props.auth0.getIdTokenClaims();
    //   const jwt = res.__raw;
    //   console.log("jwt: ", jwt);
    // }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }


  //Routing and rendering/parenting pages, passing props and methods to them
  render() {
    return (
      <>
        <Router>
          <Header user={this.props.auth0.isAuthenticated} logoutHandler={this.logoutHandler} loginHandler={this.loginHandler} />

          <Switch>
            <Route exact path='/'>
              <LandingPage randomFactsArray={this.state.randomFactsArray} generateRandomFact={this.generateRandomFact} randomFact={this.state.randomFact} />
              {/* <LoginButton /> */}
              {/* <LogoutButton /> */}
            </Route>
            <Route exact path="/profile" >
              {/* {this.state.user ? <ProfilePage user={this.state.user} /> : <Redirect to="/" />} */}
              <ProfilePage user={this.state.user} randomFactsArray={this.state.randomFactsArray} createFact={this.createFact} getUserFacts={this.getUserFacts} removeFact={this.removeFact} userFactsArray={this.state.userFactsArray} updateFact = {this.updateFact}/>

            </Route>
            <Route exact path="/about" >
              <AboutPage />
            </Route>
            <Route exact path="/facts" >
              <FactsPage user={this.state.user} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
