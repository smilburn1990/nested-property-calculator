import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

export default class CheckBoxList extends Component {

    handleChange(data, event) {
        const { addProperty, removeProperty } = this.props
        if (data.selected) {
            removeProperty(data)
        } else {
            addProperty(data)
        }
    }

    render () {
        let styles = {
            container: {
                display: 'inline'
            },
            input: {
                default: {
                    margin: this.props.inputMargin || '0 0.75rem 0.75rem 0',
                    borderRadius: this.props.inputBorderRadius ||'0',
                    border: this.props.inputBorder || '0.1rem solid #999999',
                    width: this.props.inputWidth || '1.275rem',
                    height: this.props.inputHeight ||'1.275rem',
                    WebkitAppearance: this.props.inputAppearance || 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    boxShadow: 'none',
                    outline: 'none'
                },
                focus: {
                    backgroundColor: this.props.focusBackgroundColor || '#999999'
                }
            },
            label: {
                fontSize: this.props.labelFontSize || '0.875rem',
                color: this.props.labelTextColor || '#666666',
                display: 'flex'
            }
        }

        return (
            <div style={styles.container}>
                <h1>Property Calculator</h1>
                {this.props.propertyData.map((data, index) => 
                    <label style={styles.label} key={index}>
                        <input
                            type='checkbox'
                            checked={data.selected}
                            style={Object.assign({},
                                styles.input.default,
                                data.selected && styles.input.focus
                            )}
                            onChange={this.handleChange.bind(this, data)}
                        />
                        <span>{data.address}</span>
                    </label>
                )}
                <span style={styles.total}>{`Estimated price: £${this.props.total}`}</span>
            </div>
        )
    }
}

