import React, { useState } from "react";
import GarageItemList from "../../components/GarageItemsList/GarageItemList";
import NavBar from "../../navigation/NavBar";

import RecentlyAdded from "../../components/RecetlyAdded/RecentlyAdded";
import AskQuestionModal from "../../components/AskQuestionModal/AskQuestionModal";

const Home = () => {
  const [toggleModalState, setToggleModalState] = useState(false);
  const [buyCounter, setBuyCounter] = useState(0);

  const toggleModal = e => {
    setToggleModalState(!toggleModalState);
  };

  const counter = e => {
    setBuyCounter(buyCounter + 1);
  };

  //////////RETURN JSX SEGMENTS////////////////////RETURN SEGMENTS////////////////////RETURN SEGMENTS//////////

  const _renderAskQuestionModal = () => (
    <AskQuestionModal
      toggleModalState={toggleModalState}
      closeModal={toggleModal}
      title="Ask Question About The Item"
    ></AskQuestionModal>
  );
  const _renderRecentlyAdded = () => (
    <div className="column">
      <RecentlyAdded counter={counter} toggleModal={toggleModal} />
    </div>
  );
  const _renderGarageItemList = () => (
    <div className="column">
      <GarageItemList toggleModal={toggleModal} counter={counter} />
    </div>
  );
  //////////JSX SEGMENTS END////////////////////JSX SEGMENTS END////////////////////JSX SEGMENTS END//////////

  return (
    <>
      <div className="container">
        <NavBar buyCounter={buyCounter} />
        <div className="column section">
          {_renderRecentlyAdded()}
          {_renderGarageItemList()}
          {toggleModalState && _renderAskQuestionModal()}
        </div>
      </div>
    </>
  );
};

export default Home;
