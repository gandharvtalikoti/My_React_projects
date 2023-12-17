import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const PatientList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PatientItem = styled.li<{ covidStatus: string }>`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ covidStatus }) => (covidStatus === "positive" ? "red" : "green")};
    font-weight: bold;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const App: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    admissionStatus: "",
    covidStatus: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({
      ...newPatient,
      covidStatus: e.target.checked ? "positive" : "negative",
    });
  };

  const addPatient = () => {
    setPatients([...patients, newPatient]);
    setNewPatient({
      name: "",
      admissionStatus: "",
      covidStatus: "",
    });
  };

  const removePatient = (index: number) => {
    const updatedPatients = [...patients];
    updatedPatients.splice(index, 1);
    setPatients(updatedPatients);
  };

  const updatePatientStatus = (index: number) => {
    const updatedPatients = [...patients];
    updatedPatients[index].covidStatus =
      patients[index].covidStatus === "positive" ? "negative" : "positive";
    setPatients(updatedPatients);
  };

  useEffect(() => {
    document.title = "Hospital Management";
  }, []);

  return (
    <Container>
      <h1>Hospital Management</h1>
      <Form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          COVID Status:
          <input
            className="form-check-input"
            type="checkbox"
            name="covidStatus"
            checked={newPatient.covidStatus === "positive"}
            onChange={handleCheckboxChange}
          />
        </label>
        <Button
          className="btn btn-primary"
          type="button"
          onClick={addPatient}
        >
          Add Patient
        </Button>
      </Form>

      <PatientList>
        {patients.map((patient, index) => (
          <PatientItem key={index} covidStatus={patient.covidStatus}>
            <div>
              <input
                type="checkbox"
                checked={patient.covidStatus === "positive"}
                onChange={() => updatePatientStatus(index)}
              />
              <strong>{patient.name}</strong>
              <p>COVID Status: {patient.covidStatus}</p>
            </div>
            <Button
              className="btn btn-primary"
              type="button"
              onClick={() => removePatient(index)}
            >
              Discharge
            </Button>
          </PatientItem>
        ))}
      </PatientList>
    </Container>
  );
};

export default App;
