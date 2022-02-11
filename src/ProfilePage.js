import React from "react";
import { Redirect } from "react-router-dom";

class ProfilePage extends React.Component {

  render() {

    if (this.props.user) {

      return (
        <>
          <h2>{this.props.user.username}</h2>
          <p>{this.props.user.email}</p>
          <p>
                This is the profile page!
          </p>
          {/* TODO: add stuff from the wireframe, above is filler */}
        </>
      );

    } else {
      return <Redirect to="/login" />
    }
  }
};

export default ProfilePage;