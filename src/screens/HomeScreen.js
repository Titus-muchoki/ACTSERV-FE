import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, } from '../actions/userActions'
function HomeScreen({history}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails


  useEffect(() => {
  
    if(!user.username ){
      dispatch(getUserDetails())
      setName(user.name)
      setEmail(user.email)
    }
    
  }, [dispatch, history, user,])
  return (
    <div>
      <h1 className='text-center'>Welcome to My App {user.username}</h1>

      <p
      className='text-center'
      >
Your email on this app is  {user.email} 
      </p>
<p className='text-center'> {user.mobile?(<p>Yout mobile number is {user.mobile}</p>):(<p>You have not given your mobile number yet</p>)}
  </p>
      
    </div>
  )
}

export default HomeScreen
