class PropertyDataReducers {

    constructor () {
        this.calculateTotal = this.calculateTotal.bind(this)
    }

    propertyDataRequested (state, action) {
        const nextState = Object.assign({}, state, {
            propertyDataStatus: 'LOADING'
        })
        return nextState
    }

    propertyDataResolved (state, action) {
        const { propertyData } = action
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

    addProperty (state, action) {
        const { propertyData } = state
        
        const nextPropertyData = propertyData
            .map((property, index) => {
                if (property.address === action.property.address) {
                    return Object.assign({}, property, { selected: true })
                }
                else {
                    return property
                }
            })

        const total = this.calculateTotal(nextPropertyData)
        const nextState = Object.assign({}, state, {
            propertyData: nextPropertyData,
            total
        })
        return nextState
    }

    removeProperty (state, action) {
        const { propertyData } = state

        const nextPropertyData = propertyData
            .map((property, index) => {
                if (property.address === action.property.address) {
                    return Object.assign({}, property, { selected: false })
                }
                else {
                    return property
                }
            })

        const total = this.calculateTotal(nextPropertyData)
        const nextState = Object.assign({}, state, {
            propertyData: nextPropertyData,
            total
        })
        return nextState
    }
    calculateTotal (nextPropertyData) {
        const selectedLength = nextPropertyData.filter((item, i) => { return item.selected; }).length

        return nextPropertyData
            .filter(property => property.selected)
            .reduce((sum, nextProperty) => {
                const { floor_area: floorArea, price } = nextProperty
                const propertyArea = Math.ceil((parseInt(price, 10) / parseInt(floorArea, 10)) / selectedLength)
                return sum + propertyArea
            }, 0)
    }
}

export default new PropertyDataReducers()