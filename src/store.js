import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userTokenReducer,
  userRegisterReducer
} from './reducers/userReducer'

const reducer = combineReducers({

  userLogin: userLoginReducer,
  userToken:userTokenReducer,
  userRegister: userRegisterReducer,
})


const jwtFromStorage = localStorage.getItem('jwt') ?
  JSON.parse(localStorage.getItem('jwt')) : null

const initialState = {
  userToken: { jwt: jwtFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store