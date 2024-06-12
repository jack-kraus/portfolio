import './css/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import data from "./data/pages";
import Project from './pages/Project';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects">
          <Route index element={<Projects />} />
          { Object.entries(data).map(([key, value] : [string, any]) => <Route path={key} element={<Project {...value}/>}/>) }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
