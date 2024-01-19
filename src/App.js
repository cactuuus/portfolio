import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import ProjectsPage from "./pages/ProjectsPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  // info about pages in the website
  const home = { name: "about", path: "/", element: <HomePage /> };
  const coffee = { name: "coffee", path: "/coffee", element: <CoffeePage /> };
  const projects = {
    name: "projects",
    path: "/projects",
    element: <ProjectsPage />,
  };
  const routes = [home, coffee, projects];

  return (
    <BrowserRouter>
      <Header pages={routes} />
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
