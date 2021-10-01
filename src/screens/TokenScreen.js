import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactCodeInput from 'react-verification-code-input';
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import FormContainer from '../components/FormContainer'
import { loginJwtTokenRequest } from '../actions/userActions'


function TokenScreen({ location, history }) {
  const [token, setToken] = useState('')

const email = location.search ? String(location.search.split('=')[1]) : null
console.log(email)
  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userToken = useSelector(state => state.userToken)

  const { error, loading, jwt } = userToken




  useEffect(() => {
    if (jwt) {
      history.push(redirect)
    }
  }, [history, jwt, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginJwtTokenRequest(email,token))



  }

  return (
    <FormContainer>
      <h1> </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='email'>
          <Form.Label>Enter 4 Digit Token</Form.Label>
          <Form.Control
            required
            type='number'
            value={token}
            onChange={(e) => setToken(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <br />
        <Button type='submit' variant='primary'>
          Submit
        </Button>

      </Form>



    </FormContainer>
  )
}

export default TokenScreen