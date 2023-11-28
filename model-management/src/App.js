import { ThemeContext } from './ThemeContext'; // Adjust the path as needed
import React, { useContext } from 'react'; // Import 'useContext' from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarManager } from './Components/NavBarManager';
import{AddNewModel} from './Components/AddNewModel'
import { Manager } from './Components/Manager';
import { AddNewJob } from './Components/AddNewJob';
import { AddNewManager} from './Components/AddNewManager';
import { AddModelToJob} from  './Components/AddModelToJob';
import { DeleteModelFromJob} from './Components/DeleteModelFromJob';
import {ListOfJobs} from './Components/listOfJobs';
import {Model} from './Components/Model';
import {AddExpenseToAJob} from  './Components/AddExpenseToAJob';
import './App.css';
import './index.css';
import { Login } from './Components/Login';

function App(){
  const { theme } = useContext(ThemeContext); // Use 'useContext' to access the theme from ThemeContext

  return (
      <Router>
      <div className={`App ${theme}`}>
        <h1 className="app-title">Model management</h1>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Manager" element={<Manager/>}/>
                <Route path="/addExpenseToAJob" element={<AddExpenseToAJob/>}/>
                <Route path="/addModelToJob" element={<AddModelToJob/>}/>
                <Route path="/addNewJob" element={<AddNewJob/>}/>
                <Route path="/addNewManager" element={<AddNewManager/>}/>
                <Route path="/addNewModel" element={<AddNewModel />} />
                <Route path="/deleteModelFromJob" element={<DeleteModelFromJob/>}/>
                <Route path="/listOfJobs" element={<ListOfJobs/>}/>
                <Route path="/Model" element={<Model/>}/> 
            </Routes>
          </div>
      </Router>
  );
}
export default App;
