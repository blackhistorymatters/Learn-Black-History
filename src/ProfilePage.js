import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import CreateData from './RenderData';

class ProfilePage extends React.Component {

  render() {
 
    if (this.props.auth0.user) {

      return (
        <>
          <h2 id="footer">{this.props.auth0.user.name}</h2>
          <p>{this.props.auth0.user.email}</p>
          <p>
                This is the profile page!
          </p>
             <CreateData />
             {/* TODO: add stuff from the wireframe, above is filler */}
        </>
      );

    } else {
      return <Redirect to="/login" />
    }
  }
};

export default withAuth0(ProfilePage);