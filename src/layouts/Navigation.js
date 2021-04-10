import { React } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";


const menuList = [
    {name: "Main page", path: "/"},
    {name: "Our Animals", path: "/animals"},
    {name: "Sponsorship", path: "/sponsorship"},
    {name: "Contact us", path: "/contact"},
    {name: "Admin", path: "/admin"}
]

const Navigation = () => {
    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;