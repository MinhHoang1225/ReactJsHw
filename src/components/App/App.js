// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "../../practice/contact";
import TodoList from "../TodoList"; // chứa logic todoList
import Arr from '../../practice/arr'; // chứa logic arr
import Game from '../../practice/game'; // chứa logic game
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Content from "../Content/Content"; 
import HeaderShop from "../Shop/Header";
import Product  from "../Shop/Product";
import Partner from "../Shop/Partner";
import FooterShop from "../Footer/Footer";


function App() {
  
  return (
    
    // <Router>
    //   <div>
    //     <nav>
    //       <Link to="/todolist">TodoList</Link> |{" "}
    //       <Link to="/contact">Liên hệ</Link> |{" "}
    //       <Link to="/arr">Array</Link>
    //       <Link to="/game">Game Caro</Link>
    //     </nav>
 
    //     <Routes>
    //       <Route path="/todolist" element={<TodoList />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/arr" element={<Arr />} />
    //       <Route path="/game" element={<Game/>} />
    //     </Routes>
    //   </div>
    // </Router>

    <>
             
              <HeaderShop></HeaderShop>
              <Product ></Product>
              <Partner></Partner>
              <FooterShop></FooterShop>
    </>
      
    );
  ;
}

export default App;
