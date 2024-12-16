import React, { useState } from "react";
import RegisterForm from "./components/RegisterFrom";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <div className="app">
      {!isRegistered ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <EmployeeList />
      )}
    </div>
  );
};

export default App;
