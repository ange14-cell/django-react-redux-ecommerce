import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducers'
import { listProductDetails, listProducts } from './actions/product.action';


const store = configureStore({
  reducer: rootReducer,
  devTools: true

})

store.dispatch(listProducts())
store.dispatch(listProductDetails())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

