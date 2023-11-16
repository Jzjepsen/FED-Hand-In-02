import { NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <nav>
            <NavLink to="/" >
            Login {/* Skal ændres til noget andet */}
            </NavLink>
            <NavLink to="/addNewModel">
            AddNewModel
            </NavLink>
        </nav>
    );
}