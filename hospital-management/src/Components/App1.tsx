import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const App1 = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
  });

  // const patient = { name: "", age: 0 };
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current != null) {
    //   patient.name = nameRef.current.value;
    // }
    // if (ageRef.current != null) {
    //   patient.age = parseInt(ageRef.current.value);
    // }
    console.log(patient);
  };

  const ref = useRef<HTMLInputElement>(null);

  //after
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "Hospital Managemnet";
  });

  // size effect

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          value={patient.name}
          ref={ref}
          onChange={(event) =>
            setPatient({ ...patient, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            value={patient.age}
            onChange={(event) =>
              setPatient({ ...patient, age: event.target.value })
            }
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Add patient</button>
      </div>
    </form>
  );
};

export default App1;
