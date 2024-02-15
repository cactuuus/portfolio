import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  const faviconTag = document.getElementById("favicon");
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (isDark.matches) faviconTag.href = "./faviconDark.ico";
  else faviconTag.href = "./favicon.ico";

  // info about pages in the website
  const home = { name: "about", path: "/", element: <HomePage /> };
  const projects = {
    name: "projects",
    path: "/projects",
    element: <ProjectsPage />,
  };
  const routes = [home, projects];

  return (
    <BrowserRouter>
      <Header pages={routes} />
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.name} path={route.path} element={route.element} />
          );
        })}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
