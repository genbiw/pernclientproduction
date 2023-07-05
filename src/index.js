import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
      }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  </BrowserRouter>

);