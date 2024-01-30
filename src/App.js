import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import Header from "./components/Header";
import "./App.css";

function App() {
  // info about pages in the website
  const home = { name: "about", path: "/", element: <HomePage /> };
  const resume = { name: "resume", path: "/resume", element: <ResumePage /> };
  const projects = {
    name: "projects",
    path: "/projects",
    element: <ProjectsPage />,
  };
  const routes = [home, projects, resume];

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
