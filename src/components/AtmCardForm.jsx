import React from "react";
import { useContext } from "react";
import { RedContext } from "../context/ContextCard";
const AtmCardForm = () => {
  const { people } = useContext(RedContext);
  return (
    <>
      <div>
        <h2>Card Name: {people.cardName}</h2>
      </div>
    </>
  );
};

export default AtmCardForm;
