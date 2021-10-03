import {
  AUTO_LOGIN_REQUEST,
  AUTO_LOGIN_SUCCESS,
  AUTO_LOGIN_FAIL,


} from '../constants/autoLoginConstants'




export const autoLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTO_LOGIN_REQUEST:
      return { loading: true }

    case AUTO_LOGIN_SUCCESS:
      return { loading: false, jwt: action.payload }

    case AUTO_LOGIN_FAIL:
      return { loading: false, error: action.payload }



    default:
      return state



  }
}