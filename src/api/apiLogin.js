import { apiPost } from './apiEndpoints';
import {API_CONSTANT_MAP}  from "./apiMap";
import {AUTH_USER,AUTH_ERROR} from "../actions/types";
import jwt_decode from "jwt-decode";
//endpoint, data, isForm
export function signinUser({ email, password }) {
  const credentials = { usernameOrEmail: email, password: password };
  const endPoint = API_CONSTANT_MAP.login;
  const request = apiPost({
      endpoint: endPoint,
      data: credentials,
      isForm: false
    })
    return function(dispatch) {
    request
      .then(response => {
        // -Save the JWT token
        console.log("response.data");

        console.log(response.data);
        localStorage.setItem("token", response.data.accessToken);
        // -if request is good, we need to update state to indicate user is authenticated
        // Decode token to get user data
        const decoded = jwt_decode(response.data.accessToken);
        dispatch({ type: AUTH_USER, payload: decoded });
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError("bad login info"));
      });
  }
};
  
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
