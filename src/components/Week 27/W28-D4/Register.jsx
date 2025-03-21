import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Тиркелу сатти аякталды!");
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

