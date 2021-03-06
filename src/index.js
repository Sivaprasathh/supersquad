import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./components/App"
import rootReducer from "./reducers"; // reducer 
import { addCharacterById } from './actions';
const store  = createStore(rootReducer);
//store.dispatch(addCharacterById(5));
//store.subscribe(()=> console.log(store.getState()));


ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

