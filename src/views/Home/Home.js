import React, { useContext } from "react";
import GarageItemList from "../../components/GarageItemsList/GarageItemList";
import NavBar from "../../navigation/NavBar";
import RecentlyAdded from "../../components/RecetlyAdded/RecentlyAdded";
import AskQuestionModal from "../../components/AskQuestionModal/AskQuestionModal";
import AppContext from "../../context/context";

const Home = () => {
  const context = useContext(AppContext);
  const { isOn } = context;

  const _renderRecentlyAdded = () => (
    <div className="column">
      <RecentlyAdded />
    </div>
  );
  const _renderGarageItemList = () => (
    <div className="column">
      <GarageItemList />
    </div>
  );

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="column section">
          {_renderRecentlyAdded()}
          {_renderGarageItemList()}
          {isOn === "askQuestionModalOn" && <AskQuestionModal />}
        </div>
      </div>
    </>
  );
};

export default Home;
