import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';

function mapStateToProps(state, props) {
    return {

    }
}

class DropDown extends Component {

    constructor (props) {
        super(props)   
        this.state = {
            propertyData: this.props.selectpropertyData,
            selectValue: this.props.selectionValue
        }
    }

	chooseSelection(event) {
		let dispatch = this.props.selectdispatch
		this.setState({value: event.target.value}, () => {
			let selection = this.state.value
        	dispatch(storeDropActions(selection))
		})
    }

    render () {
        let styles = {
            container: {
                width: this.props.containerWidth || '100%'
            },

            select: {
				padding: this.props.selectPadding || '0rem 1.5rem',
				margin: this.props.selectMargin || '0',
				borderTop: this.props.selectBorderTop || 'none',
				borderRight: this.props.selectBorderRight || 'none',
				borderBottom: this.props.selectBorderBottom || 'none',
				borderLeft: this.props.selectBorderLeft || 'none',
				borderColor: this.props.selectBorderColor || '#bbbbbb',
				width: this.props.selectWidth || 'auto',
				color: this.props.selectTextColor || '#666666',
				backgroundColor: this.props.selectBackgrounColor || 'transparent',
				fontSize: this.props.selectFontSize || '1rem',
				WebkitAppearance: 'none',
				MozAppearance: 'none',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: this.props.selectBackgroundPosition || 'right 0 top 50%',
				textAlign: 'center',
				cursor: 'pointer',
				outline: 'none',
				borderRadius: 0
            }
        }

        return (
            <div style={styles.container}>
                <select style={styles.select} onChange={event => this.chooseSelection(event)} value={this.state.value}>
                    {this.props.selectoptions.map(function(drop, index){
                        return <option value={drop.value} key={index}>{drop.text}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DropDown)
