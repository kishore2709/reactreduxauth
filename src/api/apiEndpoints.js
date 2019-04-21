import axios from "../axios/axios";
import { getSession } from '../utilities/permissions'

//const BASE_URL = process.env.REACT_APP_API || 'http://localhost:5000/api';
/* Have to set env in future
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_ZEEGUU_API_ENDPOINT_PROD
    : process.env.REACT_APP_ZEEGUU_API_ENDPOINT_DEV
*/
export async function apiGet(endpoint) {
  const params = { session: getSession() }
  const res = await axios.get(endpoint, { params })
  return res
}

export async function apiPost(endpoint, data, isForm) {
  const params = { session: getSession() }

  
  const res = await axios({
    method: 'post',
    url: endpoint,
    params: params,
    data: data
  })

  return res
}