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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FactsPage from './FactsPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
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

  render() {
    return (
      <>
        <Router>
          <Header user={this.props.auth0.isAuthenticated} logoutHandler={this.logoutHandler} />

          <Switch>
            <Route exact path='/'>
              <LandingPage />
              <LoginButton />
              {/* <LogoutButton /> */}
            </Route>
            <Route exact path="/profile" >
              {/* {this.state.user ? <ProfilePage user={this.state.user} /> : <Redirect to="/" />} */}
              <ProfilePage user={this.state.user} />
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
