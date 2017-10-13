class PropertyDataReducers {

    propertyDataRequested (state, action) {
        const nextState = Object.assign({}, state, {
            propertyDataStatus: 'LOADING'
        })
        return nextState
    }

    propertyDataResolved (state, action) {
        const { content } = action
        const nextState = Object.assign({}, state, {
            propertyDataStatus: 'READY',
            propertyData
        })
        return nextState
    }
    
    propertyDataRequestFailed (state, action) {
        const { error } = action
        const nextState = Object.assign({}, state, {
            propertyDataStatus: 'ERROR',
            error
        })
        return nextState
    }
}

export default new PropertyDataReducers()