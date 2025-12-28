import { legacy_createStore, combineReducers, compose } from 'redux'

import { adminReducer } from './admin/reducer'

export const rootReducer = combineReducers({
    adminManager: adminReducer
})

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composer())