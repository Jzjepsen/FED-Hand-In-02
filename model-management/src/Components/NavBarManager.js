import { NavLink } from "react-router-dom";

export function NavBarManager(){
    return(
        <nav>
            <NavLink to="/addNewManager" >
            Add new manager
            </NavLink>
            <NavLink to="/addNewModel">
            Add New Model
            </NavLink>
            <NavLink to="/addNewJob">
                Add new job
            </NavLink>
            <NavLink to="/addModelToJob">
                Add model to job
            </NavLink>
            <NavLink to="/deleteModelFromJob">
                Delete model from job
            </NavLink>
        </nav>
    );
}