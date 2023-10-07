// src/App.js
import React from "react";
import QuestionForm from "./components/QuestionForm";

const App = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Feli cumple chunita {"<3"}
      </h1>
      <QuestionForm />
      {/* Agrega lógica para mostrar QuestionResult si se responden incorrectamente más de 3 veces */}
    </div>
  );
};

export default App;
