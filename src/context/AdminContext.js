import Cookies from 'js-cookie';
import React, { createContext, useReducer } from 'react';
export const AdminContext = createContext();

const initialState = {

  adminInfo: Cookies.get('adminInfo')
    ? JSON.parse(Cookies.get('adminInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      console.log('User logged in:', action.payload);

      return { ...state, adminInfo: action.payload };

    case 'USER_LOGOUT':
      console.log('User logged out');

      localStorage.clear();

      return {
        ...state,
        adminInfo: null,
      };

    default:
      return state;
  }
}

export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };


  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
