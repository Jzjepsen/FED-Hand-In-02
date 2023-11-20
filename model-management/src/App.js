import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import{AddNewModel} from './Components/AddNewModel'
import './App.css';
import './index.css';
import { Login } from './Components/Login';
import { useEffect, useState } from 'react';

function App(){
  return (
    <Router>
      <div className="App">
      <h1>Model management</h1>
      {/* <Login></Login> */}
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/addNewModel" element={<AddNewModel />} />
        </Routes>
          </div>
    </Router>
  );
}

// function App(){
//    return (
//           <div className="App">
//            <h1>Add new model page</h1>
//  <AddNewModel></AddNewModel>
//            </div>
//    );
// } 


// function App() {
//   return (
//     <div className="App">
//      <Router>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Login/>}> </Route> {/* Skal ændres til noget andet end login*/}   
//         <Route path="/AddNewModel" element={<AddNewModel/>}></Route>
//       </Routes>

//       </Router>
//     </div>
//   );
// }

export default App;
