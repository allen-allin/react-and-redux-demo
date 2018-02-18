import {counter} from './counter.redux'
import {auth} from './auth.redux'
import {combineReducers} from 'redux'

export default combineReducers({counter,auth})