import { React } from "react";
import { NavLink } from "react-router-dom";


const menuList = [
    {name: "Main page", path: "/", exact: true},
    {name: "Our Animals", path: "/animals"},
    {name: "Prices", path: "/prices"},
    {name: "Contact us", path: "/contact"},
    {name: "Admin", path: "/admin"}
]

const Navigation = () => {
    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
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