import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import cartSvg from "../assets/icons/supermarket.svg";
import AddYourItemModal from "../components/AddYourItemModal/AddYourItemModal";
import AppContext from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const context = useContext(AppContext);
  const { buyCounter, isOn, toggleManager, resetLocalStorage } = context;

  const { home, aboutProject, contact } = routes;
  const { pathname } = window.location;

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
      <div className="navbar-item">
        {/* <AddYourItemModal addItem={addItem} /> */}
        {pathname === home && _renderAddItemModalButton()}
        {isOn === "addItemModalOn" && <AddYourItemModal />}
      </div>
      <div className="navbar-item ">
        {pathname === home && _renderResetLocalStorageButton()}
      </div>
    </div>
  );

  const _renderAddItemModalButton = () => (
    <button
      className="button is-primary"
      // id="addItemModal"
      value="addItemModal"
      onClick={() => toggleManager("addItemModal")}
    >
      Add Your Item <h1> </h1>
      <FontAwesomeIcon icon={faPlusCircle} className="icon" />
    </button>
  );

  const _renderLogInButton = () => (
    <a className="button is-light" id="logInButton" onClick={toggleManager}>
      {isOn !== "logOutButtonOn"
        ? isOn === "logInButtonOn"
          ? _renderLogOutButton()
          : "Log In"
        : "Log In"}
    </a>
  );

  //b ? (c ? d : e)
  // logInButtonIsOn ? "Log Out" : "Log In"
  //logInButtonIsOn ? (logOutButtonIsOn ? "Log In" : "Log Out") : "Log In"

  // isOn === 'logInButtonOn' ? 'Log Out' ? isOn === 'logOutButton' : 'Log In'
  const _renderLogOutButton = () => (
    <a className="button is-light" id="logOutButton" onClick={toggleManager}>
      Log Out
      {console.log(isOn)}
    </a>
  );

  const _renderResetLocalStorageButton = () => (
    <button className="button is-grey" onClick={resetLocalStorage}>
      Reset Local Storage
    </button>
  );
  const _renderNavbarEnd = () => (
    <div className="navbar-end is-flex ">
      <div className="navbar-item">
        <span>{buyCounter}</span>
        <img src={cartSvg} alt="" />
      </div>
      <div className="navbar-item"></div>

      <div className="navbar-item ">
        <a className="button is-primary">
          <strong>Sign up</strong>
        </a>
        {_renderLogInButton()}
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
