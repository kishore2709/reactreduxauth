import { apiPost } from './apiEndpoints';
import {API_CONSTANT_MAP}  from "./apiMap";
//endpoint, data, isForm
export function signinUser({ email, password }) {
  const credentials = { usernameOrEmail: email, password: password };
  const endPoint = API_CONSTANT_MAP.login;
    return apiPost({
      endpoint: endPoint,
      data: credentials,
      isForm: false
    })
  }; 