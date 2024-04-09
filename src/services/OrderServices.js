// // import { baseFileName } from "coffee-script/lib/coffee-script/helpers";
// import requests from "./httpService";

// const OrderServices = {
//   getAllOrders: async (
//     // {body,
//     // headers,
//     // customerName,
//     // status,
//     // page = 1,
//     // limit = 8,
//     // day,
//     // startDate,
//     // endDate,}
//   ) => {
//     // const searchName = customerName !== null ? customerName : "";
//     // const searchStatus = status !== null ? status : "";
//     // const searchDay = day !== null ? day : "";
//     // const startD = startDate !== null ? startDate : "";
//     // const endD = endDate !== null ? endDate : "";

//     //   return requests.get(
//     //     `/orders?customerName=${searchName}&status=${searchStatus}&day=${searchDay}&page=${page}&limit=${limit}&startDate=${startD}&endDate=${endD}`,
//     //     body,
//     //     headers
//     //   );

//     return {
//       orders: [
//         {
//           _id: 1,
//           invoice: 123,
//           subTotal: 123,
//           shippingCost: 123,
//           discount: 30,
//           total: 1230,
//           paymentMethod: "COD",
//           status: "pending",
//           user_info: { name: "Rohit" },
//           createdAt: 2022,
//           updatedAt: "Just-Now",
//         }
//       ]
//     }
//   },

//   getAllOrdersTwo: async ({ invoice, body, headers }) => {
//     const searchInvoice = invoice !== null ? invoice : "";
//     return requests.get(`/orders/all?invoice=${searchInvoice}`, body, headers);
//   },

//   getRecentOrders: async ({
//     page = 1,
//     limit = 8,
//     startDate = "1:00",
//     endDate = "23:59",
//   }) => {
//     return requests.get(
//       `/orders/recent?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`
//     );
//   },

//   getOrderCustomer: async (id, body) => {
//     return requests.get(`/orders/customer/${id}`, body);
//   },

//   getOrderById: async (id, body) => {
//     return requests.get(`/orders/${id}`, body);
//   },

//   updateOrder: async (id, body, headers) => {
//     return requests.put(`/orders/${id}`, body, headers);
//   },

//   deleteOrder: async (id) => {
//     return requests.delete(`/orders/${id}`);
//   },

//   getDashboardOrdersData: async ({
//     page = 1,
//     limit = 8,
//     endDate = "23:59",
//   }) => {
//     return requests.get(
//       `/orders/dashboard?page=${page}&limit=${limit}&endDate=${endDate}`
//     );
//   },

//   getDashboardAmount: async () => {
//     return requests.get("/orders/dashboard-amount");
//   },

//   getDashboardCount: async () => {
//     return requests.get("/orders/dashboard-count");
//   },

//   getDashboardRecentOrder: async ({ page = 1, limit = 8 }) => {
//     return requests.get(
//       `/orders/dashboard-recent-order?page=${page}&limit=${limit}`
//     );
//   },

//   getBestSellerProductChart: async () => {
//     return requests.get("/orders/best-seller/chart");
//   },
// };

// export default OrderServices;


import requests from "./httpService";

const OrderServices = {
  getAllOrders: async () => {
    return requests.get("/api/orders");
  },

  getAllOrdersTwo: async ({ invoice, body, headers }) => {
    const searchInvoice = invoice !== null ? invoice : "";
    return requests.get(`/api/orders/all?invoice=${searchInvoice}`, body, headers);
  },

  getRecentOrders: async ({ page = 1, limit = 8, startDate = "1:00", endDate = "23:59" }) => {
    return requests.get(`/api/orders/recent?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`);
  },

  getOrderCustomer: async (id, body) => {
    return requests.get(`/api/orders/customer/${id}`, body);
  },

  getOrderById: async (id, body) => {
    return requests.get(`/api/orders/${id}`, body);
  },

  updateOrder: async (id, body, headers) => {
    return requests.put(`/api/orders/${id}`, body, headers);
  },

  deleteOrder: async (id) => {
    return requests.delete(`/api/orders/${id}`);
  },

  getDashboardOrdersData: async ({ page = 1, limit = 8, endDate = "23:59" }) => {
    return requests.get(`/api/orders/dashboard?page=${page}&limit=${limit}&endDate=${endDate}`);
  },

  getDashboardAmount: async () => {
    return requests.get("/api/orders/dashboard-amount");
  },

  getDashboardCount: async () => {
    return requests.get("/api/orders/dashboard-count");
  },

  getDashboardRecentOrder: async ({ page = 1, limit = 8 }) => {
    return requests.get(`/api/orders/dashboard-recent-order?page=${page}&limit=${limit}`);
  },

  getBestSellerProductChart: async () => {
    return requests.get("/api/orders/best-seller/chart");
  },
};

export default OrderServices;
