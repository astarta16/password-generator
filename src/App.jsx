import styled from "styled-components";
import CopyImage from "./assets/icon-copy.svg";

const Title = styled.h1`
  color: grey;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: #24232c;
  color: #e6e5ea;
  padding: 20px;
  width: 100%;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SecondCard = styled.div`
  background-color: #24232c;
  width: 100%;
  border-radius: 7px;
  padding: 30px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const CopyIcon = styled.img`
  width: 20px;
`;

function App() {
  return (
    <div>
      <Title>password generator</Title>
      <CardContainer>
        <Card>
          <Paragraph>randblabla</Paragraph>
          <CopyIcon src={CopyImage} alt="Copy Icon" />
        </Card>
        <SecondCard></SecondCard>
      </CardContainer>
    </div>
  );
}

export default App;
