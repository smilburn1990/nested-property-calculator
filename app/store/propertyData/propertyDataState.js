import propertyDataReducers from '../../reducers/propertyDataReducers'

const initialState = {
    propertyDataStatus: 'INITIAL',
    propertyData: false,
    selectedProperties: [],
    total: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'PROPERTY_DATA_REQUESTED':
            return propertyDataReducers.propertyDataRequested(state, action)
        case 'PROPERTY_DATA_RESOLVED':
            return propertyDataReducers.propertyDataResolved(state, action)
        case 'PROPERTY_DATA_REQUEST_FAILED':
            return propertyDataReducers.propertyDataRequestFailed(state, action)
        case 'ADD_PROPERTY':
            return propertyDataReducers.addProperty(state, action)
        case 'REMOVE_PROPERTY':
            return propertyDataReducers.removeProperty(state, action)
        default:
            return state
    }
}
