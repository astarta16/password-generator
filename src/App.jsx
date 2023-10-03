import styled, { css } from "styled-components";
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

const mobileMediaQuery = css`
  width: 100%;
  padding: 10px;
`;

const Card = styled.div`
  background-color: #24232c;
  color: #e6e5ea;
  padding: 20px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    ${mobileMediaQuery}
  }
`;

const SecondCard = styled.div`
  width: 100%;
  background-color: #24232c;
  border-radius: 7px;
  padding: 30px;

  @media (max-width: 768px) {
    ${mobileMediaQuery}
  }
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
`;

const RangeValue = styled.p`
  color: #a4ffaf;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  color: #e6e5ea;
  margin-top: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #e3e2e4;
`;

const StrengthBlock = styled.div`
  display: flex;
  background-color: #18171f;
  color: #817d92;
  border-radius: 5px;

  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  width: 476px;
  height: 72px;

  @media (max-width: 768px) {
    ${mobileMediaQuery}
    flex-direction: column;
    height: auto;
  }
`;

const StrengthText = styled.p`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  background-color: #a4ffaf;
  color: #24232c;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
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
            <RangeValue>{rangeValue}</RangeValue>
          </RangeInputContainer>
          <RangeInput
            type="range"
            min="0"
            max="20"
            value={rangeValue}
            onChange={(event) => setRangeValue(event.target.value)}
          />
          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxLabel htmlFor="uppercase">
              Include Uppercase Letters
            </CheckboxLabel>
          </CheckboxContainer>

          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxLabel htmlFor="lowercase">
              Include Lowercase Letters
            </CheckboxLabel>
          </CheckboxContainer>

          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxLabel htmlFor="numbers">Include Numbers</CheckboxLabel>
          </CheckboxContainer>

          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxLabel htmlFor="symbols">Include Symbols</CheckboxLabel>
          </CheckboxContainer>
          <StrengthBlock>
            <StrengthText>STRENGTH</StrengthText>
          </StrengthBlock>
          <Button>Generate</Button>
        </SecondCard>
      </CardContainer>
    </div>
  );
}

export default App;
