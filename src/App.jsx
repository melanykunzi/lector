import { useState } from "react";
import styled from "styled-components";
import DialogPractice from "./components/DialogPractice";

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  resize: vertical;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [userText, setUserText] = useState("");
  const [dialogues, setDialogues] = useState([]);

  const handleAddText = () => {
    if (userText.trim() !== "") {
      const userDialogues = userText.split("-");
      const cleanedDialogues = userDialogues
        .map((dialog) => dialog.trim())
        .filter((dialog) => dialog !== "");

      setDialogues([...dialogues, ...cleanedDialogues]);
      setUserText("");
    }
  };

  return (
    <AppContainer>
      <Title>Práctica de Diálogos de Teatro</Title>
      <p>&#127917;&#127917;</p>
      <Textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        placeholder="Ingrese el texto completo con diálogos"
        rows="10"
      />
      <br />
      <AddButton onClick={handleAddText}>Agregar Texto</AddButton>
      <DialogPractice dialogues={dialogues} />
      <p>Tené en cuenta que cuando cargues los diálogos tienen que estar separados por un guión: -</p>
      <p>Ejemplo:</p>
      <p>-Romeo: Sigo diciendo que no deberían quitarme las esperanzas.<br/>-Benvolio: Solo te estoy aconsejando, no sería buena idea que te unieras con una Capuleto, pero no te quitare tus locas esperanzas.</p>
      <p>suerte loco</p>
    </AppContainer>
  );
}

export default App;

