import React, { useState } from "react";
import AddYourItemForm from "../Form/AddYourItemForm";
import RecentlyAdded from "../RecetlyAdded/RecentlyAdded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

///////////////////////****PYTANIA****????????????????????????????
//Dlaczego przy consollogu tablic pokazuje z opoznieniem?
//
//Czy jest sens bawić się teraz w przekazywanie danych z formularza do home?
//,czy poczekać na lepsze narzędzia, bo nie ma co sie bawic?
//
//Czym się rózni {!isActive} od {() => !isActive} ?
//
//Jak ustawić klase buttona przy logowaniu booleanem?
//
//Czy warto mieć osobny komponent do buttona logowania/wylogowania?
//
//Jak podpiac 2 eventy pod 1 button? form i wyłączanie modala przy wyslaniu
//
///////////////////////****PYTANIA****????????????????????????????

const AddYourItemModal = props => {
  const [isActive, toggleModal] = useState(false);
  const [isLogged, toggleLogin] = useState(false);

  const _renderModalAddItemButton = () => (
    <button
      className="button is-primary"
      onClick={() => toggleModal(!isActive)}
    >
      Add Your Item <h1> </h1>
      <FontAwesomeIcon icon={faPlusCircle} className="icon	" />
    </button>
  );

  const _renderModal = () => (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => toggleModal(!isActive)}
      />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"></p>
          <button className="delete" onClick={() => toggleModal(!isActive)} />
        </header>
        <section className="modal-card-body">
          <AddYourItemForm addItem={props.addItem} />
          <button
            className="button is-info
            "
            onClick={() => toggleLogin(!isLogged)}
          >
            {isLogged ? "Log out" : "Log in"}
          </button>
          <h1>You are: {isLogged ? "Logged In" : "Not Logged In"}</h1>
        </section>
      </div>
    </div>
  );

  return (
    <>
      {_renderModalAddItemButton()}
      {isActive && _renderModal()}
    </>
  );
};

export default AddYourItemModal;
