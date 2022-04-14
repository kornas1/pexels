import React ,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
 import './main.css';
import App from './App';
import './i18n';
import {createStore} from "redux";
import { Provider } from "react-redux";
// import reportWebVitals from './reportWebVitals';

const action ={type: "", payload: "?"}

const defaultState={
  cash:0,
}


const reducer=(state=defaultState, action)=>{
 switch(action.type){
  case "ADD":
    return {...state}

  default:
    return state
 }
}
const store=createStore();

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
