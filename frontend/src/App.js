import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
// import Home from './component/Home';
import ProductList from "./component/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
  
//   <BrowserRouter>
// <Routes>

// <Route path='/' element ={<Home/>}/>

//   </Routes>


//   </BrowserRouter>
  

  );
}

export default App;
