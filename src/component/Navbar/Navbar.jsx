import { useState } from "react";
import"./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar(){
    const[open,setOpen]=useState(false);
    const user=true;
    return(
        <nav>
            <div className="left">
            <a href="" className="logo">
                <img src='/logo.png' alt=""/>
           
            <span>HOME HUSTLE</span></a>
            <a href='/homepage'>Home</a>
            <a href="/aboutus">About</a>
            <a href="/contact">Contact</a>
            <a href="/agents">Agents</a>
            </div>
            
            <div className="right">
            { user ? (<div className='user'>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            <span>Varun Palande</span>
            <Link to="/profilePage" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
            </Link>
            
            </div>
          
            ) : ( 
                <>
            <a href="/">SignIn</a>

            <a href="/"  className="register">SignUp</a>
            </>
            )}
            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=> setOpen((prev) => !prev)}/>
            </div>
            <div className={open ? "menu active":"menu"}>
            <a href="/homepage">Home</a>
            <a href="/aboutus">About</a>
            <a href="/contact">Contact</a>
            <a href="/agents">Agents</a>
            <a href="/">SignIn</a>
            <a href="/">SignUp</a>
            </div>
            </div>
        </nav>
    )
}
export default Navbar;
