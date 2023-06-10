import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/student");
  };

  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <button onClick={handleStudentClick} data-testid="student-btn">
        All Student
      </button>
    </div>
  );
};

export default Home;
