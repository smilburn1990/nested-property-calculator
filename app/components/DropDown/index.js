import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

export default class DropDown extends Component {
    constructor (props) {
        super(props)   
        this.state = {
            propertyData: this.props.propertyData
        }
    }

    render () {
        let styles = {
            container: {
                backgroundColor: 'blue',
                height: '200px',
                width: '100%'
            }
        }

        console.log(this.props.propertyData)

        return (
            <div style={styles.container}>
                <span>Hello World!</span>
            </div>
        )
    }
}
