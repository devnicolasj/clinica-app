import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Auth0Provider } from '@auth0/auth0-react' ;
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM. render(
   <React. StrictMode>
     <Auth0Provider 
     domain="dev-bd5xy8p3s2h7k0i2.us.auth0.com" 
     clientId="Foeerx7dEGaEjhaBxRi5V0tKml9GhxUm"
     redirectUri={window.location.origin}>
       
       <App></App>
       </Auth0Provider>
  </React.StrictMode>,
   document. getElementById ("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
