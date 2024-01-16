import React from "react";
import { useContext } from "react";
import { RedContext } from "../context/ContextCard";
const AtmCardForm = () => {
  const { person } = useContext(RedContext);
  return (
    <>
      <div>
        <h2>Card Name{person.fullName}</h2>
        <p>{person.CardNumber}</p>
      </div>
    </>
  );
};

export default AtmCardForm;
