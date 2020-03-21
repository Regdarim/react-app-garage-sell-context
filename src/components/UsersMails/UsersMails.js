import React from "react";

import UserMail from "../UserMail/UserMail";

const UsersMails = props => {
  return (
    <>
      <ul>
        {props.usersMails.map(item => {
          // console.log(props);
          // console.log(props.usersMails);
          return (
            <li key={item.id}>
              <UserMail
                name={item.name}
                mail={item.mail}
                desc={item.desc}
                id={item.id}
                deleteMessage={props.deleteMessage}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersMails;
