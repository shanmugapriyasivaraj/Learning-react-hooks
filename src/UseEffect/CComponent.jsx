// import React from "react";

// class CComponent extends React.Component {
//   state = {
//     message: "Class Component",
//     time: new Date().toString(),
//   };

//   componentDidMount() {
//     console.log("COmponent Didmount");
//     this.interval = setInterval(this.showDate, 1000);
//   }

//   componentDidUpdate() {
//     console.log("COmponent DidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("Component will unmount");
//     clearInterval(this.interval);
//   }

//   showDate = () => {
//     this.setState({ time: new Date().toString() });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.message}
//         <div>{this.state.time}</div>
//       </div>
//     );
//   }
// }

// export default CComponent;

import React from "react";
import { CounterContext } from "./CreateContext";

class CComponent extends React.Component {
  render() {
    return (
      <div className="border">
        <h1>Class Component</h1>
        <h2>{this.props.counter}</h2>
        <CounterContext.Consumer>
          {(value) => {
            return <h2>{value}</h2>;
          }}
        </CounterContext.Consumer>
        <hr></hr>
      </div>
    );
  }
}

export default CComponent;
