import React, { useContext } from "react";
import UserMail from "../UserMail/UserMail";
import AppContext from "../../context/context";

const UsersMails = () => {
  const context = useContext(AppContext);
  const { usersMailsArray } = context;

  return (
    <>
      <ul>
        {usersMailsArray.map(item => {
          const { id } = item;
          return (
            <li key={id}>
              <UserMail {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersMails;
