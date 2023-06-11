import React, { useState } from "react";

const AddStudent = () => {
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const faculty = getFacultyByProgramStudy(programStudy);

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

//     try {
//       const response = await fetch("http://localhost:3001/student", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newStudent),
//       });

//       if (response.ok) {
//         // Redirect to /student after successful submission
//         window.location.href = "/student";
//       } else {
//         console.error("Failed to create student");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

  const getFacultyByProgramStudy = (newStudent) => {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
    
   props.createStudent(studentdata);

    setFullname("");
    setBirthDate("");
    setGender("");
    setProgramStudy("");
    setAddress("");
    setProfilePicture("");
    setPhoneNumber("");
  };
    
  return (
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
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="text"
          id="profilePicture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          data-testid="profilePicture"
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
      <button type="submit" data-testid="add-btn">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
