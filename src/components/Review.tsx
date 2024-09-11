import React from "react";
import styled from "styled-components";
import { FormData } from "../types";
import { Button } from "../styled/Button";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  formData: FormData;
  prevStep: () => void;
}

const Review: React.FC<Props> = ({ formData, prevStep }) => {
  return (
    <Container>
      <ReviewContainer>
        <h2>Review Your Details</h2>
        <Summary>Name: {formData.name}</Summary>
        <Summary>Email: {formData.email}</Summary>
        <Summary>Card Number: {formData.cardNumber}</Summary>
        <Summary>Expiration Date: {formData.expirationDate}</Summary>
        <Summary>CVV: {formData.cvv}</Summary>
        <BtnsContainer>
          <Button onClick={prevStep}>
            <FaArrowLeft />
          </Button>
        </BtnsContainer>
      </ReviewContainer>
    </Container>
  );
};

export default Review;

// Styled Components

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const ReviewContainer = styled.div`
  width: 300px;
  margin: auto;
  text-align: left;
`;

const Summary = styled.p`
  font-size: 14px;
  margin: 8px 0;
`;
const BtnsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
