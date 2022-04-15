import React from 'react';
// import logo from './logo.svg';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Category from './Pages/Category';
import StoreProviderSearchTerm from './contexts/searchTermContext';
import './i18n';

function App() {

  return (
    <div className="App">
      <StoreProviderSearchTerm>
        <BrowserRouter>
        <Routes> 
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="search" element={<Category/>} />
        </Routes>   
        </BrowserRouter> 
      </StoreProviderSearchTerm>
     
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
