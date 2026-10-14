import './style.css';
import { Routes, Route } from 'react-router';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function Skills() {
  return <main><h1>Skills</h1></main>;
}

function Projects() {
  return <main><h1>Projects</h1></main>;
}

function Contact() {
  return <main><h1>Contact</h1></main>;
}

function More() {
  return <main><h1>More</h1></main>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
}

export default App;
