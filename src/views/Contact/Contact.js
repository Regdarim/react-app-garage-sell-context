import React, { useState } from "react";
import { usersMails } from "../../data/localData/usersMails";
import UsersMails from "../../components/UsersMails/UsersMails";
import NavBar from "../../navigation/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  const [usersMailsArray, setUsersMailsArray] = useState([...usersMails]);

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

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="columns section">
          <div className="column">
            <ContactForm sendMessage={sendMessage} />
          </div>

          <div className="container column">
            <UsersMails
              usersMails={usersMailsArray}
              deleteMessage={deleteMessage}
            />
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
