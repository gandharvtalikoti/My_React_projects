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

const PatientItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;

const PatientManagementForm: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    admissionStatus: "",
    covidStatus: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
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

  useEffect(() => {
    // You can perform additional actions when patients state changes, like updating the backend.
    console.log("Patients updated::", patients);
  }, [patients]);

  return (
    <Container>
      <Form>
        <label>
        </label>
          Name:
          <input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
          />
        <label>
          Admission Status: 
          <input
            type="text"
            name="admissionStatus"
            value={newPatient.admissionStatus}
            onChange={handleInputChange}
          />
        </label>
        <label>
          COVID Status:
          <input
            type="text"
            name="covidStatus"
            value={newPatient.covidStatus}
            onChange={handleInputChange}
          />
        </label>
        <Button type="button" onClick={addPatient}>
          Add Patient
        </Button>
      </Form>

      <PatientList>
        {patients.map((patient, index) => (
          <PatientItem key={index}>
            <div>
              <strong>{patient.name}</strong>
              <p>Admission Status: {patient.admissionStatus}</p>
              <p>COVID Status: {patient.covidStatus}</p>
            </div>
            <Button type="button" onClick={() => removePatient(index)}>
              Remove
            </Button>
          </PatientItem>
        ))}
      </PatientList>
    </Container>
  );
};

export default PatientManagementForm;
