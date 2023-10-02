import styled from "styled-components";
import CopyImage from "./assets/icon-copy.svg";

const Title = styled.h1`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
`;

const FirstCard = styled.div`
  background-color: #24232c;
  color: #e6e5ea;
  padding: 20px;
  width: 540px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const CopyIcon = styled.img`
  width: 20px; /* Adjust the width as needed */
`;

function App() {
  return (
    <div>
      <Title>password generator</Title>
      <FirstCard>
        <Paragraph>randomblablabla</Paragraph>
        <CopyIcon src={CopyImage} alt="Copy Icon" />
        
      </FirstCard>
    </div>
  );
}

export default App;
