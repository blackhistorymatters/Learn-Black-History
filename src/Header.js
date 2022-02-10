import React from 'react'
import { Navbar, NavItem, NavLink} from 'react-bootstrap';

class Header extends React.Component {
    render() {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Learn Black History</Navbar.Brand>
          {this.props.user && (
            <>
              <NavItem><NavLink to="/" className="nav-link">Home</NavLink></NavItem>
              <NavItem><NavLink to="/profile" className="nav-link">Profile</NavLink></NavItem>
              {/* <Logout onLogout={this.props.onLogout} /> */}
            </>
          )}
        </Navbar>
      )
    }
  }
  
  export default Header;
  