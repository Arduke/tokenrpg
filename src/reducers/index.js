import {combineReducers} from 'redux';
import crudReducer from './crudReducer'
import charSelectReducer from './charSelectReducer'

export default combineReducers ({
    charList: crudReducer,
    charSelect: charSelectReducer,
})