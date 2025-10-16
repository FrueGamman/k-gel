import { apiUrl } from './env'
import { empireToken } from './enum'
import axios from 'axios'
import { ValidateUser } from './validate'

// const getToken = () => {
//     const token = typeof window !== 'undefined' ? localStorage.getItem(empireToken.USERTOKEN) : ''
//     return token
//   }
const api = axios.create({
    baseURL: apiUrl,
})

// api.interceptors.request.use(function (config:any) {
//     config.headers = {
//       'Content-Type': 'multipart/form-data; boundary=---boundary',
//       Accept: 'application/json',
//       'Authorization':`Bearer ${getToken()}`
//     };
//     return config
//   }, function (error) {

//     if(error.response.status === 401){
//       console.log(error.response.status)
//       ValidateUser.clearToken();
//       window.location.href = "/"; 
//     } 
//     console.log(error)
//     return Promise.reject(error);
//   });
  
//   api.interceptors.response.use(
//     response => {
//       return response;
//     },
//     error => {
//       const originalRequest = error.config;
//       if (error.response.status === 401 && !originalRequest._retry) {
//        ValidateUser.clearToken()
//        window.location.href= '/'
//       }
//       return Promise.reject(error);
//     }
//   );
  
  

export default api
