import React, { useContext } from "react";
import GarageItem from "../GarageItem/GarageItem";
import AppContext from "../../context/context";

const GarageItemList = props => {
  const { toggleModal, counter } = props;
  const context = useContext(AppContext);

  return (
    <ul>
      {context.garageItems.map(item => {
        const { id } = item;
        return (
          <li key={id}>
            <GarageItem {...item} toggleModal={toggleModal} counter={counter} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
};

export default GarageItemList;
