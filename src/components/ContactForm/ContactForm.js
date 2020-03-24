import React from "react";
const ContactForm = props => (
  <>
    <form className="container " onSubmit={props.sendMessage}>
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
      <div className="field">
        <label className="label">Email</label>
        <p className="control ">
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="mail"
          />
        </p>
      </div>
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
        <button className="button is-primary " type="submit">
          Send(form)
        </button>
      </div>
    </form>
  </>
);

export default ContactForm;
