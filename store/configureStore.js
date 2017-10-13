import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import propertyData from './propertyData/PropertyDataState'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const middlewares = [thunk]

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
})

if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger')
    const logger = createLogger()
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const reducers = combineReducers({
    routing: routerReducer,
    propertyData
})

export default function configureStore (initialState) {
    return createStore(reducers, initialState, enhancer)
}