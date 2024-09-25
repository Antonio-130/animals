import { lazy, Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import "./App.css";
// import AnimalDetail from "./components/animal-detail";
// import ListOfAnimals from "./components/list-of-animals";

const AnimalDetailPage = lazy(() => import("./components/animal-detail"));
const ListOfAnimalsPage = lazy(() => import("./components/list-of-animals"));

function App() {
  return (
    <Switch>
      <Route path="/">
        <h1>Bienvenido!</h1>
        <Link to="/animals">Ir a animales →</Link>
      </Route>

      <Route path="/animals">
        <Suspense fallback={<h1>Cargando Lista...</h1>}>
          <ListOfAnimalsPage />
        </Suspense>
      </Route>

      <Route path="/animals/:id">
        <Suspense fallback={<h1>Cargando Animal...</h1>}>
          <AnimalDetailPage />
        </Suspense>
      </Route>

      <Route path="/*">
        <h1>404 not found</h1>
        <Link to="/">← Volver</Link>
      </Route>
    </Switch>
  );
}

export default App;
