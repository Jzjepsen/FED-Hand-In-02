import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './Components/Login';
import { NavBar } from './Components/NavBar';
import{AddNewModel} from './Components/AddNewModel'
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>}> </Route> {/* Skal ændres til noget andet end login*/}   
        <Route path="/AddNewModel" element={<AddNewModel/>}></Route>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
