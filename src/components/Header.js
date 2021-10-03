import React from 'react'
import { Route , withRouter} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


function Header() {
  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    window.location.reload(false);
  }


  return (

    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >ACTSERV</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
          

              {user ? (
                <NavDropdown title={user.username} id='username'>
             
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>


                </NavDropdown>
              ) :

                (<LinkContainer to='/login'>
                  <Nav.Link ><i className="fas fa-user"></i> Login</Nav.Link>
                </LinkContainer >)
              }

  
            </Nav>


          </Navbar.Collapse>
        </Container>



      </Navbar></header>

  )
}

export default withRouter( Header)