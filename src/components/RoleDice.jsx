import { useState } from "react";
import styled from "styled-components";
import RulesPage from "./RulesPage";

const RoleDice = ({ currentDice, RollDice, resetScore }) => {
  const [showRules, setShowRules] = useState();

  const x = currentDice === 0 ? 1 : currentDice;

  return (
    <CenterContent>
      <img onClick={RollDice} src={`./assets/images/dice_${x}.png`}></img>
      <p>Click on dice to roll</p>
      <Button onClick={resetScore}>Reset Score</Button>
      <Button onClick={() => setShowRules(!showRules)} isRule>
        {showRules ? "Hide Rules" : "Show Rules"}
      </Button>
      {showRules && <RulesPage />}
    </CenterContent>
  );
};
export default RoleDice;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 180px;
    height: 180px;
  }
  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Button = styled.button`
  width: 220px;
  font-family: Poppins;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ isRule }) => (isRule ? "black" : "white")};
  color: ${({ isRule }) => (!isRule ? "black" : "white")};
`;
