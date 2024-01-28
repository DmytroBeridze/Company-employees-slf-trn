import { Button, ListGroup } from "react-bootstrap";
import { FaStar, FaCookie } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import "./employeesList.css";

export default function EmployeesList({
  employeesSalary,
  // toggleLike,
  // toggleIngrease,
  toggleProperties,
  deleteItem,
}) {
  let personData = "";

  if (employeesSalary.length !== 0) {
    personData = employeesSalary.map((elem) => {
      const { id, ...props } = elem;

      // toggle like
      let likeActive =
        "pt-2 d-flex align-items-center gap-3 employee-list-item";
      if (props.like) {
        likeActive += " show";
      }

      if (props.ingrease) {
        likeActive += " activeClass";
      }

      return (
        <ListGroup.Item
          role="button"
          className={likeActive}
          key={id}
          // onClick={(e) => toggleLike(id, e.target)}
        >
          <div
            data-item="like"
            className="employeeName me-auto"
            // onClick={(e) => toggleLike(id)}
            onClick={(e) =>
              toggleProperties(id, e.target.getAttribute("data-item"))
            }
          >
            {props.name}
          </div>
          <input
            type="text"
            className="form-control w-25"
            defaultValue={props.salary}
          ></input>
          <Button
            data-item="ingrease"
            variant="light"
            className="btn-light"
            // onClick={(e) => {
            //   toggleIngrease(id);
            // }}
            onClick={(e) => {
              toggleProperties(id, e.currentTarget.getAttribute("data-item"));
            }}
          >
            <FaCookie className="cookie-icon" />
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              deleteItem(id);
            }}
          >
            <MdOutlineDelete className="trash-icon" />
          </Button>
          <FaStar className="star-icon" />
        </ListGroup.Item>
      );
    });
  } else {
    personData = (
      <ListGroup.Item className=" text-danger p-3 fs-5 text border-danger-subtle">
        Такого працівника не знайдено
      </ListGroup.Item>
    );
  }

  return (
    <>
      <ListGroup className="mt-3 fs-5 ">{personData}</ListGroup>
    </>
  );
}
