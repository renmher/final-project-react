// TODO: answer here
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <h2>
        <Link className="nav-h2" to="/" data-testid="home-page">
          Student Portal
        </Link>
      </h2>
      <div className="btn">
        <button>
          <Link className="nav-btn" to="/student" data-testid="student-page">
            All Student
          </Link>
        </button>
        <button>
          <Link className="nav-btn" to="/add" data-testid="add-page">
            Add Student
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
