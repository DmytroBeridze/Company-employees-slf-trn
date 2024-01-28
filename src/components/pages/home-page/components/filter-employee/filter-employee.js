import "./filter-employee.css";
import { Button, ButtonGroup } from "react-bootstrap";

export default function FilterEmployees({ findButton, active }) {
  const buttonsData = [
    { name: "all", label: "Всі працівники", color: false },
    { name: "increase", label: "На підвищення", color: false },
    { name: "moreSalary", label: "З/П більше 1000$", color: true },
  ];

  const buttons = buttonsData.map(({ name, label, color }) => {
    const activeClass = name === active;
    const clazz = activeClass ? "btn-light" : "btn-outline-light";
    return (
      <Button
        style={
          color ? { background: "rgb(238, 183, 55)", color: "blue" } : null
        }
        key={name}
        name={name}
        // className={`btn ${clazz}`}
        className={clazz}
        onClick={(e) => {
          findButton(e.target.name);
        }}
      >
        {label}
      </Button>
    );
  });

  return (
    <>
      <ButtonGroup className=" mt-3 ">
        {buttons}
        {/* <Button
          name="all"
          className="btn-light"
          onClick={(e) => {
            findButton(e.target.name);
          }}
        >
          Всі працівники
        </Button>
        <Button
          name="increase"
          className="btn-outline-light"
          onClick={(e) => {
            findButton(e.target.name);
          }}
        >
          На підвищення
        </Button>
        <Button
          name="moreSalary"
          className="btn-outline-light"
          onClick={(e) => {
            findButton(e.target.name);
          }}
        >
          З/П більше 1000$
        </Button> */}
      </ButtonGroup>
    </>
  );
}
