import React from 'react';
import ScheduleTable from './ScheduleTable.jsx'
import { connect } from 'react-redux'

/**
 * Component showing table with data or info div if search wasnt prompt yet
 */
function Schedule(props) {
  if (props.states.startingCoordinates.length > 0 &&
    props.states.destinationCoordinates.length > 0) {
    return (
      <ScheduleTable data={props} />
    )
  } else {
    return (
      <div className="info">
        Insert starting point and destination
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    states: state
  }
}

export default connect(mapStateToProps)(Schedule);