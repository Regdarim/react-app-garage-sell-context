import React from "react";

import UserMail from "../UserMail/UserMail";

const UsersMails = props => {
  const { usersMails, deleteMessage } = props;

  return (
    <>
      <ul>
        {usersMails.map(item => {
          const { id } = item;
          return (
            <li key={id}>
              <UserMail {...item} deleteMessage={deleteMessage} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersMails;
