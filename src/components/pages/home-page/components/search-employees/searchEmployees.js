import "./searchEmployees.css";
import Form from "react-bootstrap/Form";

export default function SearchEmployees({ findPerson }) {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Введіть ім'я працівника"
        onChange={(e) => findPerson(e.target.value.toLowerCase())}
      />
    </>
  );
}
