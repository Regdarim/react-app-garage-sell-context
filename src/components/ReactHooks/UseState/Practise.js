import React, { useState } from "react";

const Practise = () => {
  const [counter, setCounter] = useState(0);

  //   const add = () => {
  //     setCounter(counter + 1);
  //   };
  //   const minus = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

// class Practise extends React.Component {
//   state = {
//     counter: 0
//   };

//   add = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   };

//   minus = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.minus}>-</button>
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.add}>+</button>
//       </div>
//     );
//   }
// }
export default Practise;
