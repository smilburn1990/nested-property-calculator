import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import CheckBoxList from '../../components/CheckBoxList'

export default class PropertyCalculator extends Component {

    constructor (props) {
        super(props)   
    }

    componentWillMount() {
        const { propertyDataStatus, fetchPropertyData } = this.props
        if (propertyDataStatus === 'INITIAL') {
            fetchPropertyData()
        }
    }

    renderComponents() {
        return (
            <div>
                <CheckBoxList
                    propertyData={this.props.propertyData}
                    input='1100'
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
