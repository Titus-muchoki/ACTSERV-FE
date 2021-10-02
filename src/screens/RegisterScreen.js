import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import PhoneInput from 'react-phone-number-input/input'


function RegisterScreen({ location, history }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')


  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)

  const { error, loading, } = userRegister




  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(username, email, mobile))

  }



  return (
    <FormContainer>
      <h1>Register</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>


        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type='name'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

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


        <Form.Group controlId='mobile'>
          <Form.Label>Email Mobile Number</Form.Label>
          <Form.Control
            required
            type=''
            placeholder='Enter mobile number in the forma (+254)'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></Form.Control>
        </Form.Group>

{/* 
        <Form.Group controlId='mobile'>
          <Form.Label>Enter Mobile Number (optional)</Form.Label>

          <PhoneInput
            className='form-control'
            country="KEN"
            value={mobile}
            onChange={setMobile} />

        </Form.Group> */}

        <br />
        
        <Button type='submit' variant='primary'>
          Register
        </Button>

      </Form>


      <Row className='py-3'>
        <Col>
          Have an account? <Link
            to={redirect ? `login?redirect=${redirect}` : '/login'}>
            Sign In
          </Link>
        </Col>
      </Row>

    </FormContainer>
  )
}

export default RegisterScreen