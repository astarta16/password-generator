import CopyImage from "./assets/icon-copy.svg";
import { useState } from "react";
import {
  Title,
  CardContainer,
  Card,
  SecondCard,
  Paragraph,
  CopyIcon,
  RangeInputContainer,
  RangeInputLabel,
  RangeInput,
  RangeValue,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  StrengthBlock,
  StrengthText,
  Button,
} from "./style";

function App() {
  const [rangeValue, setRangeValue] = useState(10);

  const checkBoxText = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "@#$%^&*()_+~|}{[]></-=";

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
          <div>
            {checkBoxText.map((text, index) => (
              <CheckboxContainer key={index}>
                <CheckboxInput type="checkbox" />
                <CheckboxLabel>{text}</CheckboxLabel>
              </CheckboxContainer>
            ))}
          </div>

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
