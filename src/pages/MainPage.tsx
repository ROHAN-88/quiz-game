import React from "react";
import Card from "../component/Card";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ textAlign: "center", marginBottom: "2rem", color: "#7743DB" }}
      >
        <h2 style={{ fontSize: "40px" }}>Quiz Game </h2>
        <h4>Select your Answer</h4>
      </div>

      <Button variant="contained" onClick={() => navigate("/quiz")}>
        {" "}
        Start Quiz
      </Button>
      {/* <Outlet /> */}
    </>
  );
};

export default MainPage;
