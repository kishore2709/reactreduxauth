import { apiPost } from './apiEndpoints';
import {API_CONSTANT_MAP}  from "./apiMap";
import jwt_decode from "jwt-decode";
//endpoint, data, isForm
 const AUTH_USER = 'auth_user';
 const UNAUTH_USER = 'unauth_user';
 const AUTH_ERROR = 'auth_error';
 export function signinUser({ email, password }) {
  const credentials = { usernameOrEmail: email, password: password };
  const endPoint = API_CONSTANT_MAP.login;
  const request = apiPost(endPoint, credentials, false)
    return function(dispatch) {
      console.log("response.data");
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

export function signoutUser() {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER
  };
}

export function signupUser({
  name,
  email,
  username,
  password,
  passwordConfirmation
}) {
  const credentials = {
    name: name,
    email: email,
    username: username,
    password: password,
    passwordConfirmation: passwordConfirmation
  };
  const endPoint = API_CONSTANT_MAP.signup;
  const request = apiPost({
      endpoint: endPoint,
      data: credentials,
      isForm: false
    })
  return function(dispatch) {
    request
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", response.data.token);
      })
      .catch(({ response }) => {
        dispatch(authError(response.data.error));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
