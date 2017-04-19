import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DataList from "components/DataList"
import {fetchUsers} from "../actions/userAction"


class Users extends Component{
 
componentDidMount() {
    const { dispatch } = this.props
    let id = "all"
    dispatch(fetchUsers(id))
  }

  render(){
    const {data} = this.props;
    return (
      <div >
        <DataList data={data} />
      </div>
    )
  }
}

const mapStateToPorps = state =>{
  const{isFetching, didInvalidate,items:data} = state
  return {
    isFetching, didInvalidate,data
  }
}

export default connect(mapStateToPorps)(Users)