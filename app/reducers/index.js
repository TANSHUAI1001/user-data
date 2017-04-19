import {combineReducers} from 'redux'
import {
  REQUEST_USERS, RECEIVE_USERS, UPDATE_USERS, INVALIDATE_USERS
} from "../actions/userAction"

const data = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_USERS:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.data,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default data