import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  REMOVE_SMURF_START,
  REMOVE_SMURF,
  REMOVE_SMURF_FAIL,
  ADD_SMURF,
  ADD_SMURF_FAIL,
} from '../actions';
// Be sure to import in all of the action types from `../actions`
// Reducers specify how the application's state changes in response to actions sent to the store.

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}



const rootReducer = (state=initialState, action) => {
  switch (action.type) {
      case GET_SMURF_START:
        return {
          ...state,
          fetchingSmurfs: true,
          error: null,
        }
      case GET_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false,
          error: null,
        } 
      case GET_SMURF_FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload,
        } 

      case REMOVE_SMURF_START:
        return {
          ...state,
          deletingSmurf: true,
          error: null
        }

      case REMOVE_SMURF: // This reducer creates a new array with the correct filtered from payload tasks
        // const newSmurfArr = state.smurfs.filter(smurf => {
        //   return smurf.id !== action.payload
        // })
        return {
          ...state,
          smurfs: action.payload,
          deletingSmurf: false,
          error: null
        }

      case REMOVE_SMURF_FAIL:
        return {
          ...state,
          deletingSmurf: false,
          error: action.payload
        }

      case ADD_SMURF:
        // const newSmurf = { 
        //   ...action.payload
        // }
        // const addSmurfArr = state.smurfs.concat(newSmurf)
        return {
          ...state,
          smurfs: action.payload,
          error: null
        }
      
      case ADD_SMURF_FAIL:
        return {
          ...state,
          error: action.payload
        }

      default:
          return state;
  }
}

export default rootReducer

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
