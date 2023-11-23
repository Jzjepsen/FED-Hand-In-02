import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarManager } from './Components/NavBarManager';
import{AddNewModel} from './Components/AddNewModel'
import { Manager } from './Components/Manager';
import { AddNewJob } from './Components/AddNewJob';
import { AddNewManager} from './Components/AddNewManager';
import {AddExpenseToAJob} from '.Components/AddExpenseToAJob';
import {AddModelToJob} from '.Components/AddModelToJob';
import{DeleteModelFromJob} from '.Components/DeleteModelFromJob';
import {Model} from '.Components/Model';

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
          <Route path="/Manager" element={<Manager/>}/>
 
          <Route path="/addExpenseToAJob" element={<AddExpenseToAJob/>}/>
          <Route path="/addModelToJob" element={<AddModelToJob/>}/>
          <Route path="/addNewJob" element={<AddNewJob/>}/>
          <Route path="/addNewManager" element={<AddNewManager/>}/>
          <Route path="/addNewModel" element={<AddNewModel />} />
          <Route path="/deleteModelFromJob" element={<DeleteModelFromJob/>}/>
          <Route path="/Model" element={<Model/>}/> 
          {/*Vi mangler en oversigt med alle jobs*/}
        </Routes>
        
          </div>
    </Router>
  );
}

////Test af AddNewModel
// function App(){
//    return (
//           <div className="App">
//            <h1>Add new model page</h1>
//  <AddNewModel></AddNewModel>
//            </div>
//    );
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

// // Test af AddNewManager
// function App(){
//     return (
//            <div className="App">
//             <h1>Add new manager page</h1>
//   <AddNewManager></AddNewManager>
//             </div>
//     );
//   }


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
