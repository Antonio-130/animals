import { Link, useParams } from "wouter";
import { animals } from "../../data";

export default function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === Number(id));
  if (!animal) {
    return (
      <div>
        <h1>Animal no encontrado</h1>
        <Link to="/animals">Volver a la lista de animales</Link>
      </div>
    );
  }
  return (
    <div>
      <h2>{animal?.name}</h2>
      <p>{animal?.description}</p>
      <Link to="/animals">Volver a la lista de animales</Link>
    </div>
  );
}
