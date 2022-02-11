import React from "react";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {

  render() {

    if (!this.props.user) {

      return (
        <>
            <p>
                This is the login page!
            </p>
            {/* Login code goes here */}
        </>
      );

    } else {

        return <Redirect to="/profile" />
        
    }
  }
};

export default LoginPage;