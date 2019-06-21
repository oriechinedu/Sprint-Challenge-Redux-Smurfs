/*
  Be sure to import in all of the action types from `../actions`
*/
import { SUCCESS, FAILURE, REQUESTING } from "../actions";
import { bindActionCreators } from "redux";

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

const initialState = {
  smurfs: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING:
      return {
        ...state,
        isLoading: true
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
