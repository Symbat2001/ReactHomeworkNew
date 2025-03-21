import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Бастапқы бетке қош келдіңіз!</h1>
      <nav>
        <Link to="/projects">My Projects</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

