import React, { FormEvent, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const App1 = () => {
  const patient = { name: "", age: 0 };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current!=null) {
      patient.name = nameRef.current.value;
    }
    if (ageRef.current != null) {
      patient.age = parseInt(ageRef.current.value);
      
    }
    console.log(patient);
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary">Add patient</button>
      </div>
    </form>
  );
};

export default App1;
