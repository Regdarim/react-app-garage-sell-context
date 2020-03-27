import React, { useContext } from "react";

import AddYourItemForm from "../Form/AddYourItemForm";

import AppContext from "../../context/context";

///////////////////////****PYTANIA****????????????????????????????
//
//
//Czym się rózni {!isActive} od {() => !isActive} ?
//
//Jak ustawić klase buttona przy logowaniu booleanem?
//
//Czy warto mieć osobny komponent do buttona logowania/wylogowania?
//
//
///////////////////////****PYTANIA****????????????????????????????

const AddYourItemModal = () => {
  const context = useContext(AppContext);
  const { toggleManager, isOn } = context;

  // isOn === "logInButtonOn" ? "Log Out" : "Log In"
  const _renderLogInButton = () => (
    <a className="button is-info" id="logInButton" onClick={toggleManager}>
      {isOn === "logInButtonOn" ? _renderLogOutButton() : "Log In"}
      {console.log(isOn)}
    </a>
  );

  // tworze nowy button z mozliwoscia przeslania id="close"
  const _renderLogOutButton = () => (
    <a className="button is-warning" id="close" onClick={toggleManager}>
      Log Out
      {console.log(isOn)}
    </a>
  );

  const _renderModal = () => (
    <div className="modal is-active">
      <div className="modal-background" id="close" onClick={toggleManager} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"></p>
          <button className="delete" id="close" onClick={toggleManager} />
        </header>
        <section className="modal-card-body">
          <AddYourItemForm />
          {_renderLogInButton()}
          <p>
            You are: {isOn === "logInButtonOn" ? "Logged In" : "Logged Out"}{" "}
          </p>
        </section>
      </div>
    </div>
  );

  return <>{_renderModal()}</>;
};

export default AddYourItemModal;
