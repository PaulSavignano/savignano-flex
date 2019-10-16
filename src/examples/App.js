import React from "react";

import "./App.css";
import Flex from "../lib";

function App() {
  return (
    <div className="App">
      <Flex alignItems="center" flexFlow="row wrap">
        <p>This</p>
        <p>Content</p>
        <p>Is</p>
        <p>Horizontal</p>
      </Flex>
    </div>
  )
};

export default App;
