import React, { useState } from "react";

const PractiseSecond = () => {
  const [isTrue, toggle] = useState(false);

  return (
    <div>
      <button onClick={() => toggle(!isTrue)}>Toggle</button>
      <h1>{`To jest: ${isTrue}`}</h1>
    </div>
  );
};

export default PractiseSecond;
