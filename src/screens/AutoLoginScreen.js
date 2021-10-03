import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import { autoLoginTokenRequest  } from '../actions/autoLoginActions'
import { Redirect } from 'react-router'


function AutoLoginScreen({ location, history }) {

  const email = String(JSON.parse(localStorage.getItem('email')) )
  const token = location.search ? String(location.search.split('=')[1]) : null

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userToken = useSelector(state => state.userToken)

  const { error, loading, jwt } = userToken




  useEffect(() => {
    if (jwt) {
      history.push(redirect)
    }else{
      dispatch(autoLoginTokenRequest(email,token))
    }
  }, [history, jwt, redirect])

 
  return (
    <div>
      <h1> </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      
    </div>
  )
}

export default AutoLoginScreen