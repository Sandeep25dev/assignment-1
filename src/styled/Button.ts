import styled from "styled-components";

export const Button = styled.button`
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  height: 44px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s, color 0.3s ease-in;

  &:hover {
    background-color: #fff;
    color: #000000;
    border: 1px solid #000000;
    transition: background-color 0.3s, color 0.3s ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  background-color: #fff;
  border: 1px solid black;
  color: #000000;
  &:hover {
    background-color: #000000;
    color: #fff;
    border: 1px solid transparent;
    transition: background-color 0.3s, color 0.3s ease-in;
  }
`;
