import propertyDataReducers from '../../reducers/propertyDataReducers'

const initialState = {
    propertyDataStatus: 'INITIAL',
    propertyData: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'PROPERTY_DATA_REQUESTED':
            return propertyDataReducers.propertyDataRequested(state, action)
        case 'PROPERTY_DATA_RESOLVED':
            return propertyDataReducers.propertyDataResolved(state, action)
        case 'PROPERTY_DATA_REQUEST_FAILED':
            return propertyDataReducers.propertyDataRequestFailed(state, action)
        default:
            return state
    }
}
