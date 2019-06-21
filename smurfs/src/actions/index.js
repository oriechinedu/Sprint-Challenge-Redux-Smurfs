import axios from "axios";

export const REQUESTING = "REQUESTING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const BASE_URL = "http://localhost:3333/smurfs";
const requesting = () => {
  return { type: REQUESTING };
};

const requestFailed = payload => {
  return { type: FAILURE, payload };
};
const requestSucceeded = payload => {
  return { type: SUCCESS, payload };
};
export const fetchSmurfs = () => dispatch => {
  dispatch(requesting());
  return axios
    .get(BASE_URL)
    .then(res => {
      console.log(res.data);
      dispatch(requestSucceeded(res.data));
    })
    .catch(err => {
      dispatch(requestFailed(err.message));
    });
};
