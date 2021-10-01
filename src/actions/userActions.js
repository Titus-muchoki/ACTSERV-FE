import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,



  USER_TOKEN_REQUEST ,
  USER_TOKEN_SUCCESS ,
  USER_TOKEN_FAIL,

} from '../constants/userConstants'



export const loginTokenRequest = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post('http://127.0.0.1:8000/auth/email/',
      { 'email': email }, config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,

    })
  }
}



export const loginJwtTokenRequest = (email,token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_TOKEN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post('http://127.0.0.1:8000/auth/token/',
      {'email':email, 'token': token }, config
    )

    dispatch({
      type: USER_TOKEN_SUCCESS,
      payload: data
    })
    localStorage.setItem('jwt', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_TOKEN_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,

    })
  }
}
