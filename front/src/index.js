import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



=======
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 

const options ={
  timeout: 3000,
  position: positions.BOTTOM_LEFT,
  transition: transitions.FADE
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...options}>
    <App />
    </AlertProvider>
  </Provider>
  
);

>>>>>>> 4f95562cd8ded416edee21f87ecf7e6baf71eb21
