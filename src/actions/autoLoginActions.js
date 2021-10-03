import axios from 'axios'
import {
  AUTO_LOGIN_REQUEST,
  AUTO_LOGIN_SUCCESS,
  AUTO_LOGIN_FAIL,


} from '../constants/autoLoginConstants'



export const autoLoginTokenRequest = (email, token) => async (dispatch) => {
  try {
    dispatch({
      type: AUTO_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post(' /auth/token/',
      { 'email': email, 'token': token }, config
    )

    dispatch({
      type: AUTO_LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('jwt', JSON.stringify(data))
    window.location.reload();


  } catch (error) {
    dispatch({
      type: AUTO_LOGIN_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,

    })
  }
}
