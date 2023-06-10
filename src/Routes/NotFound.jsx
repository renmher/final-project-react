import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const NotClick = () => {
    navigate("");
  };

  return (
    <>
      <h1>404 | Not Found</h1>
      <button data-testid="back" onClick={NotClick}>
        Back
      </button>
    </>
  );
};

export default NotFound;
