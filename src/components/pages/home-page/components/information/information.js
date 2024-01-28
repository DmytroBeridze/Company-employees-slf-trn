import "./information.css";

export default function Infomation({ employeesNumber, bonus }) {
  return (
    <section>
      <>
        <div className="info bg-primary text-light" data-bs-theme="dark">
          <h1>Облік працівників в компанії</h1>
          <div className="employees-number">
            Загальна кількість працівників: {employeesNumber}
          </div>
          <div className="employees-bonus">Премію отримують: {bonus}</div>
        </div>
      </>
    </section>
  );
}
