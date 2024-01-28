import React from "react";
import { Container } from "react-bootstrap";
import "./homePage.css";
import Infomation from "./components/information/information";
import SearchEmployees from "./components/search-employees/searchEmployees";
import FilterEmployees from "./components/filter-employee/filter-employee";
import EmployeesList from "./components/employees-list/employeesList";
import EmployeesAddForm from "./components/employees-add-form/employeesAddForm";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesSalary: [
        {
          name: "Br.Dimon",
          salary: 4000,
          ingrease: false,
          id: 1,
          like: true,
        },
        {
          name: "Ct.Qubic",
          salary: 1500,
          ingrease: false,
          id: 2,
          like: false,
        },
        {
          name: "Mr.Who",
          salary: 800,
          ingrease: false,
          id: 3,
          like: false,
        },
      ],
      targetUser: "",
      buttonId: "all",
    };
    this.idCounter = 4;
  }

  // // toggle like
  // toggleLike = (id, target) => {
  //   if (target.tagName === "DIV") {
  //     this.setState(({ employeesSalary }) => ({
  //       employeesSalary: employeesSalary.map((elem) => {
  //         if (elem.id === id) {
  //           return { ...elem, like: !elem.like };
  //         } else return elem;
  //       }),
  //     }));
  //   }
  // };

  // // toggle ingrease
  // toggleIngrease = (id) => {
  //   this.setState(({ employeesSalary }) => ({
  //     employeesSalary: employeesSalary.map((elem) => {
  //       if (elem.id === id) {
  //         return { ...elem, ingrease: !elem.ingrease };
  //       } else return elem;
  //     }),
  //   }));
  // };

  // Поєднуємо два попередніх методи в один універсальний
  toggleProperties = (id, attr) => {
    this.setState(({ employeesSalary }) => ({
      employeesSalary: employeesSalary.map((elem) => {
        if (elem.id === id) {
          return { ...elem, [attr]: !elem[attr] };
        } else return elem;
      }),
    }));
  };

  //   delete item
  deleteItem = (id) => {
    this.setState(({ employeesSalary }) => ({
      employeesSalary: employeesSalary.filter((elem) => elem.id !== id),
    }));
  };

  // set item
  setName = (e, name, salary) => {
    e.preventDefault();
    const newItem = {
      name,
      salary,
      ingrease: false,
      like: false,
      id: this.idCounter++,
    };
    this.setState(({ employeesSalary }) => ({
      employeesSalary: [...employeesSalary, newItem],
    }));
  };

  // search person
  findPerson = (person) => {
    this.setState({ targetUser: person });
  };

  searchPerson = (user, arr) => {
    if (user) {
      return arr.filter((elem) => elem.name.toLowerCase().indexOf(user) > -1);
    } else return arr;
  };

  //filter person

  findButton = (buttonId) => {
    this.setState({ buttonId });
  };

  emploeyeesFilter = (buttonId, arr) => {
    switch (buttonId) {
      case "increase":
        return arr.filter((elem) => elem.like);
      case "moreSalary":
        return arr.filter((elem) => elem.salary > 1000);
      default:
        return arr;
    }
  };

  render() {
    const { employeesSalary, targetUser, buttonId } = this.state;
    const employeesNumber = employeesSalary.length;
    const bonus = employeesSalary.filter((elem) => elem.ingrease).length;
    const person = this.searchPerson(targetUser, employeesSalary);
    const filteredPerson = this.emploeyeesFilter(buttonId, person);
    return (
      <>
        <Container className="home-container">
          <h2 className="home-page-title">HomePage</h2>

          <div className="search-employees-wrapper">
            <Infomation employeesNumber={employeesNumber} bonus={bonus} />

            <div className="search-panel bg-primary">
              <SearchEmployees findPerson={this.findPerson} />
              <FilterEmployees findButton={this.findButton} active={buttonId} />
            </div>

            <EmployeesList
              // employeesSalary={employeesSalary}
              employeesSalary={filteredPerson}
              // toggleLike={this.toggleLike}
              // toggleIngrease={this.toggleIngrease}
              toggleProperties={this.toggleProperties}
              deleteItem={this.deleteItem}
            />
            <EmployeesAddForm setName={this.setName} />
          </div>
        </Container>
      </>
    );
  }
}
