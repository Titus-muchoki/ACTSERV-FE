import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function LoginOption() {
  return (
    <div>
      <Nav className='justify-content-center mb-4'>
      <Nav.Item>
       

          <LinkContainer to='/login'>
            <Nav.Link>Email</Nav.Link>

          </LinkContainer>

        

      </Nav.Item>


      <Nav.Item>


          <LinkContainer to='/mobilelogin'>
            <Nav.Link>Mobile</Nav.Link>

          </LinkContainer>

        

      </Nav.Item>



     

    </Nav>
    </div>
  )
}

export default LoginOption
