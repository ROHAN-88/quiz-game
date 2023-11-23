import React, { useEffect, useState } from "react";
import "./App.css";

import Card from "./component/Card";

function App() {
  return (
    <>
      <div
        style={{ textAlign: "center", marginBottom: "2rem", color: "#7743DB" }}
      >
        <h2 style={{ fontSize: "40px" }}>Quiz Game </h2>
        <h4>Select your Answer</h4>
      </div>

      <Card />
    </>
  );
}

export default App;
