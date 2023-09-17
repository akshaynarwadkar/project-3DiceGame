import styled from "styled-components";

const EntryPage = ({ toggle }) => {
  return (
    <Container>
      <img src="../src/images/dices1.png"></img>
      <div className="heading">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default EntryPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  .heading {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  display: flex;
  font-size: 16px;
  width: 220px;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
