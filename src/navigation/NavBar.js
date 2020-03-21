import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import cart from "../assets/icons/supermarket.svg";
import AddYourItemModal from "../components/AddYourItemModal/AddYourItemModal";

const NavBar = props => {
  return (
    <nav className="navbar is-flex">
      <div className="navbar-start  is-flex">
        {/* <span class="icon">
        <i class="fas fa-home"></i>
      </span> nie laduja sie ikonki z bulmy */}
        <Link to={routes.home} className="navbar-item">
          Home
        </Link>
        <Link to={routes.aboutProject} className="navbar-item">
          About Project
        </Link>
        <Link to={routes.contact} className="navbar-item">
          Contact
        </Link>
        {/* <Link to="/UsersMails" className="navbar-item">
          Users Mails
        </Link> */}
        <div className="navbar-item" />
        <AddYourItemModal />
      </div>

      <div className="navbar-end is-flex ">
        <div className="navbar-item">
          <span>{props.buyCounter}</span>
          <img src={cart} alt="" />
        </div>
        <div className="navbar-item"></div>

        <div className="navbar-item ">
          <div className="buttons is-flex">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
