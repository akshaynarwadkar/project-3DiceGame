import styled from "styled-components";

const RulesPage = () => {
  return (
    <Container>
      <h1>How to place the Dice Game</h1>
      <p>Select an number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be deducted </p>
    </Container>
  );
};
export default RulesPage;

const Container = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;

  h1 {
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
  }
`;
