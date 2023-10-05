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
  StrengthRectangleContainer,
  StrengthText,
  StrengthBlock,
  StrengthRectangle,
  Button,
} from "./style";

function App() {
  const [rangeValue, setRangeValue] = useState(10);
  const [strength, setStrength] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  function handleStrength(event, text) {
    if (text === "Include Uppercase Letters") {
      setUpperCase(!upperCase);
    } else if (text === "Include Lowercase Letters") {
      setLowerCase(!lowerCase);
    } else if (text === "Include Numbers") {
      setNumber(!number);
    } else {
      setSymbol(!symbol);
    }

    if (event.target.checked) {
      setStrength((prev) => prev + 1);
    } else {
      setStrength((prev) => prev - 1);
    }
  }

  const checkBoxText = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  function generatePassword() {
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "@#$%^&*()_+~|}{[]></-=";

    let chars = "";
    if (upperCase) {
      chars += upperCaseSet;
    }

    if (lowerCase) {
      chars += lowerCaseSet;
    }

    if (number) {
      chars += numberSet;
    }

    if (symbol) {
      chars += symbolSet;
    }

    if (!upperCase && !lowerCase && !number && !symbol) {
      setPassword("Please mark at least one box");
      return;
    }

    let newPassword = "";

    for (let i = 0; i < rangeValue; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  }

  return (
    <div>
      <Title>password generator</Title>
      <CardContainer>
        <Card>
          <Paragraph>{password}</Paragraph>
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
                <CheckboxInput
                  onChange={(event) => handleStrength(event, text)}
                  type="checkbox"
                />
                <CheckboxLabel>{text}</CheckboxLabel>
              </CheckboxContainer>
            ))}
          </div>

          <StrengthBlock>
            <StrengthText>STRENGTH</StrengthText>
            <StrengthRectangleContainer>
              <StrengthRectangle />
              <StrengthRectangle />
              <StrengthRectangle />
              <StrengthRectangle />
            </StrengthRectangleContainer>
          </StrengthBlock>
          <Button onClick={generatePassword}>Generate</Button>
        </SecondCard>
      </CardContainer>
    </div>
  );
}

export default App;
