import axios from "../axios/axios";
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from "./types";
import jwt_decode from "jwt-decode";

//const ROOT_URL = 'http://localhost:3090'
//const credentials = { usernameOrEmail: "kishore20", password: "secret" };
export function signinUser({ email, password }) {
  const credentials = { usernameOrEmail: email, password: password };

  return function(dispatch) {
    // submit email and password to server
    //const request = axios.post(`auth/signin`, { email, password });
    const request = axios.post(`auth/signin`, credentials);
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
  };
}

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
  return function(dispatch) {
    axios
      .post(`auth/signup`, credentials)
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
