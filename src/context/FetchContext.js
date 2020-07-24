import React, { createContext } from 'react';
import axios from 'axios';

const FetchContext = createContext();
const { Provider } = FetchContext;

function FetchProvider({ children }) {
  const authAxios = axios.create({
    baseURL: process.env.VASE_API_URL
  })

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  )
}

export { FetchContext, FetchProvider };