import React from "react";

const UserMail = props => (
  <>
    <div className="section is-danger">
      <a className="delete is-pulled-right" onClick={props.deleteMessage}></a>
      <h2>{props.name}</h2>
      <h3>{props.mail}</h3>
      <p>{props.desc} </p>
    </div>
  </>
);

export default UserMail;
