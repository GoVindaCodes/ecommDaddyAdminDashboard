// // // import categoryData from "utils/category";
// // import requests from "./httpService";

// // const CategoryServices = {
// //   getAllCategory: async () => {
// //     return requests.get("/category");
// //     // return []
// //     // return categoryData;
// //   },

// //   getAllcategory: async () => {
// //     return requests.get("/category/all");
// //     // return []
// //     // return categoryData;
// //   },

// //   getCategoryById: async (id) => {
// //     return requests.get(`/category/${id}`);
// //     // return [];

// //   },

// //   addCategory: async (body) => {
// //     return requests.post("/category/add", body);
// //     // return [];

// //   },

// //   // addCategory: async (newCategory) => {
// //   //   console.log("New Category:", newCategory);
// //   //   try {
// //   //     await new Promise(resolve => setTimeout(resolve, 1000));
// //   //     categoryData.push(newCategory);
// //   //     console.log("Updated Category Data:", categoryData);
// //   //     return { success: true, message: "Category added successfully", data: newCategory };
// //   //   } catch (error) {
// //   //     console.error("Error adding category:", error);
// //   //     return { success: false, message: "Failed to add category" };
// //   //   }
// //   // },


// //   addAllCategory: async (body) => {
// //     return requests.post("/category/add/all", body);
// //     // return [];

// //   },

// //   updateCategory: async (id, body) => {
// //     return requests.put(`/category/${id}`, body);
// //   },

// //   updateStatus: async (id, body) => {
// //     return requests.put(`/category/status/${id}`, body);
// //   },

// //   deleteCategory: async (id) => {
// //     //   try {
// //     //     console.log("Deleting category with ID:", id);
// //     //     console.log("Before deletion:", categoryData);
// //     //     await new Promise(resolve => setTimeout(resolve, 1000));
// //     //     categoryData = categoryData.filter(category => category._id !== id);
// //     //     console.log("After deletion:", categoryData);
// //     //     return { success: true, message: "Category deleted successfully" };
// //     //   } catch (error) {
// //     //     console.error("Error deleting category:", error);
// //     //     return { success: false, message: "Failed to delete category" };
// //     //   }
// //     // },



// //     // deleteCategory: async (id, body) => {
// //     //   console.log("Request Body:", body);
// //     //   const { ids } = body;
// //     //   try {
// //     //     await new Promise(resolve => setTimeout(resolve, 1000));
// //     //     const updatedcategory = categoryData.filter(category => category._id !== id);
// //     //     categoryData.length = 0;
// //     //     updatedcategory.forEach(category => categoryData.push(category));
// //     //     console.log("Updated category:", updatedcategory);
// //     //     return { success: true, message: "Category deleted successfully", data: updatedcategory };
// //     //   } catch (error) {
// //     //     return { success: false, message: "Failed to delete category" };
// //     //   }
// //     // },


// //     updateManyCategory: async (body) => {
// //       return requests.patch("/category/update/many", body);
// //       // return [];

// //     },

// //       deleteManyCategory: async (body) => {
// //         return requests.patch("/category/delete/many", body);
// //         // return [];
// //       }
// //   },
// // };

// // export default CategoryServices;




// // justt added For Now Heree Justt Checkings


// import requests from "./httpService";

// const CategoryServices = {
//   getAllCategory: async () => {
//     return requests.get("/category");
//     // return []
//   },

//   getAllcategory: async () => {
//     return requests.get("/category/all");
//     // return [];
//   },

//   getCategoryById: async (id) => {
//     return requests.get(`/category/${id}`);
//     // return [];
//   },

//   addCategory: async (body) => {
//     console.log("datas :", body)
//     console.log("datas name :", body.name.en)
//     return requests.post("/category", { body, name: body.name.en });
//     // return [];
//   },

//   addAllCategory: async (body) => {
//     return requests.post("/category/add/all", body);
//     // return [];

//   },

//   updateCategory: async (id, body) => {
//     return requests.put(`/category/${id}`, body);
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`/category/status/${id}`, body);
//   },

//   deleteCategory: async (id, body) => {
//     return requests.delete(`/category/${id}`, body);
//   },

//   updateManyCategory: async (body) => {
//     const { ids, status } = body;

//     return requests.patch("/category/update/many", { ids, status });
//     // return [];
//   },

//   deleteManyCategory: async (body) => {
//     // console.log("datas :", body.ids)
//     return requests.patch("/category/delete/many", body.ids);
//     // return [];

//   },
// };

// export default CategoryServices;




// new ones according to the backend from nodee js

import requests from "./httpService";

const CategoryServices = {
  getAllCategory: async () => {
    return requests.get("/api/category/all");
  },

  getAllcategory: async () => {
    return requests.get("/api/category");
  },

  getCategoryById: async (id) => {
    return requests.get(`/api/category/${id}`); // Updated route
  },

  addCategory: async (body) => {
    return requests.post("/api/category/add", body); // Updated route
  },

  addAllCategory: async (body) => {
    return requests.post("/api/category/add/all", body); // Updated route
  },

  updateCategory: async (id, body) => {
    return requests.put(`/api/category/${id}`, body); // Updated route
  },

  updateStatus: async (id, body) => {
    return requests.put(`/api/category/status/${id}`, body); // Updated route
  },

  deleteCategory: async (id) => {
    return requests.delete(`/api/category/${id}`); // Updated route
  },

  updateManyCategory: async (body) => {
    const { ids, status } = body;
    return requests.patch("/api/category/update/many", { ids, status }); // Updated route
  },

  deleteManyCategory: async (body) => {
    return requests.patch("/api/category/delete/many", body); // Updated route
  },
};

export default CategoryServices;
