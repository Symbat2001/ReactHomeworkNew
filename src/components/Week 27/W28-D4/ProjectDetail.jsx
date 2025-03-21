import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Жоба №{id}</h2>
      <p>Бұл {id}-ші жоба туралы ақпарат</p>
    </div>
  );
}

