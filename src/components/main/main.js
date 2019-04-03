import React from "react";

const Main = ({ onInit }) => (
  <div>
    Hello I'm the main container
    <button onClick={() => onInit()}>Click Me</button>
  </div>
);

export default Main;
