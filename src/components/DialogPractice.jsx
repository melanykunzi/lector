import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import styled from "styled-components";

const NextButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ResetButton = styled.button`
  background-color: red;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: #b81c0087;
  }
`;

function DialogPractice({ dialogues }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextDialogue = () => {
    if (currentIndex < dialogues.length) {
      const speech = new SpeechSynthesisUtterance(dialogues[currentIndex]);
      speech.rate = 1.2;
      speech.pitch = 1.0;
      speechSynthesis.speak(speech);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const reiniciarDialogos = () => {
    setCurrentIndex(0)
  }

  return (
    <div>
      <p>{dialogues[(currentIndex-1)]}</p>
      <p>{dialogues[currentIndex]}</p>
      <NextButton onClick={handleNextDialogue}>Siguiente Diálogo</NextButton>
      <br/>
      <ResetButton onClick={reiniciarDialogos}>Reiniciar Diálogos</ResetButton>
    </div>
  );
}

// Define la validación de props utilizando PropTypes
DialogPractice.propTypes = {
  dialogues: PropTypes.array.isRequired,
};

export default DialogPractice;
