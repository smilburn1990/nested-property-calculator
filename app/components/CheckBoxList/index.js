import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

export default class CheckBoxList extends Component {

    constructor (props) {
        super(props)   
        this.state = {
            chosen: [],
            prices: [],
            ids: [],
            total: 0,
            sum: 0
        }
    }

    handleChange(area, event) {
        this.state.chosen.push({id: event.target.id, value: Math.ceil(event.target.value / area)})
        let prices = [...new Set(this.state.chosen.map(sort => sort.value))]
        let total = prices.reduce((a, b) => a + b, 0)
        let ids = this.state.ids.includes(event.target.id) ? this.state.ids.splice(event.target.id, 1) : this.state.ids.push(event.target.id)
        let sum = total / ids.length * this.props.input
        

        this.setState({prices, ids, total, sum})
        console.log(this.state)
    }

        // handleChange(event) {
    //     let checked = this.state.checked
    //     let id = parseInt(event.target.id)
    //     let value = parseInt(event.target.value)
    //     let input = parseInt(this.props.input)

    //     checked.includes(id) ? checked.splice(id, 1) : checked.push(id)

    //     this.setState({
    //         value: (this.state.value += value / checked.length), 
    //         checked: checked.sort()
    //     })
    // }

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
                            value={data.price}
                            style={Object.assign({},
                                styles.input.default,
                                this.state.ids.includes(parseInt(index)) && styles.input.focus
                            )}
                            onChange={this.handleChange.bind(this, data.floor_area)}
                        />
                        <span style={styles.text}>{data.address}</span>
                    </label>
                )}
                <span>{`Estimated price: £${this.state.sum}`}</span>
            </div>
        )
    }
}

