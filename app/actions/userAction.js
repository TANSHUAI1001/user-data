export const REQUEST_USERS = "REQUEST_USERS"
export const RECEIVE_USERS = "RECEIVE_USERS"
export const UPDATE_USERS = "UPDATE_USERS"
export const INVALIDATE_USERS = "INVALIDATE_USERS"

const serverUrl = "http://127.0.0.1:8080"

export const requestUsers = id => ({
    type: REQUEST_USERS,
    id
})

export const receiveUsers = (id,json) => ({
    type: RECEIVE_USERS,
    id,
    data:json.users.map(user => user),
    receiveAt:Date.now()
})

export const fetchUsers = id => dispatch => {
    dispatch(requestUsers(id))
    return fetch(serverUrl+"/user/"+id)
        .then(response => response.json())
        .then(json => dispatch(receiveUsers(id, json)))
}

// const shouldFetchUsers = (state,id) => {
//     return state.didInvalidate
// }
