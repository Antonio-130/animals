import { Link, Route, Switch } from "wouter";
import "./App.css";
import AnimalDetail from "./components/animal-detail";
import ListOfAnimals from "./components/list-of-animals";

function App() {
  return (
    <Switch>
      <Route path="/">
        <h1>Bienvenido!</h1>
        <Link to="/animals">Ir a animales →</Link>
      </Route>
      <Route path="/animals" component={ListOfAnimals} />
      <Route path="/animals/:id" component={AnimalDetail} />

      <Route>
        <h1>404 not found</h1>
        <Link to="/">← Volver</Link>
      </Route>
    </Switch>
  );
}

export default App;
