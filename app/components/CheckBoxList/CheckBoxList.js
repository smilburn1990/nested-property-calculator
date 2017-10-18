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
                    borderRadius: this.props.borderRadius ||'0',
                    border: this.props.border || '0.1rem solid ##999999',
                    WebkitAppearance: this.props.appearance || 'none',
                    width: this.props.width || '1.375rem',
                    height: this.props.height ||'1.375rem',
                    cursor: 'pointer',
                    backgroundSize: '0%',
                    display: this.props.display || 'block',
                    verticalAlign: 'top',
                    textDecoration: 'none',
                    boxShadow: 'none',
                    outline: 'none'
                },
                focus: {
                    backgroundSize: this.props.backgroundSize || '100%',
                    backgroundPosition: this.props.backgroundPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    border: '0.1rem solid',
                    backgroundColor: this.props.focusbackgroundColor || '#3278eb'
                }
            },
            label: {
                fontSize: this.props.fontSize || '0.875rem',
                fontWeight: this.props.fontWeight || 'normal',
                color: this.props.textColor || '#666666',
                margin: this.props.margin || 0,
                cursor: 'pointer',
                display: 'flex',
                verticalAlign: 'top'
            },
            text: {
                lineHeight: this.props.lineHeight || '1.375rem',
                color: this.props.textColor || '#666666',
                fontWeight: this.props.fontWeight || 'normal',
            }
        }

        return (
            <div style={styles.container}>
                <h1>Property Calculator</h1>
                {this.props.propertyData.map((data, index) => 
                    <label style={styles.label} key={index}>
                        <input
                            type='checkbox'
                            id={index}
                            name={data.address}
                            value={data.price}
                            checked={data.selected}
                            style={Object.assign({},
                                styles.input.default,
                                data.selected && styles.input.focus
                            )}
                            onChange={this.handleChange.bind(this, data)}
                        />
                        <span style={styles.text}>{data.address}</span>
                    </label>
                )}
                <span>{`Estimated price: £${this.props.total}`}</span>
            </div>
        )
    }
}

