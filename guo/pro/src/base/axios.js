import axios from  'axios'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
//   consolse.log('请求拦截器')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data

  console.log('响应拦截器',response)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default axios