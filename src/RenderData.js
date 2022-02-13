import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class CreateData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      facts: []
    }
  }

  async componentDidMount() {
    console.log(this.props)
    if (this.props.auth0.isAuthenticated) {

      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      console.log("jwt: ", jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/facts'
      }

      const factsResponse = await axios(config);
      console.log(factsResponse.data);

      this.props.factsArrayHandler(factsResponse.data);

    }
  }
  render() {
    console.log(this.state);
    return (
      <>
        
      </>
    )
  }
}

export default withAuth0(CreateData);