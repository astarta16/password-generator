import styled from "styled-components";
import CopyImage from "./assets/icon-copy.svg";
import { useState } from "react";

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
  width: 100%;

  background-color: #24232c;

  border-radius: 7px;
  padding: 30px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const CopyIcon = styled.img`
  width: 20px;
`;

const RangeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const RangeInputLabel = styled.label`
  color: white;
  margin-right: 10px;
`;

const RangeInput = styled.input`
  width: 100%;
  margin-top: 10px;
  color: #8bf15c;
`;

function App() {
  const [rangeValue, setRangeValue] = useState(10);

  return (
    <div>
      <Title>password generator</Title>
      <CardContainer>
        <Card>
          <Paragraph>randblabla</Paragraph>
          <CopyIcon src={CopyImage} alt="Copy Icon" />
        </Card>
        <SecondCard>
          <RangeInputContainer>
            <RangeInputLabel>Character Length:</RangeInputLabel>
            <p style={{ color: "#a4ffaf" }}>{rangeValue}</p>
          </RangeInputContainer>
          <RangeInput
            type="range"
            min="0"
            max="20"
            value={rangeValue}
            onChange={(event) => setRangeValue(event.target.value)}
          />
        </SecondCard>
      </CardContainer>
    </div>
  );
}

export default App;
