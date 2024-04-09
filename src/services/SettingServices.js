// import requests from './httpService';
// import SettingData from '../dummy_data/SettingsData';

// const SettingServices = {
//   // global setting all function
//   addGlobalSetting: async (body) => {
//     return requests.post('/setting/global/add', body);
//   },

//   getGlobalSetting: async () => {
//     // return requests.get('/setting/global/all');
//     // console.log(SettingData);
//     return SettingData;
//   },

//   updateGlobalSetting: async (body) => {
//     return requests.put(`/setting/global/update`, body);
//   },
// };

// export default SettingServices;




// new from the backend 

import requests from './httpService';

const SettingServices = {
  addGlobalSetting: async (body) => {
    return requests.post('/api/setting/global/add', body);
  },

  getGlobalSetting: async () => {
    return requests.get('/api/setting/global/all');
  },

  updateGlobalSetting: async (body) => {
    return requests.put('/api/setting/global/update', body);
  },

  addStoreSetting: async (body) => {
    return requests.post('/api/setting/store-setting/add', body);
  },

  getStoreSetting: async () => {
    return requests.get('/api/setting/store-setting/all');
  },

  getStoreSeoSetting: async () => {
    return requests.get('/api/setting/store-setting/seo');
  },

  updateStoreSetting: async (body) => {
    return requests.put('/api/setting/store-setting/update', body);
  },

  addStoreCustomizationSetting: async (body) => {
    return requests.post('/api/setting/store/customization/add', body);
  },

  getStoreCustomizationSetting: async () => {
    return requests.get('/api/setting/store/customization/all');
  },

  updateStoreCustomizationSetting: async (body) => {
    return requests.put('/api/setting/store/customization/update', body);
  },
};

export default SettingServices;
