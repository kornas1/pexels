import React from 'react';
// import logo from './logo.svg';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Category from './Pages/Category';
import './i18n';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="search" element={<Category/>} />
       </Routes>   
      </BrowserRouter> 

     
    </div>
  ); 
  // return (
  //   <div className="App">
  //     <Main/>
  //     {/* <Category/> */}
  //   </div>
  // );
 
}

export default App;
