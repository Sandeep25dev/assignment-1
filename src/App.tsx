import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";
import PaymentDetails from "./components/PaymentDetails";
import Review from "./components/Review";
import { FormData } from "./types";

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const nextStep = (step: string) => {
    navigate(step);
  };

  const prevStep = (step: string) => {
    navigate(step);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PersonalDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={() => nextStep("/payment")}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PaymentDetails
              formData={formData}
              setFormData={setFormData}
              nextStep={() => nextStep("/review")}
              prevStep={() => prevStep("/")}
            />
          }
        />
        <Route
          path="/review"
          element={
            <Review formData={formData} prevStep={() => prevStep("/payment")} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
