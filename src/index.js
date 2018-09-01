import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./styles.css";

import Test from "./components/test/index";

function App() {
  App.state = {
    hello: "world"
  };

  const handleClick = () => {
    alert(App.state.hello);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Test enter={"I exist"} />

      <button onClick={handleClick}>Toggle Me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
