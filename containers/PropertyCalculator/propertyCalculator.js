import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DropDown from '../../components/DropDown'

export default class PropertyCalculator extends Component {

    constructor (props) {
        super(props)   
    }

    componentWillMount () {
        const { propertyDataStatus, fetchPropertyData } = this.props
        if (contentStatus === 'INITIAL') {
            fetchPropertyData()
            console.log(this.props)
        }
    }

    renderComponents () {
        return (
            <div>
                <h1>Hello World</h1>
                <DropDown
                    propertyData={this.props.propertyData}
                />
            </div>
        )
    }

    render() {
        const { propertyDataStatus, error } = this.props
        
        if(propertyDataStatus == 'INITIAL') {
            return (
                <div></div>
            )
        }

        if(propertyDataStatus == 'LOADING') {
            return (
                <div>LOADING...</div>
            )
        }

        if(propertyDataStatus == 'ERROR') {
            console.log(error)
        }

        if(propertyDataStatus !== 'LOADING') {
            return (
                <div>
                    {this.renderComponents()}
                </div>   
            )
        }
    }
}
