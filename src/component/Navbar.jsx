import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import '../App.css'
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
          {counter}
          <NavLink to='basket'>
            basket
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
