import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import "./i18n";

import store from "./store";
import { Provider } from "react-redux";
//import {createStore} from "redux";
//import { Provider } from "react-redux";
// import reportWebVitals from './reportWebVitals';

// const action ={type: "", payload: "?"}

// const defaultState={
//   cash:0,
// }

// const reducer=(state=defaultState, action)=>{
//  switch(action.type){
//   case "ADD":
//     return {...state, cash: state.cash+action.payload}

//   default:
//     return state
//  }
// }
//  const store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
