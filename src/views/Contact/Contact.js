import React from "react";
import { usersMails } from "../../data/localData/usersMails";
import UsersMails from "../../components/UsersMails/UsersMails";
import NavBar from "../../navigation/NavBar";
// import ContactForm from "../../components/ContactForm/ContactForm";

class Contact extends React.Component {
  state = {
    usersMailsArray: [...usersMails]
  };

  sendMessage = e => {
    e.preventDefault();

    const newMail = {
      name: e.target.name.value,
      mail: e.target.mail.value,
      desc: e.target.desc.value,
      id: this.state.usersMailsArray.length + 1
    };
    // console.log(this.newMail);
    this.setState(prevState => ({
      usersMailsArray: [...prevState.usersMailsArray, newMail]
    }));

    // e.target.reset();
    console.log("Message Send!");

    console.log(...this.state.usersMailsArray);
  };
  deleteMessage = id => {
    console.log("hi");
  };

  render() {
    return (
      <>
        <div className="container">
          <NavBar />
          <div className="columns section">
            <form onSubmit={this.sendMessage}>
              <input type="text" name="name" />
              <input type="text" name="mail" />

              <input type="text" name="desc" />

              <button type="submit">Add New Item</button>
            </form>

            {/* <form
            // onSubmit={this.sendMesseage}
            >
              <h1 className="title is-3">Contact Form</h1>
              <div className="field">
                <label className="label">Name</label>
                <div className="control ">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    name="name"
                  />
                </div>
              </div>

              <input
                className="input"
                type="text"
                placeholder="Email"
                name="mail"
              />

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="desc"
                  ></textarea>
                </div>
              </div>
              <div className="container">
                <button
                  className="button is-primary "
                  type="submit"
                  onClick={this.sendMessage}
                >
                  Send
                </button>
              </div>
            </form> */}
            <div className="container column">
              <UsersMails
                usersMails={this.state.usersMailsArray}
                deleteMessage={this.deleteMessage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
