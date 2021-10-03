import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import FormContainer from '../components/FormContainer'
import { loginMobileJwtTokenRequest } from '../actions/userActions'
function MobileTokenScreen({ location, history }) {
  const [token, setToken] = useState('')
  
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const mobile = location.search ? String(location.search.split('=')[1]) : null

  const dispatch = useDispatch()


  const mobileToken = useSelector(state => state.mobileToken)

  const { error, loading, jwt } = mobileToken


  useEffect(() => {
    if (jwt) {
      window.location.href = "http://localhost:3000/";
    }
  }, [history, jwt, redirect])


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginMobileJwtTokenRequest(mobile, token))




  }

  return (
    <FormContainer>
      <h1> </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='token'>
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

export default MobileTokenScreen
