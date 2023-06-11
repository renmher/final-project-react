import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import NavBar from "./components/Navbar";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import "./CSS/style.css";

const App = () => {
    const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  
    const renderStudents = async () => {
    try {
      const respone = await fetch("http://localhost:3001/student");
      const result = await respone.json();
      setStudents(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleadddata = async (student) => {
    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      setLoading(true);
      renderStudents();
      navigate("/student");
    } catch (error) {}
  };
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent createStudent={handleadddata}/>} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<EditStudent />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
