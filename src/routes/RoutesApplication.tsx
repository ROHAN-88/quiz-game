import React from "react";
import MainPage from "../pages/MainPage";
import Card from "../component/Card";
import Score from "../component/Score";

const RoutesApplication = [
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "score",
    element: <Score />,
  },
  {
    path: "quiz",
    element: <Card />,
  },
];
export default RoutesApplication;
