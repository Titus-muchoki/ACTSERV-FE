import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,

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



export const loginJwtTokenRequest = (email, token) => async (dispatch) => {
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
      { 'email': email, 'token': token }, config
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



export const register = (username, email, mobile) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post('http://127.0.0.1:8000/api/users/register/',
      { 'username': username, 'email': email, 'mobile': mobile }, config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })




  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,

    })
  }
}


export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST
    })

    const {
      userToken: { jwt },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${jwt.access}`
      }
    }

    const { data } = await axios.get(`http://127.0.0.1:8000/api/users/details/`,
      config
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
    })


    localStorage.setItem('user', JSON.stringify(data))



  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,

    })
  }
}


