import React, { useContext, useEffect } from "react";
import styles from "./AddYourItemModal.scss";

import AddYourItemForm from "../Form/AddYourItemForm";

import AppContext from "../../context/context";

///////////////////////****PYTANIA****????????????????????????????
//
//
//
//
//Jak ustawić klase buttona przy logowaniu booleanem?
//
//Czy warto mieć osobny komponent do buttona logowania/wylogowania?
//
//
///////////////////////****PYTANIA****????????????????????????????

const AddYourItemModal = () => {
  const context = useContext(AppContext);
  const { toggleManager, innerIsOn } = context;

  const _renderLogButton = () => (
    <button onClick={() => toggleManager(innerIsOn)}>
      {innerIsOn === "logInButton"
        ? "Log out"
        : innerIsOn === "logOutButton"
        ? "Log in"
        : ""}
    </button>
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
          {_renderLogButton()}
          <p>
            You are: {innerIsOn === "logInButton" ? "Logged In" : "Logged Out"}
          </p>
        </section>
      </div>
    </div>
  );

  return <>{_renderModal()}</>;
};

export default AddYourItemModal;
