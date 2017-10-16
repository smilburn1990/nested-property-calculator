import 'whatwg-fetch' 
class PropertyDataActions {

    loadPropertyData(url, method, apiKey = null) {
        return (dispatch) => {
            const requestedAction = this.propertyDataRequested()
            dispatch(requestedAction)
            return fetch(url, {method, headers: { 'x-api-key': apiKey }})
                .then(function(response) {
                    return response.json()
                })
                .then(function(json) {
                    if(json.errors) {
                        dispatch(this.propertyDataRequestFailed(json.errors))
                    } 
                    else {
                        dispatch(this.propertyDataResolved(json))
                    }
                }
                .bind(this))
                .catch (function(ex) {
                    dispatch(this.propertyDataRequestFailed(ex));
                }
                .bind(this))
        }
    }

    propertyDataRequested (propertyData) {
        return {
            type: 'PROPERTY_DATA_REQUESTED'
        }
    }

    propertyDataResolved (propertyData) {
        return {
            type: 'PROPERTY_DATA_RESOLVED',
            propertyData
        }
    }

    propertyDataRequestFailed (error) {
        return {
            type: 'PROPERTY_DATA_REQUEST_FAILED',
            error
        }
    }

}

export default new PropertyDataActions()