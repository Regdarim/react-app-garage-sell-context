import React from "react";

// const _renderUserMail = () => ()

const UserMail = props => {
  const { deleteMessage, name, mail, desc, id } = props;
  return (
    <div className="section is-danger">
      <a
        className="delete is-pulled-right"
        onClick={() => deleteMessage(id)}
      ></a>
      <h2>{name}</h2>
      <h3>{mail}</h3>
      <p>{desc} </p>
      <p>{id}</p>
    </div>
  );
};

export default UserMail;
