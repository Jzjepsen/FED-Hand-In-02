import { NavLink } from "react-router-dom";
import './Styling/NavBarManager.css'; // Import NavBarManager.css


export function NavBarManager(){
    return(
        <nav>
            <NavLink className="nav-link"  to="/addNewManager" >
            Add new manager
            </NavLink>
            <NavLink className="nav-link" to="/addNewModel">
            Add New Model
            </NavLink>
            <NavLink className="nav-link" to="/addNewJob">
                Add new job
            </NavLink>
            <NavLink className="nav-link" to="/addModelToJob">
                Add model to job
            </NavLink>
            <NavLink className="nav-link" to="/deleteModelFromJob">
                Delete model from job
            </NavLink>
            <NavLink className="nav-link" to="/listOfJobs">
                List of jobs
            </NavLink>
        </nav>
    );
}