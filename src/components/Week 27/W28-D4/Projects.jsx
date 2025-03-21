import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2>Менің жобаларым</h2>
      <ul>
        <li><Link to="/projects/1">Project 1</Link></li>
        <li><Link to="/projects/2">Project 2</Link></li>
      </ul>
    </div>
  );
}

