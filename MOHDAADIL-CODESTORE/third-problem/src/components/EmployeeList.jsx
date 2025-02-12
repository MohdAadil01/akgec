import React, { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">Employee List</h2>
      <ul className="list">
        {employees.map((employee) => (
          <li key={employee.id} className="list-item">
            <h3 className="item-name">{employee.name}</h3>
            <p className="item-detail">Email: {employee.email}</p>
            <p className="item-detail">Phone: {employee.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
