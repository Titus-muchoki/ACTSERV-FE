import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import { getUserDetails, } from '../actions/userActions'
function HomeScreen({location,history}) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/login'

  const userToken = useSelector(state => state.userToken)

  const { jwt } = userToken

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails


  useEffect(() => {

    if (!jwt) {
      history.push('/login')
    }
    else{
    if(!user){
      dispatch(getUserDetails())
       }
  }  
  }, [dispatch, history, user,])
  return (
    <div>
  {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
{!user ?

(<h1></h1>)



:(

  <><h1 className='text-center'>Welcome to My App {user.username}</h1>      <p
  className='text-center'
  >
Your email on this app is  {user.email} 
  </p>
<p className='text-center'> {user.mobile?(<p>Yout mobile number is {user.mobile}</p>):(<p>You have not given your mobile number yet</p>)}
</p> </>
)}




      
    </div>
  )
}

export default HomeScreen
