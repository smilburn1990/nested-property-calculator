import { connect } from 'react-redux';
import propertyDataActions from '../../actions/propertyDataActions'
import NestedCalculator from './NestedCalculator'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  
  const { propertyData: { propertyDataStatus, propertyData, error } } = state
  return Object.assign({}, ownProps, {
      propertyDataStatus,
      propertyData,
      fetchPropertyData,
      error
  })

  function fetchPropertyData () {
      const url = 'https://api.myjson.com/bins/93mq1'
      const method = 'GET'
      dispatch(propertyDataActions.loadPropertyData(url, method))
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NestedCalculator)