import  axios from 'axios'

const BASE_URL = 'http://localhost:8044/'
const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;
export default axiosInstance;