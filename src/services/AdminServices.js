import requests from "./httpService";


// Static Data getting


// const AdminServices = {
//   registerAdmin: async (body) => {
//     return {}

//   },

//   loginAdmin: async (body) => {
//     return {}

//   },

//   forgetPassword: async (body) => {
//     return {}

//   },

//   resetPassword: async (body) => {
//     return {}

//   },

//   signUpWithProvider: async (body) => {
//     return {}

//   },

//   addStaff: async (body) => {
//     return {}

//   },
//   getAllStaff: async (body) => {
//     // return requests.get("/admin", body);
//     return {}

//   },
//   getStaffById: async (id, body) => {
//     return {}

//   },

//   updateStaff: async (id, body) => {
//     return {}

//   },

//   updateStaffStatus: async (id, body) => {
//     return {}

//   },

//   deleteStaff: async (id) => {
//     return {}
//   },
// };


// Dynamic Data getting


const AdminServices = {
  registerAdmin: async (body) => {
    return requests.post("/admin/register", body);
  },

  loginAdmin: async (body) => {
    console.log("hi", body)
    return requests.post(`/login`, body);
  },

  forgetPassword: async (body) => {
    return requests.put("/admin/forget-password", body);
  },

  resetPassword: async (body) => {
    return requests.put("/admin/reset-password", body);
  },

  signUpWithProvider: async (body) => {
    return requests.post("/admin/signup", body);
  },

  addStaff: async (body) => {
    return requests.post("/admin/add", body);
  },
  getAllStaff: async (body) => {
    // return requests.get("/admin", body);
    return { staff: [{ email: 'admin@test.com' }] }
  },
  getStaffById: async (id, body) => {
    return requests.post(`/admin/${id}`, body);
  },

  updateStaff: async (id, body) => {
    return requests.put(`/admin/${id}`, body);
  },

  updateStaffStatus: async (id, body) => {
    return requests.put(`/admin/update-status/${id}`, body);
  },

  deleteStaff: async (id) => {
    return requests.delete(`/admin/${id}`);
  },
};

export default AdminServices;
