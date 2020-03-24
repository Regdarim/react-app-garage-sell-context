import React, { useContext } from "react";
import NavBar from "../../navigation/NavBar";
import AppContext from "../../context/context";

const AboutProject = () => {
  const context = useContext(AppContext);
  return (
    <div className="container">
      <NavBar />
      <div className="container section">
        <h1 className="title is-3">About The Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi.
          Eligendi adipisci dicta necessitatibus doloribus praesentium atque
          quae velit suscipit mollitia quod repellat accusamus ut illum placeat
          soluta, nobis esse!
        </p>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default AboutProject;
