import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import AboutProject from "../AboutProject/AboutProject";
import Contact from "../Contact/Contact";
import { routes } from "../../routes";
import AppContext from "../../context/context";
import { initialGarageItems } from "../../data/localData/initialGarageItems";

const Root = () => {
  const [garageItems, setGarageItems] = useState([...initialGarageItems]);
  const [recentlyAddedItems, setRecentlyAddedItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

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

  // if (window.location.pathname === routes.home) setIsActive(true);

  // console.log(window.location.pathname);
  // console.log(routes.home);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          garageItems,
          addGarageItem,
          deleteGarageItem,
          recentlyAddedItems,
          isActive
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
