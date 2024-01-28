import { Button, Form } from "react-bootstrap";
import "./employeesAddForm.css";
import React from "react";

export default class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };

    this.disabledName = true;
    this.disabledSal = true;

    this.inputNameError = false;
    this.inputSalaryError = false;
  }

  nameChange = (name) => {
    if (name.length < 3) {
      this.disabledName = true;
      this.inputNameError = true;
    } else {
      this.disabledName = false;
      this.inputNameError = false;
    }
    this.setState({ name });
  };

  salaryChange = (salary) => {
    if (salary.length < 2 || isNaN(salary)) {
      this.disabledSal = true;
      this.inputSalaryError = true;
    } else {
      this.disabledSal = false;
      this.inputSalaryError = false;
    }
    this.setState({ salary });
  };

  // setNewUserData = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  formSend = (e) => {
    e.preventDefault();
    this.props.setName(e, this.state.name, this.state.salary);
    this.setState({ name: "", salary: "" });
    this.disabledName = true;
    this.disabledSal = true;
  };

  // formVerification = (e) => {
  //   e.preventDefault();
  //   if (
  //     this.state.name &&
  //     this.state.salary &&
  //     !isNaN(this.state.salary) &&
  //     this.state.salary.length >= 3
  //   ) {
  //     this.props.setName(e, this.state.name, this.state.salary);
  //     this.setState({ name: "", salary: "" });
  //     this.disabled = true;
  //   } else return;
  // };

  render() {
    // так як вже є клас бутстрап, inputNameStyle зразу пустий, шнакше треба як в inputSalaryStyle
    let inputNameStyle = "";
    if (this.inputNameError) {
      inputNameStyle += " input-error";
    }

    let inputSalaryStyle = "form-control";
    if (this.inputSalaryError) {
      inputSalaryStyle += " input-error";
    }

    return (
      <>
        <Form
          className=" bg-primary p-3 mt-3 rounded-3 employees-add-form "
          onSubmit={(e) => {
            this.formSend(e);
          }}
        >
          <h3 className="text-white mb-4">Додайте нового працівника</h3>
          <div className="d-flex align-items-end gap-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Ім'я працівника</Form.Label>
              <Form.Control
                className={inputNameStyle}
                name="name"
                value={this.state.name}
                type="text"
                placeholder="ПІБ"
                // onChange={(e) => this.setNewUserData(e)}
                onChange={(e) => this.nameChange(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Заробітна плата</Form.Label>
              <Form.Control
                className={inputSalaryStyle}
                name="salary"
                value={this.state.salary}
                type="text"
                placeholder="З/П в $"
                // onChange={(e) => this.setNewUserData(e)}
                onChange={(e) => this.salaryChange(e.target.value)}
              />
            </Form.Group>
            <Button
              disabled={this.disabledName || this.disabledSal}
              as="input"
              type="submit"
              value="Додати"
              className="mb-3 btn-outline-light"
              // onClick={(e) =>
              //   this.props.setName(e, this.state.name, this.state.salary)
              // }
            />
          </div>
        </Form>
      </>
    );
  }
}
