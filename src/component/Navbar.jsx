import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import '../App.css'

import icon from "../assets/icon.png"
const Navbar = () => {
  const counter = useSelector(state => state.productsInBasketReducer.productsAmount)
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="product">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='basket'>
            basket
            <img style={{width: "20px"}} src={icon} alt="icon"/>
          </NavLink>
          <span style={{marginLeft: "8px"}}>{counter}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
