
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import NotFound from './Components/NotFound';
import Products from './Components/productsListing';
import Album from './Components/Cards';
import Data from "./Components/Data"
import Product_View from './Components/Product_View';
import React_Table from './Table_Data/Table'



function App() {
  return (
    <div >
      <Router >
        <NavBar />
        <Routes>
          <Route exact strict path='/' element={<Home/>}/>  
          <Route exact strict path='/signup' element={<SignUp/>}/>
          <Route exact strict path='/signin' element={<SignIn/>}/>
          <Route exact strict path='/notfound' element={<NotFound/>}/>
          <Route exact strict  path='/products' element={<Products/>}/>
          <Route exact strict  path='/Card' element={<Album/>}/>
          <Route exact strict  path='/data' element={<Data/>}/>
          <Route exact strict  path="/productView/:id" element={<Product_View/>}/>
          <Route exact strict  path="/table" element={<React_Table/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}


export default App;
