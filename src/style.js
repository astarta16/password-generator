import styled from "styled-components";

export const Title = styled.h1`
  color: grey;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
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
    width: 100%;
    padding: 10px;
  }
`;

export const SecondCard = styled.div`
  width: 100%;
  background-color: #24232c;
  border-radius: 7px;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const CopyIcon = styled.img`
  cursor: pointer;
  width: 20px;
`;

export const RangeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const RangeInputLabel = styled.label`
  color: white;
  margin-right: 10px;
`;

export const RangeInput = styled.input`
  width: 100%;
  margin-top: 10px;
  accent-color: #a4ffaf;
  cursor: pointer;
`;

export const RangeValue = styled.p`
  color: #a4ffaf;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  color: #e6e5ea;
  margin-top: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
  accent-color: #a4ffaf;
`;

export const CheckboxLabel = styled.label`
  color: #e3e2e4;
`;

export const StrengthBlock = styled.div`
  display: flex;
  background-color: #18171f;
  color: #817d92;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  width: 476px;
  height: 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    flex-direction: row;
    height: auto;
    align-items: flex-start;
  }
`;

export const StrengthText = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const StrengthRectangleContainer = styled.div`
  display: flex;
  gap: 3px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const StrengthRectangle = styled.div`
  width: 10px;
  height: 28px;
  background-color: #0a140b;
  border: 2px solid white;
  border-radius: px;
  margin-right: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  background-color: #a4ffaf;
  color: #24232c;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
