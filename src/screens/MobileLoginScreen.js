import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import FormContainer from '../components/FormContainer'
import LoginOption from '../components/LoginOption'
import { mobileLoginTokenRequest } from '../actions/userActions'


function LoginScreen({ location, history }) {
  const [mobile, setMobile] = useState('')


  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const mobileLogin = useSelector(state => state.mobileLogin)

  const { error, loading,success } = mobileLogin


  const userToken = useSelector(state => state.userToken)

  const { jwt } = userToken


  useEffect(() => {
    if (jwt) {
      history.push(redirect)
    }else if (success){
      history.push(`/mobiletoken/?mobile=${mobile}`)

    }
  }, [history, jwt, redirect,success,mobile])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(mobileLoginTokenRequest(mobile,))
    


  }

  return (
    <FormContainer>
      <LoginOption/>
      <h4>Sign In Using Mobile</h4>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

     
      <Form.Group controlId='mobile'>
          <Form.Label> Mobile Number</Form.Label>
          <Form.Control
            required
            type=''
            placeholder='Enter mobile number in the format (+254)'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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