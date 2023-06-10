// TODO: answer here
import { useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://localhost:3001/student`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setStudents(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return "Loading ...";
  }

  // TODO: answer here

  return (
    <>
      <h1>Student Portal</h1>
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="student-data-row">
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
              <td>{student.birthDate}</td>
              <td>{student.gender}</td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(student.id)}
                  data-testid={`delete-${student.id}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Student;
