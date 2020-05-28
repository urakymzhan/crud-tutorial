import { combineReducers } from 'redux';
import { crudReducers } from './app'
import {modalReducers } from './employee'

 const rootReducer = combineReducers({
    crudReducers,
    modalReducers
})

export default rootReducer;
