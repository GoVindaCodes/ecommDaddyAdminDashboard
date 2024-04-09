// // import coupons from 'utils/coupons';
// import requests from './httpService';

// const CouponServices = {
//   addCoupon: async (body) => {
//     return requests.post('/coupons/add', body);
//     // return [];
//     // try {
//     //   console.log("Adding coupons:", body);
//     //   await new Promise(resolve => setTimeout(resolve, 1000));
//     //   coupons.push(body);
//     //   return { success: true, message: "coupons added successfully" };
//     // } catch (error) {
//     //   return { success: false, message: "Failed to add coupons" };
//     // }
//   },
//   addAllCoupon: async (body) => {
//     return requests.post('/api/coupons/add/all', body);
//     // return [];

//   },
//   getAllCoupons: async () => {
//     return requests.get('/api/coupon');
//     // return [];

//   },
//   getCouponById: async (id) => {
//     return requests.get(`/coupons/${id}`);
//     // return [];
//   },
//   updateCoupon: async (id, body) => {
//     return requests.put(`/coupons/${id}`, body);
//     // return [];
//   },
//   // updateManyCoupons: async (body) => {
//   //   console.log("id", body)
//   //   console.log("data", body.ids)
//   //   return requests.patch('/coupons/update/many', { ids, status });
//   // },
//   updateManyCoupons: async (body) => {
//     console.log("id", body);
//     console.log("data", body.ids);

//     const { ids, status } = body; // Destructuring ids and status from body

//     return requests.patch('/coupons/update/many', { ids, status });
//   },

//   updateStatus: async (id, body) => {
//     console.log("id", id)
//     console.log("data", body)
//     return requests.put(`/coupons/status/${id}`, body);
//   },

//   deleteCoupon: async (id) => {
//     return requests.delete(`/coupons/${id}`);
//   },

//   // deleteCoupon: async (id) => {
//   //   try {
//   //     await new Promise(resolve => setTimeout(resolve, 1000));
//   //     const updatedCoupons = coupons.filter(coupon => coupon._id !== id);
//   //     coupons.length = 0;
//   //     updatedCoupons.forEach(coupon => coupons.push(coupon));
//   //     return { success: true, message: "Coupon deleted successfully" };
//   //   } catch (error) {
//   //     return { success: false, message: "Error deleting coupon" };
//   //   }
//   // },

//   deleteManyCoupons: async (body) => {
//     console.log("ids", body.ids);
//     return requests.patch(`/coupons/delete/many`, body.ids);
//   },

//   // deleteManyCoupons: async (body) => {
//   //   const { ids } = body;

//   //   try {

//   //     await new Promise(resolve => setTimeout(resolve, 1000));
//   //     // const updatedProducts = productData.filter(product => !ids.includes(product._id));
//   //     console.log("coupons Before Deletion : ", body)
//   //     const updatedCoupons = coupons.filter(coupons => !ids.includes(coupons._id));
//   //     updatedCoupons.length = 0;
//   //     updatedCoupons.forEach(coupon => coupons.push(coupon));
//   //     console.log("coupons After Deletion : ", updatedCoupons)
//   //     return { success: true, message: "Coupons Deleted Successfully" }
//   //   } catch (error) {
//   //     return { success: false, message: "hi" }
//   //   }

//   // }

// };

// export default CouponServices;



// addedd new for the backend for now sir


import requests from './httpService';

const CouponServices = {
  addCoupon: async (body) => {
    return requests.post('/api/coupon/add', body);
  },

  addAllCoupon: async (body) => {
    return requests.post('/api/coupon/add/all', body);
  },

  getAllCoupons: async () => {
    return requests.get('/api/coupon');
  },

  getCouponById: async (id) => {
    return requests.get(`/api/coupon/${id}`);
  },

  updateCoupon: async (id, body) => {
    return requests.put(`/api/coupon/${id}`, body);
  },

  updateManyCoupons: async (body) => {
    const { ids, status } = body;
    return requests.patch('/api/coupon/update/many', { ids, status });
  },

  updateStatus: async (id, body) => {
    return requests.put(`/api/coupon/status/${id}`, body);
  },

  deleteCoupon: async (id) => {
    return requests.delete(`/api/coupon/${id}`);
  },

  deleteManyCoupons: async (body) => {
    return requests.patch('/api/coupon/delete/many', body);
  }
};

export default CouponServices;
