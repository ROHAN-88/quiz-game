import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
interface props {
  count?: number;
}
const Score = (props: props) => {
  const { count } = props;

  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/")} style={{ margin: "4rem 0" }}>
        {" "}
        GO to Home
      </Button>
      <h1 style={{ fontSize: "30px" }}>Score :{count} </h1>
    </>
  );
};

export default Score;
