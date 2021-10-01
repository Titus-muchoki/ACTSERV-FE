import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,

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
