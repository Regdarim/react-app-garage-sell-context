import React, { useContext } from "react";
import { usersMails } from "../../data/localData/usersMails";

import UsersMails from "../../components/UsersMails/UsersMails";
import NavBar from "../../navigation/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="columns section">
          <div className="column">
            <ContactForm />
          </div>
          <div className="container column">
            <UsersMails />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

// class Contact extends React.Component {
//   state = {
//     usersMailsArray: [...usersMails],
//     filteredUsersMailsArray: []
//   };

//   sendMessage = e => {
//     e.preventDefault();

//     const newMail = {
//       name: e.target.name.value,
//       mail: e.target.mail.value,
//       desc: e.target.desc.value,
//       id: this.state.usersMailsArray.length + 1
//     };
//     this.setState(prevState => ({
//       usersMailsArray: [...prevState.usersMailsArray, newMail]
//     }));

//     console.log("Message Send!");
//     console.log(...this.state.usersMailsArray);
//   };
//   deleteMessage = id => {
//     const filteredUsersMailsArray = this.state.usersMailsArray.filter(
//       item => id !== item.id
//     );
//     console.log(filteredUsersMailsArray);
//     this.setState({
//       usersMailsArray: this.filteredUsersMailsArray
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <NavBar />
//           <div className="columns section">
//             <div className="column">
//               <ContactForm sendMessage={this.sendMessage} />
//             </div>

//             <div className="container column">
//               <UsersMails
//                 usersMails={this.state.usersMailsArray}
//                 deleteMessage={this.deleteMessage}
//               />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
