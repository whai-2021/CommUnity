import React from 'react'
import PageLinks from './PageLinks'
import { connect } from 'react-redux'

// get redux information by console.logging props.user, props.region and props.userGroups
function WhatsHappening (props) {
  console.log(props)
  return (
    <>
      <PageLinks />
    </>
  )
}

function mapStateToProps (state) {
  return {
    region: state.region,
    user: state.user,
    userGroups: state.userGroups
  }
}

export default connect(mapStateToProps)(WhatsHappening)
