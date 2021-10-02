import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import FormContainer from '../components/FormContainer'
import LoginOption from '../components/LoginOption'
import { loginTokenRequest } from '../actions/userActions'


function LoginScreen({ location, history }) {
  const [email, setEmail] = useState('')


  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLogin)

  const { error, loading, details,success } = userLogin


  const userToken = useSelector(state => state.userToken)

  const { jwt } = userToken


  useEffect(() => {
    if (jwt) {
      history.push(redirect)
    }
  }, [history, jwt, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginTokenRequest(email,))
    history.push(`/token/?email=${email}`)
    


  }

  return (
    <FormContainer>
      <LoginOption/>
      <h4>Sign In Using Email</h4>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
<br/>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>

      </Form>


      <Row className='py-3'>
        <Col>
          New Customer? <Link
            to={redirect ? `register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen