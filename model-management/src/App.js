import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarManager } from './Components/NavBarManager';
import{AddNewModel} from './Components/AddNewModel'
import { Manager } from './Components/Manager';
import { AddNewJob } from './Components/AddNewJob';
import { AddNewManager} from './Components/AddNewManager';
import { AddModelToJob} from  './Components/AddModelToJob';
import { DeleteModelFromJob} from './Components/DeleteModelFromJob';
import {Model} from './Components/Model';
import {AddExpenseToAJob} from  './Components/AddExpenseToAJob';
import ThemeContext from './styling/ThemeContext';
import './App.css';
import './index.css';
import { Login } from './Components/Login';
import { useEffect, useState, useContext } from 'react';

function App(){
  const theme = useContext(ThemeContext); // Use the theme from ThemeContext

  return (
    <ThemeContext.Provider value = "dark">
      <Router>
          <div className={`App ${theme}`}>
            <h1>Model management</h1>
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
    </ThemeContext.Provider>
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
