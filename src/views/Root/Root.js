import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import AboutProject from "../AboutProject/AboutProject";
import Contact from "../Contact/Contact";
import { routes } from "../../routes";
import AppContext from "../../context/context";
import { initialGarageItems } from "../../data/localData/initialGarageItems";
import { usersMails } from "../../data/localData/usersMails";
import DeleteItemAlertModal from "../../components/DeleteItemAlertModal/DeleteItemAlertModal";

const Root = () => {
  const garageItemsStorage = JSON.parse(localStorage.getItem("garageItems"));
  console.log(garageItemsStorage);
  const usersMailsStorage = JSON.parse(localStorage.getItem("usersMailsArray"));
  console.log(usersMailsStorage);

  const [garageItems, setGarageItems] = useState(garageItemsStorage);
  const [recentlyAddedItems, setRecentlyAddedItems] = useState([]);
  const [usersMailsArray, setUsersMailsArray] = useState(usersMailsStorage);
  const [buyCounter, setBuyCounter] = useState(0);

  const [isOn, setIsOn] = useState("allOff"); //toggleManagerState
  const [innerIsOn, setInnerIsOn] = useState("allOff"); //secondToggleManagerState

  useEffect(() => {
    setInitialUsersMailsStorageArray();
  }, []);

  const setInitialUsersMailsStorageArray = () => {
    localStorage.setItem("usersMailsArray", JSON.stringify([...usersMails]));
  };

  useEffect(() => {
    localStorage.setItem("usersMailsArray", JSON.stringify(usersMailsArray));
  }, [usersMailsArray]);

  useEffect(() => {
    setIntitialGarageStorageItems();
  }, []);

  const setIntitialGarageStorageItems = () => {
    localStorage.setItem(
      "garageItems",
      JSON.stringify([...initialGarageItems])
    );
  };

  useEffect(() => {
    localStorage.setItem("garageItems", JSON.stringify(garageItems));
  }, [garageItems]);

  const resetLocalStorage = () => {
    localStorage.setItem(
      "garageItems",
      JSON.stringify([...initialGarageItems])
    );
    window.location.reload();
  };

  const toggleManager = type => {
    switch (type) {
      case "askQuestionModal":
        setIsOn("askQuestionModalOn");
        break;
      case "addItemModal":
        setIsOn("addItemModalOn");
        setInnerIsOn("logInButton");

        break;
      case "deleteItemAlertModal":
        setIsOn("deleteItemAlertModalOn");
        break;
      case "logInButton":
        setInnerIsOn("logOutButton");
        break;
      case "logOutButton":
        setInnerIsOn("logInButton");
        break;
      case "deleteItem":
        setInnerIsOn("deleteGarageItemOn");
        break;
      // case "close":
      //   setIsOn("off");
      //   break;
      default:
        setIsOn("allOff");
        setInnerIsOn("allOff");
        break;
    }
    console.log(isOn);
    console.log(innerIsOn);
  };

  const addGarageItem = e => {
    e.preventDefault();
    const { title, desc, itemImage, price } = e.target;

    const newGarageItem = {
      title: title.value,
      desc: desc.value,
      image: itemImage.value,
      price: price.value,
      id: garageItems.length + 1
    };

    setGarageItems([...garageItems, newGarageItem]);
    setRecentlyAddedItems([...recentlyAddedItems, newGarageItem]);

    console.log(recentlyAddedItems);

    e.target.reset();
  };

  const deleteGarageItem = id => {
    const filteredAllGarageItemsArray = garageItems.filter(
      item => id !== item.id
    );
    const filteredRecentItems = recentlyAddedItems.filter(
      item => id !== item.id
    );

    setGarageItems(filteredAllGarageItemsArray);
    setRecentlyAddedItems(filteredRecentItems);
  };

  const sendMessage = e => {
    e.preventDefault();

    const newMail = {
      name: e.target.name.value,
      mail: e.target.mail.value,
      desc: e.target.desc.value,
      id: usersMailsArray.length + 1
    };
    setUsersMailsArray([...usersMailsArray, newMail]);

    console.log(usersMailsArray);
  };
  const deleteMessage = id => {
    const filteredUsersMailsArray = usersMailsArray.filter(
      item => item.id !== id
    );

    setUsersMailsArray(filteredUsersMailsArray);

    console.log(id);
    console.log(usersMailsArray);
  };
  const counterFunction = e => {
    setBuyCounter(buyCounter + 1);
    console.log(buyCounter);
  };

  return (
    <BrowserRouter>
      <AppContext.Provider
        //garageItems: garageItems
        value={{
          garageItems,
          addGarageItem,
          deleteGarageItem,
          recentlyAddedItems,
          sendMessage,
          deleteMessage,
          usersMailsArray,
          isOn,
          toggleManager,
          innerIsOn,
          counter: counterFunction,
          buyCounter,
          resetLocalStorage
        }}
      >
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.aboutProject} component={AboutProject} />
          <Route path={routes.contact} component={Contact} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
