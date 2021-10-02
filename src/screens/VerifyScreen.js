import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import Loader from '../components/loader'
import Message from '../components/message'
import { emailVerifyRequest, } from '../actions/userActions'


function VerifyScreen({ location, history }) {

  const [message, setMessage] = useState('')

  const id = location.search ? String(location.search.split('=')[1]) : null
  const dispatch = useDispatch()


  const emailVerify = useSelector(state => state.emailVerify)

  const { error, loading, details:verifyDetails } = emailVerify

  useEffect(() => {
    dispatch(emailVerifyRequest(id))
    setMessage(verifyDetails)
  
  }, [dispatch,history,])

  return (
    <div>
{message && <Message variant='danger'>{message}</Message>}
{error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <h5>You have Successfully Verified your email. Proceed to 
<strong>
      <Link
            to={history.push('/login')}>
               Sign In
          </Link>
          </strong>
      </h5>
    </div>
  )
}

export default VerifyScreen
