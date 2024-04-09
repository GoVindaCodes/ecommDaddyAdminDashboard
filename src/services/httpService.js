
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const instance = axios.create({
//   baseURL: `http://localhost:4000`,
//   // baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
//   timeout: 50000,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjBiOTAwYjE5ODg3ZmY1M2ZiODhmZGQiLCJpYXQiOjE3MTIyOTgwMjYsImV4cCI6MTcxMjMzMDQyNn0.ABoqL6yEjaLiHLa9DAafJKgdkf0rnTEwwCwvBCIcr-c';


//   // just testingg uncomments it today for getting the token from frontend 

//   // let adminInfo;
//   // if (Cookies.get('adminInfo')) {
//   //   adminInfo = JSON.parse(Cookies.get('adminInfo'));
//   // }

//   // let company;

//   // if (Cookies.get('company')) {
//   //   company = Cookies.get('company');
//   // }

//   // console.log('Admin Http Services Cookie Read : ' + company);
//   // let companyName = JSON.stringify(company);
//   // console.log("hi" + companyName)

//   //   return {
//   //     ...config,
//   //     headers: {
//   //       authorization: adminInfo ? `Bearer ${adminInfo.token}` : null,
//   //       company: company ? company : null,
//   //     },
//   //   };
//   // });

//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       Authorization: `Bearer ${token}`,
//     },
//   };
// });

// const responseBody = (response) => response.data;

// const requests = {
//   get: (url, body, headers) =>
//     instance.get(url, body, headers).then(responseBody),

//   post: (url, body) => instance.post(url, body).then(responseBody),

//   put: (url, body, headers) =>
//     instance.put(url, body, headers).then(responseBody),

//   patch: (url, body) => instance.patch(url, body).then(responseBody),

//   delete: (url, body) => instance.delete(url, body).then(responseBody),
// };

// export default requests;


// //  Original Logics
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const instance = axios.create({
//   // baseURL: `http://localhost:4000`,
//   baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
//   timeout: 50000,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   let adminInfo;
//   if (Cookies.get('adminInfo')) {
//     adminInfo = JSON.parse(Cookies.get('adminInfo'));
//   }

//   let company;

//   if (Cookies.get('company')) {
//     company = Cookies.get('company');
//   }

//   // console.log('Admin Http Services Cookie Read : ' + company);
//   // let companyName = JSON.stringify(company);
//   // console.log("hi" + companyName)
//   return {
//     ...config,
//     headers: {
//       authorization: adminInfo ? `Bearer ${adminInfo.token}` : null,
//       company: company ? company : null,
//     },
//   };
// });

// const responseBody = (response) => response.data;

// const requests = {
//   get: (url, body, headers) =>
//     instance.get(url, body, headers).then(responseBody),

//   post: (url, body) => instance.post(url, body).then(responseBody),

//   put: (url, body, headers) =>
//     instance.put(url, body, headers).then(responseBody),

//   patch: (url, body) => instance.patch(url, body).then(responseBody),

//   delete: (url, body) => instance.delete(url, body).then(responseBody),
// };

// export default requests;



// Just Testingg
// And Working ones as wellllll heres
import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let adminInfo = Cookies.get('adminInfo') ? JSON.parse(Cookies.get('adminInfo')) : null;
  // console.log("AdminInfo", adminInfo);

  let accessToken = adminInfo ? adminInfo.accessToken : null;

  let company = Cookies.get('company');

  return {
    ...config,
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : null,
      company: company ? company : null,
      ...config.headers, // Preserve existing headers
    },
  };
});


const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;
