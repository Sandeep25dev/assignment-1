import React, { useState } from "react";
import styled from "styled-components";
import { FormData } from "../types";
import { Button } from "../styled/Button";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  nextStep: () => void;
}

const PersonalDetails: React.FC<Props> = ({
  formData,
  setFormData,
  nextStep,
}) => {
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
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
        <h2>Personal Details</h2>

        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Button type="submit">Next</Button>
      </FormContainer>
    </Container>
  );
};

export default PersonalDetails;

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
  justify-content: center;
  margin: auto;
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
