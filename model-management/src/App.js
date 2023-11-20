import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import{AddNewModel} from './Components/AddNewModel'
import { AddNewJob } from './Components/AddNewJob';
import { AddNewManager } from './Components/AddNewManager';
import './App.css';
import './index.css';
import { Login } from './Components/Login';
import { useEffect, useState } from 'react';

// function App(){
//   return (
//     <Router>
//       <div className="App">
//       <h1>Model management</h1>
//       {/* <Login></Login> */}
//       <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/addNewModel" element={<AddNewModel />} />
//         </Routes>
//           </div>
//     </Router>
//   );
// }

// // Test af AddNewModel
// function App(){
//   return (
//          <div className="App">
//           <h1>Add new model page</h1>
// <AddNewModel></AddNewModel>
//           </div>
//   );
// }


// // Test af AddNewJob
// function App(){
//     return (
//            <div className="App">
//             <h1>Add new job page</h1>
//   <AddNewJob></AddNewJob>
//             </div>
//     );
//   }

// Test af AddNewManager
function App(){
    return (
           <div className="App">
            <h1>Add new manager page</h1>
  <AddNewManager></AddNewManager>
            </div>
    );
  }


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
