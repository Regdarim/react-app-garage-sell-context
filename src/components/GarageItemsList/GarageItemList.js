import React, { useContext } from "react";
import GarageItem from "../GarageItem/GarageItem";
import AppContext from "../../context/context";
import DeleteItemAlertModal from "../DeleteItemAlertModal/DeleteItemAlertModal";

const GarageItemList = props => {
  const context = useContext(AppContext);
  const { isOn } = context;
  return (
    <ul>
      {context.garageItems.map(item => {
        const { id } = item;
        return (
          <li key={id}>
            <GarageItem {...item} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
};

export default GarageItemList;
