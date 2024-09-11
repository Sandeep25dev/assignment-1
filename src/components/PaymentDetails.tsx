import React, { useState } from "react";
import styled from "styled-components";
import { FormData } from "../types";
import { Button, OutlinedButton } from "../styled/Button";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const PaymentDetails: React.FC<Props> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [errors, setErrors] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { cardNumber: "", expirationDate: "", cvv: "" };

    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
      valid = false;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Expiration date must be in MM/YY format";
      valid = false;
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Payment Details</h2>

        <Input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
        />
        {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}

        <Input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          placeholder="Expiration Date (MM/YY)"
        />
        {errors.expirationDate && (
          <ErrorMessage>{errors.expirationDate}</ErrorMessage>
        )}

        <Input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          placeholder="CVV"
        />
        {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
        <BtnsContainer>
          <OutlinedButton type="button" onClick={prevStep}>
            <FaArrowLeft />
          </OutlinedButton>
          <Button type="submit">Submit</Button>
        </BtnsContainer>
      </FormContainer>
    </Container>
  );
};

export default PaymentDetails;

// Styled Components

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

const BtnsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 0 10px;
`;
