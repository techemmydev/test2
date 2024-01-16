import { createContext, useState } from "react";

export const RedContext = createContext();

const ContextCard = ({ children }) => {
  const [person, setPerson] = useState({
    fullName: "",
    CardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });

  const [people, setPeople] = useState([]);

  const valueToBePassed = {
    person: person,
    setPerson: setPerson,
    people: people,
    setPeople: setPeople,
  };

  return (
    <RedContext.Provider value={valueToBePassed}>
      {children}
    </RedContext.Provider>
  );
};

export default ContextCard;
