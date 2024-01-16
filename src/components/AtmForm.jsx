import React, { useContext } from "react";
import { RedContext } from "../context/ContextCard";

const AtmForm = () => {
  const { person, setPerson } = useContext(RedContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      person.fullName &&
      person.cardNumber &&
      person.month &&
      person.year &&
      person.cvv
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ fullName: "", cardNumber: "", month: "", year: "", cvv: "" });
    }
  };

  return (
    <article className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="fullName">CardHolder Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={person.fullName}
            onChange={handleChange}
            placeholder="e.g Jane Applessed"
          />
        </div>
        <div className="form-control">
          <label htmlFor="cardNumber">Card Number </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="e.g 1234 5678 9123 00000"
            value={person.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="expirationDate">EXP.DATE (MM/YY) </label>
          <div className="date-inputs">
            <input
              type="text"
              id="month"
              name="month"
              placeholder="MM"
              value={person.month}
              onChange={handleChange}
            />
            <span>/</span>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="YY"
              value={person.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={person.cvv}
            onChange={handleChange}
            placeholder="e.g 123"
          />
        </div>
        <button type="submit" className="btn">
          Confirm
        </button>
      </form>
    </article>
  );
};

export default AtmForm;
