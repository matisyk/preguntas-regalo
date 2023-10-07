// src/components/QuestionForm.js
import React, { useState, useEffect } from "react";
import { Button, TextField, Zoom, IconButton } from "@material-ui/core";
import { CheckCircleOutline, Cancel } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  questionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "#f0f0f0",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  feedbackIcons: {
    marginTop: theme.spacing(1),
  },
  gifts: {
    marginTop: theme.spacing(2),
  },
}));

const questions = [
  "¿Cuándo fue nuestro primer beso?",
  "¿Cuándo nos pusimos de novios?",
  "¿Cuanto te quiero (del 1 al 10)?",
  "¿Cual fue nuestro primer concierto juntos?",
  "¿Cuando fue la primera vez que lo hicimos?",
  "¿Cuantos dias mas grande soy yo?",
  "¿Cual es nuestro restaurante favorito?",
  "¿Quien es mas cariñoso?",
  "¿Quien es mas celoso?",
  "¿Quien es mas desordenado?",
  "¿Quien es mas gracioso?",
  "¿Cual es el plan de mati favorito?",
  "¿Cual es el plan de cande favorito?",
  "¿Que tan especial sos para mi?",
  "¿Cual es nuestro equipo de futbol favorito?",
  "¿A que no adivinas que te regale?",
  "Un poquito mas",
  "Te doy una pista: es algo muy cute",
  "Te amo hasta kingswood ida y vuelta <3",
  "Que tengas el cumple mas lindo de todos, loveu tonsssss",
];

const QuestionForm = () => {
  const classes = useStyles();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [tries, setTries] = useState(0);
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [showGifts, setShowGifts] = useState(false);

  useEffect(() => {
    let timeout;
    if (showTick || showCross) {
      timeout = setTimeout(() => {
        setShowTick(false);
        setShowCross(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [showTick, showCross]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = getCorrectAnswer(questionIndex);
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
        setAnswer("");
        setTries(0);
        setShowTick(true);
      } else {
        // Todos las preguntas han sido contestadas correctamente
        setShowGifts(true);
      }
    } else {
      setTries(tries + 1);
      setShowCross(true);
    }
  };

  const getCorrectAnswer = (index) => {
    // Define las respuestas correctas para cada pregunta
    const correctAnswers = [
      "30/5/2021",
      "1/11/2021",
      "20",
      "Conociendo rusia",
      "18/7/2021",
      "233",
      "Vaffanculo",
      "Cande",
      "Cande",
      "Mati",
      "Mati",
      "Ir al parque",
      "Quedarse viendo una peli",
      "Muchisimo",
      "Lanus",
      "",
      "",
      "",
      "Yo a vos",
      "",
    ];
    return correctAnswers[index];
  };

  return (
    <div className={classes.questionContainer}>
      <h2>Pregunta {questionIndex + 1}:</h2>
      <h3>{`${questions[questionIndex]}`}</h3>
      <form
        onSubmit={handleAnswerSubmit}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Tu respuesta"
          variant="outlined"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Enviar respuesta
        </Button>
      </form>
      <div className={classes.feedbackIcons}>
        <Zoom in={showTick}>
          <IconButton color="primary">
            <CheckCircleOutline />
          </IconButton>
        </Zoom>
        <Zoom in={showCross}>
          <IconButton color="secondary">
            <Cancel />
          </IconButton>
        </Zoom>
        {showGifts && (
          <div className={classes.gifts}>
            <h2 variant="h5">¡Ganaste estos regalos!</h2>
            <img src="IMG_4702.jpg" alt="regalos" width="300px" />
            <ul>
              <li>Muchos besitos</li>
              <li>Muchos abracitos</li>
              <li>Muchos masajitos</li>
              <li>Muchisimo amor</li>
              <li>1 día de spa y campo</li>
              <li>Ir a escuchar a Harry Styles en pantallas holograficas</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;
