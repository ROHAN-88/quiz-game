import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { dataApi } from "../lib/dataAxios";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { type } from "os";
// import { dataApi } from "./lib/dataAxios";
const Card = () => {
  const [question, setQuestion] = useState<string[]>([]);
  const [allPossibleAnswer, setAllPossibleAnswer] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>();
  const [count, setCount] = useState<number>(0);

  //!query================
  const { data, isLoading } = useQuery({
    queryKey: ["data-questions"],
    queryFn: () => dataApi(),
  });

  function combineAnswer(incorrectAnswers: string[], correctAnswer: string) {
    let allAnswer = [];
    incorrectAnswers.map((item) => {
      return allAnswer.push(item);
    });

    allAnswer.push(correctAnswer);

    //Randomize the array
    allAnswer.sort(() => Math.random() - 0.5);

    setAllPossibleAnswer(allAnswer);
  }

  const checkAnswer = (answer: string) => {
    if (answer == correctAnswer) {
      return setCount(count + 1);
    } else {
      return setCount(count - 1);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      const dataOfQuiz = data?.data?.results;
      // console.log(dataOfQuiz);
      combineAnswer(
        dataOfQuiz[questionCount]?.incorrect_answers,
        dataOfQuiz[questionCount]?.correct_answer
      );
      setQuestion(dataOfQuiz[0]?.question);
      setCorrectAnswer(dataOfQuiz[questionCount]?.correct_answer);
    }
  }, [isLoading, questionCount]);

  if (isLoading) {
    return <h1 style={{ color: "#7743DB" }}>Loading...</h1>;
  }

  // console.log(allPossibleAnswer);
  // !todo button ,use another api ,
  return (
    <>
      <p style={{ fontSize: "25px", textAlign: "center", margin: "2rem 0rem" }}>
        Count:{count}
      </p>
      <Box
        sx={{
          width: "500px",
          height: "400px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            fontSize: "18px",
            textAlign: "center",
            padding: "2rem 1rem",
            color: "#45474B",
          }}
        >
          <span>1</span>
          <span>{question}</span>
        </Box>
        {/* //?answer side  */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {allPossibleAnswer.map((item, index) => {
            return (
              <>
                <Button
                  key={index}
                  onClick={() => {
                    checkAnswer(item);
                    setQuestionCount(questionCount + 1);
                  }}
                >
                  <p> {item}</p>
                </Button>
              </>
            );
          })}
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <Button
            variant="contained"
            onClick={() => setQuestionCount(questionCount + 1)}
          >
            {" "}
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Card;
