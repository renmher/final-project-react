import React, { useState, useEffect } from "react";

const EditStudent = ({ match, history }) => {
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/students/${match.params.id}`
        );
        const data = await response.json();
        setStudent(data);
        setFullname(data.fullname);
        setAddress(data.address);
        setPhoneNumber(data.phoneNumber);
        setBirthDate(data.birthDate);
        setGender(data.gender);
        setProgramStudy(data.programStudy);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchStudent();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/students/${match.params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            address,
            phoneNumber,
            birthDate,
            gender,
            programStudy,
          }),
        }
      );

      if (response.ok) {
        // Redirect to /student when edit is successful
        history.push("/student");
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      {student ? (
        <>
          <img src={student.profilePicture} alt="Profile Picture" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname">Fullname:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                data-testid="name"
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                data-testid="address"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                data-testid="phoneNumber"
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date:</label>
              <input
                type="text"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                data-testid="date"
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                data-testid="gender"
              />
            </div>
            <div>
              <label htmlFor="programStudy">Program Study:</label>
              <input
                type="text"
                id="programStudy"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
                data-testid="prody"
              />
            </div>
            <button type="submit" data-testid="edit-btn">
              Edit Student
            </button>
          </form>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default EditStudent;
