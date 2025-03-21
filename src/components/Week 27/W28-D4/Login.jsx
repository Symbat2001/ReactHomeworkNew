import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>
        <Link to="/login/register">Register</Link>
      </p>
    </div>
  );
}

