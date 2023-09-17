import { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const RollDice = () => {
    if (selectedNumber === undefined) {
      setError("Please select a number first");
      return;
    }

    const randomNumber = getRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <div>
        <Navigation>
          <div className="leftSide">
            <h1>{score}</h1>
            <p>Total Score</p>
          </div>
          <div className="rightSide">
            <h2>{error}</h2>
            <div className="rightSideBtn">
              {arrNumber.map((value, i) => {
                return (
                  <Button
                    isSelected={value === selectedNumber}
                    onClick={() => {
                      setError("");
                      setSelectedNumber(value);
                    }}
                    key={i}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
            <div>
              <p>Select number</p>
            </div>
          </div>
        </Navigation>
        <RoleDice
          currentDice={currentDice}
          setCurrentDice={setCurrentDice}
          RollDice={RollDice}
          resetScore={resetScore}
        />

      </div>
    </div>
  );
};
export default GamePage;

const Navigation = styled.nav`
  margin: 0 auto;
  padding: 2px 20px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .leftSide {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .leftSide h1 {
    width: 62px;
    height: 92px;
    color: #000;
    font-family: Poppins;
    font-size: 80px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .leftSide p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .rightSide {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }

  h2 {
    color: red;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .rightSideBtn {
    display: flex;
    align-items: flex-end;
    gap: 30px;
  }

  .rightSide p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Button = styled.button`
  display: flex;
  width: 72px;
  height: 72px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background: #fff;

  cursor: pointer;
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (!isSelected ? "black" : "white")};
`;
