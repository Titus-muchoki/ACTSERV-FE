import { 
  USER_LOGIN_REQUEST ,
  USER_LOGIN_SUCCESS ,
  USER_LOGIN_FAIL,
   USER_LOGOUT ,

   USER_TOKEN_REQUEST ,
   USER_TOKEN_SUCCESS ,
   USER_TOKEN_FAIL,

 } from '../constants/userConstants'





 export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }

    case USER_LOGIN_SUCCESS:
      return { loading: false, success:true,details: action.payload }

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return {}

    default:
      return state



  }
}


export const userTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TOKEN_REQUEST:
      return { loading: true }

    case USER_TOKEN_SUCCESS:
      return { loading: false, jwt: action.payload }

    case USER_TOKEN_FAIL:
      return { loading: false, error: action.payload }

   

    default:
      return state



  }
}