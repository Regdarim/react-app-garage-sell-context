import React, { useState } from "react";
import GarageItemList from "../../components/GarageItemsList/GarageItemList";
import NavBar from "../../navigation/NavBar";
import AddYourItemForm from "../../components/Form/AddYourItemForm";
import { initialGarageItems } from "../../data/localData/initialGarageItems";
import RecentlyAdded from "../../components/RecetlyAdded/RecentlyAdded";
import AskQuestionModal from "../../components/AskQuestionModal/AskQuestionModal";

// class Home extends React.Component {

//   state = {
//     garageItems: [...initialGarageItems],
//     recentlyAddedItems: [],
//     toggleModalState: false,
//     buyCounter: 0
//   };

//   addItem = e => {
//     e.preventDefault();

//     const newGarageItem = {
//       title: e.target.title.value,
//       desc: e.target.desc.value,
//       image: e.target.itemImage.value,
//       price: e.target.price.value,
//       id: this.state.garageItems.length + 1
//     };

//     // this.setState({
//     //   garageItems: [...this.state.garageItems, newGarageItem]
//     // });

//     this.setState(prevState => ({
//       garageItems: [...prevState.garageItems, newGarageItem],
//       recentlyAddedItems: [...prevState.recentlyAddedItems, newGarageItem]
//     }));

//     console.log(this.state.recentlyAddedItems);

//     e.target.reset();
//   };

//   deleteItem = id => {
//     const filteredAllGarageItemsArray = this.state.garageItems.filter(
//       item => id !== item.id
//     );
//     const filteredRecentItems = this.state.recentlyAddedItems.filter(
//       item => id !== item.id
//     );
//     this.setState({
//       garageItems: [...filteredAllGarageItemsArray],
//       recentlyAddedItems: [...filteredRecentItems]
//     });
//   };

//   toggleModal = e => {
//     this.setState(prevState => ({
//       toggleModalState: !prevState.toggleModalState
//     }));
//   };

//   counter = e => {
//     this.setState(prevState => ({
//       buyCounter: prevState.buyCounter + 1
//     }));
//     console.log(this.state.buyCounter);
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <NavBar buyCounter={this.state.buyCounter} />

//           <div className="columns section">
//             <div className="column">
//               {/* <AddYourItemForm addItem={this.addItem} /> */}
//               <h1 className="title is-3 has-text-centered">Recently Added</h1>

//               <div className="section">
//                 {this.state.toggleModalState && (
//                   <AskQuestionModal
//                     toggleModalState={this.state.toggleModalState}
//                     closeModal={this.toggleModal}
//                     title="Ask Question About The Item"
//                   ></AskQuestionModal>
//                 )}

//                 <RecentlyAdded
//                   recentlyAddedItems={this.state.recentlyAddedItems}
//                   deleteItem={this.deleteItem}
//                 />
//               </div>
//             </div>
//             <div className="column">
//               <GarageItemList
//                 garageItems={this.state.garageItems}
//                 deleteItem={this.deleteItem}
//                 toggleModal={this.toggleModal}
//                 counter={this.counter}
//               />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

const Home = () => {
  const [garageItems, setGarageItems] = useState([...initialGarageItems]);
  const [recentlyAddedItems, setRecentlyAddedItems] = useState([]);
  const [toggleModalState, setToggleModalState] = useState(false);
  const [buyCounter, setBuyCounter] = useState(0);

  const addItem = e => {
    e.preventDefault();

    const newGarageItem = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      image: e.target.itemImage.value,
      price: e.target.price.value,
      id: garageItems.length + 1
    };

    // this.setState({
    //   garageItems: [...this.state.garageItems, newGarageItem]
    // });
    setGarageItems([...garageItems, newGarageItem]);
    setRecentlyAddedItems([...recentlyAddedItems, newGarageItem]);

    console.log(recentlyAddedItems);

    e.target.reset();
  };

  const deleteItem = id => {
    const filteredAllGarageItemsArray = garageItems.filter(
      item => id !== item.id
    );
    const filteredRecentItems = recentlyAddedItems.filter(
      item => id !== item.id
    );

    setGarageItems(filteredAllGarageItemsArray);
    setRecentlyAddedItems(filteredRecentItems);
  };

  const toggleModal = e => {
    setToggleModalState(!toggleModalState);
  };

  const counter = e => {
    setBuyCounter(buyCounter + 1);
  };

  return (
    <>
      <div className="container">
        <NavBar buyCounter={buyCounter} />

        <div className="columns section">
          <div className="column">
            {/* <AddYourItemForm addItem={this.addItem} /> */}
            <h1 className="title is-3 has-text-centered">Recently Added</h1>

            <div className="section">
              {toggleModalState && (
                <AskQuestionModal
                  toggleModalState={toggleModalState}
                  closeModal={toggleModal}
                  title="Ask Question About The Item"
                ></AskQuestionModal>
              )}

              <RecentlyAdded
                recentlyAddedItems={recentlyAddedItems}
                deleteItem={deleteItem}
              />
            </div>
          </div>
          <div className="column">
            <GarageItemList
              garageItems={garageItems}
              deleteItem={deleteItem}
              toggleModal={toggleModal}
              counter={counter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
