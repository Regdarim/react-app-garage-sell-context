import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import cartSvg from "../assets/icons/supermarket.svg";
import AddYourItemModal from "../components/AddYourItemModal/AddYourItemModal";
import AppContext from "../context/context";

const NavBar = props => {
  const { home, aboutProject, contact } = routes;
  const { buyCounter, addItem } = props;

  const context = useContext(AppContext);
  const { isActive } = context;

  //////////RETURN JSX SEGMENTS////////////////////RETURN SEGMENTS////////////////////RETURN SEGMENTS//////////

  const _renderNavbarStart = () => (
    <div className="navbar-start  is-flex">
      {/* <span class="icon">
          <i class="fas fa-home"></i>
        </span> nie laduja sie ikonki z bulmy */}
      <Link to={home} className="navbar-item">
        Home
      </Link>
      <Link to={aboutProject} className="navbar-item">
        About Project
      </Link>
      <Link to={contact} className="navbar-item">
        Contact
      </Link>
      <div className="navbar-item" />
      {window.location.pathname === routes.home && (
        <AddYourItemModal addItem={addItem} />
      )}
    </div>
  );

  const _renderNavbarEnd = () => (
    <div className="navbar-end is-flex ">
      <div className="navbar-item">
        <span>{buyCounter}</span>
        <img src={cartSvg} alt="" />
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
  );
  //////////RETURN JSX SEGMENTS END////////////////////RETURN SEGMENTS////////////////////RETURN SEGMENTS//////////

  return (
    <nav className="navbar is-flex">
      {_renderNavbarStart()}
      {_renderNavbarEnd()}
    </nav>
  );
};

export default NavBar;
