import axios from "../axios/axios";
import { AUTH_ERROR, FETCH_MESSAGE } from "./types";
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchMessage() {
  let token = `Bearer ${localStorage.getItem("token")}`;
  return function(dispatch) {
    axios
      .get("/protected/hello", {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      })
      .catch(({ response }) => {
        if (response.data.status === 403) {
          dispatch({
            type: FETCH_MESSAGE,
            payload: "You are not authorized to access this page, contact admin"
          });
        }
      });
  };
}
