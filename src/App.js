import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Profile from './ProfilePage';
import About from './AboutPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import FactsPage from './FactsPage';

class App extends React.Component{

  constructor(
    props
  ){
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

  render(){
    return(
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>
            <Route path="/profile" >
              {this.state.user ? <Profile user={this.state.user} /> : <Redirect to="/login" /> }
              <Profile user={this.state.user} />
            </Route>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/facts" >
              {this.state.user ? <FactsPage user={this.state.user} /> : <Redirect to="/login" /> }
            </Route>
            <Route path="/login">
              {this.state.user ? <Profile user={this.state.user} /> : <LoginPage onLogin={this.loginHandler} />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
