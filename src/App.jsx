import styled from "styled-components";
import EntryPage from "./components/EntryPage";
import GamePage from "./components/GamePage";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleBtn=()=>{
    setIsGameStarted(!isGameStarted);
  }

  return <>{isGameStarted ? <GamePage /> : <EntryPage toggle={toggleBtn} />}</>;
}

export default App;
