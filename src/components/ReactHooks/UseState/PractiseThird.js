import React, { useState } from "react";
import AskQuestionModal from "../../AskQuestionModal/AskQuestionModal";

const PractiseThird = () => {
  const [isActive, toggle] = useState(false);

  return (
    <>
      <button onClick={() => toggle(!isActive)}>Open Modal</button>
      <h1>{`${isActive}`}</h1>
      {isActive && (
        <AskQuestionModal
          toggleModalState={toggle}
          closeModal={() => toggle(!isActive)}
          title="Ask Question About The Item"
        ></AskQuestionModal>
      )}
    </>
  );
};

export default PractiseThird;
