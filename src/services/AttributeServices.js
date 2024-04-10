// // import { useState } from 'react';
// import requests from './httpService';
// // import languages from 'utils/languages';


// const AttributeServices = {

//   getAllAttributes: async ({ type, option, option1 }) => {
//     return requests.get(
//       `/attributes?type=${type}&option=${option}&option1=${option1}`
//     );
//   },

//   getShowingAttributes: async (body) => {
//     return requests.get('/attributes', body);
//     // return requests.get('/attributes/show', body);
//     // return { type: '1', option: '1', option1: '1' };
//     // return {};

//   },

//   addAttribute: async (body) => {
//     return requests.post('/attributes', body);
//     // return requests.post('/attributes/add', body);
//     // return {};

//   },

//   // addChildAttribute: async (id, body) => {
//   //   return requests.put(`/attributes/add/child/${id}`, body);
//   //   // return {};
//   // },

//   addAllAttributes: async (body) => {
//     return requests.post('/attributes/add/all', body);
//     // return {};
//     // try {
//     //   console.log("Adding language:", body);
//     //   await new Promise(resolve => setTimeout(resolve, 1000));
//     //   languages.push(body);
//     //   return { success: true, message: "Language added successfully" };
//     // } catch (error) {
//     //   return { success: false, message: "Failed to add language" };
//     // }
//   },

//   getAttributeById: async (id) => {
//     return requests.get(`/attributes/${id}`);
//     // return {};
//   },

//   // getChildAttributeById: async ({ id, ids }) => {
//   //   return requests.get(`/attributes/child/${id}/${ids}`);
//   // },

//   updateAttributes: async (id, body) => {
//     return requests.put(`/attributes/${id}`, body);
//   },

//   updateChildAttributes: async ({ id, ids }, body) => {
//     return requests.put(`/attributes/update/child/${ids}/${id}`, body);
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`/attributes/status/${id}`, body);
//   },

//   updateChildStatus: async (id, body) => {
//     return requests.put(`/attributes/status/child/${id}`, body);
//   },

//   deleteAttribute: async (id, body) => {
//     return requests.delete(`/attributes/${id}`, body);
//   },

//   deleteChildAttribute: async ({ id, ids }, body) => {
//     return requests.put(`/attributes/delete/child/${ids}/${id}`, body);
//   },

//   updateManyAttribute: async (body) => {
//     return requests.patch('/attributes/update/many', body);
//   },

//   updateManyChildAttribute: async (body) => {
//     return requests.patch('/attributes/update/child/many', body);
//   },

//   deleteManyAttribute: async (body) => {
//     console.log("datas : ", body)
//     return requests.patch('/attributes/delete/many', body);
//   },

//   deleteManyChildAttribute: async (body) => {
//     return requests.patch('/attributes/delete/child/many', body);
//   },
// };

// export default AttributeServices;


// for backend now avaible change it when needed


// import requests from './httpService';

// const AttributeServices = {
//   getAllAttributes: async ({ type, option, option1 }) => {
//     return requests.get(
//       // `/api/attributes?type=${type}&option=${option}&option1=${option1}
//       `/api/attributes`
//     );
//   },

//   getShowingAttributes: async () => {
//     return requests.get('/api/attributes/show');
//   },

//   addAttribute: async (body) => {
//     return requests.post('/api/attributes/add', body);
//   },

//   addAllAttributes: async (body) => {
//     return requests.post('/api/attributes/add/all', body);
//   },

//   getAttributeById: async (id) => {
//     return requests.get(`/api/attributes/${id}`);
//   },

//   updateAttributes: async (id, body) => {
//     return requests.put(`/api/attributes/${id}`, body);
//   },

//   updateChildAttributes: async ({ id, ids }, body) => {
//     return requests.put(`/api/attributes/update/child/${ids}/${id}`, body);
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`/api/attributes/status/${id}`, body);
//   },

//   deleteAttribute: async (id) => {
//     console.log(":id ", id)
//     return requests.delete(`/api/attributes/${id}`);
//   },

//   deleteChildAttribute: async ({ id, ids }, body) => {
//     return requests.put(`/api/attributes/delete/child/${ids}/${id}`, body);
//   },

//   updateManyAttribute: async (body) => {
//     return requests.patch('/api/attributes/update/many', body);
//   },

//   deleteManyAttribute: async (body) => {
//     console.log("idsssssssss : ", body)
//     return requests.delete('/api/attributes/delete/many', body);
//   },

//   updateManyChildAttribute: async (body) => {
//     return requests.patch('/api/attributes/delete/child/many', body);
//   },

//   deleteManyChildAttribute: async (body) => {
//     return requests.patch('/api/attributes/delete/child/many', body);
//   }
// };

// export default AttributeServices;



// // import { useState } from 'react';
// import requests from './httpService';
// // import languages from 'utils/languages';


// const AttributeServices = {

//   getAllAttributes: async ({ type, option, option1 }) => {
//     return requests.get(
//       `/attributes?type=${type}&option=${option}&option1=${option1}`
//     );
//   },

//   getShowingAttributes: async (body) => {
//     return requests.get('/attributes', body);
//     // return requests.get('/attributes/show', body);
//     // return { type: '1', option: '1', option1: '1' };
//     // return {};

//   },

//   addAttribute: async (body) => {
//     return requests.post('/attributes', body);
//     // return requests.post('/attributes/add', body);
//     // return {};

//   },

//   // addChildAttribute: async (id, body) => {
//   //   return requests.put(`/attributes/add/child/${id}`, body);
//   //   // return {};
//   // },

//   addAllAttributes: async (body) => {
//     return requests.post('/attributes/add/all', body);
//     // return {};
//     // try {
//     //   console.log("Adding language:", body);
//     //   await new Promise(resolve => setTimeout(resolve, 1000));
//     //   languages.push(body);
//     //   return { success: true, message: "Language added successfully" };
//     // } catch (error) {
//     //   return { success: false, message: "Failed to add language" };
//     // }
//   },

//   getAttributeById: async (id) => {
//     return requests.get(`/attributes/${id}`);
//     // return {};
//   },

//   // getChildAttributeById: async ({ id, ids }) => {
//   //   return requests.get(`/attributes/child/${id}/${ids}`);
//   // },

//   updateAttributes: async (id, body) => {
//     return requests.put(`/attributes/${id}`, body);
//   },

//   updateChildAttributes: async ({ id, ids }, body) => {
//     return requests.put(`/attributes/update/child/${ids}/${id}`, body);
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`/attributes/status/${id}`, body);
//   },

//   updateChildStatus: async (id, body) => {
//     return requests.put(`/attributes/status/child/${id}`, body);
//   },

//   deleteAttribute: async (id, body) => {
//     return requests.delete(`/attributes/${id}`, body);
//   },

//   deleteChildAttribute: async ({ id, ids }, body) => {
//     return requests.put(`/attributes/delete/child/${ids}/${id}`, body);
//   },

//   updateManyAttribute: async (body) => {
//     return requests.patch('/attributes/update/many', body);
//   },

//   updateManyChildAttribute: async (body) => {
//     return requests.patch('/attributes/update/child/many', body);
//   },

//   deleteManyAttribute: async (body) => {
//     console.log("datas : ", body)
//     return requests.patch('/attributes/delete/many', body);
//   },

//   deleteManyChildAttribute: async (body) => {
//     return requests.patch('/attributes/delete/child/many', body);
//   },
// };

// export default AttributeServices;


// for backend now avaible change it when needed


import requests from './httpService';

const AttributeServices = {
  getAllAttributes: async ({ type, option, option1 }) => {
    return requests.get(
      // `/api/attributes?type=${type}&option=${option}&option1=${option1}
      `/api/attributes`
    );
  },

  getShowingAttributes: async () => {
    return requests.get('/api/attributes/show');
  },

  addAttribute: async (body) => {
    return requests.post('/api/attributes/add', body);
  },

  addAllAttributes: async (body) => {
    return requests.post('/api/attributes/add/all', body);
  },

  getAttributeById: async (id) => {
    return requests.get(`/api/attributes/${id}`);
  },

  updateAttributes: async (id, body) => {
    return requests.put(`/api/attributes/${id}`, body);
  },

  updateChildAttributes: async ({ id, ids }, body) => {
    return requests.put(`/api/attributes/update/child/${ids}/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/api/attributes/status/${id}`, body);
  },

  deleteAttribute: async (id) => {
    console.log(":id ", id)
    return requests.delete(`/api/attributes/${id}`);
  },

  deleteChildAttribute: async ({ id, ids }, body) => {
    return requests.put(`/api/attributes/delete/child/${ids}/${id}`, body);
  },

  updateManyAttribute: async (body) => {
    return requests.patch('/api/attributes/update/many', body);
  },

  deleteManyAttribute: async (body) => {
    return requests.patch('/api/attributes/delete/many', body);
  },

  updateManyChildAttribute: async (body) => {
    return requests.patch('/api/attributes/delete/child/many', body);
  },

  deleteManyChildAttribute: async (body) => {
    return requests.patch('/api/attributes/delete/child/many', body);
  }
};

export default AttributeServices;
