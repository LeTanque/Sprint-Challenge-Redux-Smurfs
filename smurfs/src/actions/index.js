import axios from 'axios';

// Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

//  Be sure to export each action type so you can pull it into your reducer
export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';

export const REMOVE_SMURF_START = 'REMOVE_SMURF_START';
export const REMOVE_SMURF = 'REMOVE_SMURF';
export const REMOVE_SMURF_FAIL = 'REMOVE_SMURF_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

/*    Be sure to include action types for each type of action creator. Also, be sure to mind
      the "pending" states like, fetching, creating, updating and deleting.
      C - addSmurf
      R - getSmurfs
      U - updateSmurf
      D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURF_START
  })
  axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
          // console.log(response.data)
          dispatch({
              type: GET_SMURF_SUCCESS,
              payload: response.data,
          })
      })
      .catch(error => {
          dispatch({
              type: GET_SMURF_FAILURE,
              payload: error.message,
          })
      })
}

export const removeSmurf = (id) => dispatch => {
  dispatch({
    type: REMOVE_SMURF_START
  })
  axios
    .delete('http://localhost:3333/smurfs/'+id)
    .then(response => {
      dispatch({
        type: REMOVE_SMURF,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: REMOVE_SMURF_FAIL,
        payload: error.message, 
        id
      })
    });
}

export const addSmurf = (smurfObject) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs/', smurfObject)
    .then(response => {
      dispatch({
        type:ADD_SMURF,
        payload:response.data
      })
    })
    .catch(error=>{
      dispatch({
        type:ADD_SMURF_FAIL,
        payload:error.message
      })
    })
}


// export const removeSmurf = (smurfName) => {
//   return {
//       type: REMOVE_SMURF,
//       payload: smurfName
//   }
// }


// export const addSmurf = (smurfObject) => {
//   return {
//       type: ADD_SMURF,
//       payload: smurfObject
//   }
// }
