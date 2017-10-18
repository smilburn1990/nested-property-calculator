import { connect } from 'react-redux'
import CheckBoxList from './CheckBoxList'
import propertyDataActions from '../../actions/propertyDataActions'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const { propertyData: { propertyData, total } } = state
  return Object.assign({}, ownProps, {
    propertyData,
    addProperty,
    removeProperty,
    total
  })

  function addProperty (property) {
      dispatch(propertyDataActions.addProperty(property))
  }
  function removeProperty (property) {
      dispatch(propertyDataActions.removeProperty(property))
  }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CheckBoxList)

