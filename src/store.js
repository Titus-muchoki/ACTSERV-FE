import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userTokenReducer,
  userRegisterReducer,
  userDetailsReducer,
  emailVerifyReducer
} from './reducers/userReducer'

const reducer = combineReducers({

  userLogin: userLoginReducer,
  userToken: userTokenReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  emailVerify:emailVerifyReducer

})


const jwtFromStorage = localStorage.getItem('jwt') ?
  JSON.parse(localStorage.getItem('jwt')) : null

const userFromStorage = localStorage.getItem('user') ?
  JSON.parse(localStorage.getItem('user')) : null

const initialState = {
  userToken: { jwt: jwtFromStorage },
  userDetails: { user: userFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store