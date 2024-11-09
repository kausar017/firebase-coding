import { NavLink } from "react-router-dom";
import Home from "../Home/Home";


const Header = () => {
    return (
        <div className="space-x-5">
           <NavLink to={'/'} className='btn'>Home</NavLink>
           <NavLink to={'/login'} className='btn'>Login</NavLink>
        </div>
    );
};

export default Header;