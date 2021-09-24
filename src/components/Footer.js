import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'


function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          Developer &copy; Eston
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
