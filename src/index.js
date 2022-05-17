import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { axiosInstance } from './config';
import jwtDecode from 'jwt-decode';
import QrcodeView from './QrcodeView';
import NotFound500 from './pages/notfound500/Notfound500';
import 'react-toastify/dist/ReactToastify.css';


// tokenni vaqti
axiosInstance.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    if (error.response.status === 403) {
      if (error.response?.data?.message === "Invalid token") {
        let token = JSON.parse(localStorage.getItem("user"));
        let role = JSON.parse(jwtDecode(token).supperAdmin).userRoles[0].systemName;
        if (role !== "base_admin") {
          localStorage.removeItem("user"); //storage dan o'chirish
          window.location.replace("/");
        } else {
          localStorage.removeItem("user"); //storage dan o'chirish
          window.location.replace("/login");
        }
      }
    }
    if (error.response.status === 500) {
      if (error.response?.data?.message === "Internal sever error") {
        <NotFound500 />
      }
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  window.location.pathname === `/view/scanner/qrcode/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}` ? <QrcodeView /> : <AuthContextProvider><App /></AuthContextProvider >,
  document.getElementById('root')
)


